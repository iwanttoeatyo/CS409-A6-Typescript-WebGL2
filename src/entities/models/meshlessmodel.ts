import { Disk } from "../disk";
import { Material } from "../../lib/OBJ";
import { BasicModelShader } from "../../basicmodelshader";
import * as assert from "assert";

export class MeshlessModel {
    name: string;
    VAO: WebGLVertexArrayObject;
    data: Float32Array;
    indices: Uint16Array;
    buffer: WebGLBuffer;
    index_buffer: WebGLBuffer;
    initialized: Boolean;
    texture: WebGLTexture;
    material: Material;
    stride: number;
    rotation_offset: number;

    constructor(data: Float32Array, indices: Uint16Array, mat: Material) {
        this.data = data;
        this.indices = indices;
        this.stride = 8;
        this.name = "height_map_model_" + Disk.height_map_model_gen_count;
        this.material = mat;
        assert(this.material.texturesInitialized);
        this.rotation_offset = 0;
    }

    init(gl: WebGL2RenderingContext) {
        this.VAO = gl.createVertexArray();
        this.buffer = gl.createBuffer();
        this.index_buffer = gl.createBuffer();
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, this.stride * 4, 0);
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, this.stride * 4, 12);
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, true, this.stride * 4, 20);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);

        this.texture = this.material.mapDiffuse.texture;
        this.initialized = true;
    }

    activateBuffers(gl) {
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
    }

    activateMaterial(gl, shader: BasicModelShader) {
        shader.activateMaterial(this.material);
    }

    draw(gl: WebGL2RenderingContext, shader: BasicModelShader) {
        this.activateBuffers(gl);
        this.activateMaterial(gl, shader);
        this.drawActivatedMaterial(gl);
    }

    drawActivatedMaterial(gl: WebGL2RenderingContext) {
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
}
