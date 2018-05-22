import {mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "../shader";
import {global} from "../globals";
import * as assert from "assert";

let gl: WebGL2RenderingContext;

export class PointList {
    private data = [];
    private counter = 0;
    
    constructor(){
        this.data = [];
    }
    
    private pushAlloc(pos:vec3, color:vec4){
        this.data.push(...pos,...color);
        this.counter += 7;
    }
    
    public push(point:Point){
        if(this.counter >= this.data.length){
            this.pushAlloc(point.pos,point.color);
        }
        this.data[this.counter++] = point.pos[0];
        this.data[this.counter++] = point.pos[1];
        this.data[this.counter++] = point.pos[2];
        
        this.data[this.counter++] = point.color[0];
        this.data[this.counter++] = point.color[1];
        this.data[this.counter++] = point.color[2];
        this.data[this.counter++] = point.color[3];
        
    }
    public pushRaw(pos:vec3, color:vec4){
        if(this.counter >= this.data.length){
            this.pushAlloc(pos,color);
        }
        this.data[this.counter++] = pos[0];
        this.data[this.counter++] = pos[1];
        this.data[this.counter++] = pos[2];

        this.data[this.counter++] = color[0];
        this.data[this.counter++] = color[1];
        this.data[this.counter++] = color[2];
        this.data[this.counter++] = color[3];
    }
    public static stride(){
        return 4*7;
    }
    public static positionOffset(){
        return 0;
    }
    public static colorOffset(){
        return 4*3;
    }
    
    public get(){
        return this.data;
    }
    
    public clear(){
        this.data = [];
    }
    
    public allocate(size:number):void{
        this.data = new Array(size * 7);
    }
    
    public size() {
        return this.counter / 7;
    }
}

interface Point{
     pos:vec3;
     color:vec4;
}


export class LineRenderer{
    
    private points:PointList;
    private shader:Shader;
    private mvp_id:WebGLUniformLocation;
    private VAO:WebGLVertexArrayObject;
    private VBO:WebGLBuffer;
    private line_width:number = 4;
    
    constructor(){
        gl = global.gl;
        assert(gl);
        this.shader = new Shader(gl, require("shaders/line.vert"), require("shaders/line.frag"));
        this.mvp_id = this.shader.uniforms.model_view_projection_matrix;
        
        this.VAO = gl.createVertexArray();
        gl.bindVertexArray(this.VAO);
        
        this.VBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
        
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT,false,  PointList.stride(), PointList.positionOffset());
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 4, gl.FLOAT,true, PointList.stride(), PointList.colorOffset());
        gl.bindVertexArray(null);
    }
    
    public setLineWidth(width:number):void{
        this.line_width = width;
    }
    
    public drawPointList(point_list:PointList, vp_matrix:mat4): void{
        this.bind();
        
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(point_list.get()), gl.STREAM_DRAW);
        this.shader.setMat4(this.mvp_id,vp_matrix);
        
        gl.lineWidth(this.line_width);
        gl.drawArrays(gl.LINES, 0, point_list.size());
        gl.bindVertexArray(null);
        
    }
    
    public preAllocateLine(size:number):void{
        this.points.allocate(size);
    }
    
    public addLine(p1:vec3, p2:vec3, color:vec4){
        this.points.pushRaw(p1,color);
        this.points.pushRaw(p2,color);
    }
    
    public drawAndClear(vp_matrix:mat4):void{
        if(this.points.size() === 0) return;
        
       this.bind();
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.points.get()), gl.STREAM_DRAW);
        this.shader.setMat4(this.mvp_id,vp_matrix);

        gl.lineWidth(this.line_width);
        gl.drawArrays(gl.LINES, 0, this.points.size())
        gl.bindVertexArray(null);
        this.points.clear();
    }
    
    public clear():void{
        this.points.clear();
    }
    
    private bind(){
        this.shader.use();
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);

    }
    
    public drawLine(p1:vec3, p2:vec3, color:vec4, vp_matrix:mat4):void{
        let data = new PointList();
        data.allocate(2);
        data.pushRaw(p1,color);
        data.pushRaw(p2,color);
        this.drawPointList(data,vp_matrix);
    }
}