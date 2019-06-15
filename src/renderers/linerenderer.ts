import {mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "../shader";

export class PointList {
    private data = [];
    private counter = 0;
    private arrayView: Float32Array;
    private static readonly floats_per_point = 7;

    constructor() {
        this.data = [];
    }

    private pushAlloc(pos: vec3, color: vec4) {
        this.data.push(...pos, ...color);
        this.counter += PointList.floats_per_point;
    }

    public push(point: Point) {
        if (this.counter >= this.data.length) {
            this.pushAlloc(point.pos, point.color);
            return;
        }
        this.data[this.counter++] = point.pos[0];
        this.data[this.counter++] = point.pos[1];
        this.data[this.counter++] = point.pos[2];

        this.data[this.counter++] = point.color[0];
        this.data[this.counter++] = point.color[1];
        this.data[this.counter++] = point.color[2];
        this.data[this.counter++] = point.color[3];
    }

    public pushRaw(pos: vec3, color: vec4) {
        if (this.counter >= this.data.length) {
            this.pushAlloc(pos, color);
            return;
        }
        this.data[this.counter++] = pos[0];
        this.data[this.counter++] = pos[1];
        this.data[this.counter++] = pos[2];

        this.data[this.counter++] = color[0];
        this.data[this.counter++] = color[1];
        this.data[this.counter++] = color[2];
        this.data[this.counter++] = color[3];
    }

    public static stride() {
        return 4 * this.floats_per_point;
    }

    public static positionOffset() {
        return 0;
    }

    public static colorOffset() {
        return 4 * 3;
    }

    public getArrayView(): Float32Array {
        if (!this.arrayView || this.arrayView.length !== this.counter) this.arrayView = new Float32Array(this.data);
        return this.arrayView;
    }

    public clear() {
        this.data = [];
        this.counter = 0;
    }

    public allocate(size: number): void {
        this.data = new Array(size * PointList.floats_per_point);
        this.counter = 0;
    }

    public size() {
        return this.counter / PointList.floats_per_point;
    }
}

interface Point {
    pos: vec3;
    color: vec4;
}

export class LineRenderer {
    private readonly gl: WebGL2RenderingContext;
    private points: PointList;
    private shader: Shader;
    private readonly mvp_id: WebGLUniformLocation;
    private readonly VAO: WebGLVertexArrayObject;
    private readonly VBO: WebGLBuffer;

    constructor(gl: WebGL2RenderingContext) {
        this.gl = gl;

        this.points = new PointList();
        this.shader = new Shader(gl, require("shaders/line.vert").default, require("shaders/line.frag").default);
        this.mvp_id = this.shader.uniforms.model_view_projection_matrix;

        this.VAO = gl.createVertexArray();
        gl.bindVertexArray(this.VAO);

        this.VBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);

        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, PointList.stride(), PointList.positionOffset());
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 4, gl.FLOAT, true, PointList.stride(), PointList.colorOffset());
        gl.bindVertexArray(null);
    }

    public drawPointList(point_list: PointList, vp_matrix: mat4): void {
        let gl = this.gl;
        gl.bufferData(gl.ARRAY_BUFFER, point_list.getArrayView(), gl.STREAM_DRAW);
        this.shader.setMat4(this.mvp_id, vp_matrix);

        gl.drawArrays(gl.LINES, 0, point_list.size());
        gl.bindVertexArray(null);
    }

    public preAllocatePointLine(size: number): void {
        this.points.allocate(size);
    }

    public addLine(p1: vec3, p2: vec3, color: vec4) {
        this.points.pushRaw(p1, color);
        this.points.pushRaw(p2, color);
    }

    public drawAndClear(vp_matrix: mat4): void {
        if (this.points.size() === 0) return;
        let gl = this.gl;
        gl.bufferData(gl.ARRAY_BUFFER, this.points.getArrayView(), gl.STREAM_DRAW);
        this.shader.setMat4(this.mvp_id, vp_matrix);

        gl.drawArrays(gl.LINES, 0, this.points.size());
        gl.bindVertexArray(null);
        this.points.clear();
    }

    public clear(): void {
        this.points.clear();
    }

    public prepare() {
        let gl = this.gl;
        this.shader.use();
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    }

    public drawLine(p1: vec3, p2: vec3, color: vec4, vp_matrix: mat4): void {
        let data = new PointList();
        data.allocate(2);
        data.pushRaw(p1, color);
        data.pushRaw(p2, color);
        this.drawPointList(data, vp_matrix);
    }
}
