import {Disk} from "../disk";
import {Material} from '../../lib/OBJ';
import {BasicModel} from "./basicmodel";
import {vec3} from "gl-matrix";



export class MeshlessModel {
    name:string;
    VAO: WebGLVertexArrayObject;
    data: Float32Array;
    indices: Uint16Array;
    buffer: WebGLBuffer;
    index_buffer: WebGLBuffer;
    initialized:Boolean;
    texture: WebGLTexture;
    material: Material;
    stride: number;
    rotation_offset: number;
    
    constructor(data:Float32Array, indices:Uint16Array, mat: Material) {
        this.data = data;
        this.indices = indices;
        this.stride = 8;
        this.name = "height_map_model_" + Disk.height_map_model_gen_count;
        this.material = mat;
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
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, this.stride*4, 0);
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, this.stride*4, 12);
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, true, this.stride*4, 20);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);

        this.texture = this.material.mapDiffuse.texture_id;
        
        this.initialized = true;
    }

    activateBuffers(gl){
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
    }
    
    activateMaterial(gl){
        // gl.activeTexture(gl.TEXTURE0);
        // gl.bindTexture(gl.TEXTURE_2D, this.texture);

        if (this.material.isTextureActive[0] && this.material.mapTransparency.texture_id) {
            gl.activeTexture(gl.TEXTURE0);  // transparency
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapTransparency.texture_id);
        }
        if (this.material.isTextureActive[1] && this.material.mapEmissive.texture_id) {
            gl.activeTexture(gl.TEXTURE1);  // emission
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapEmissive.texture_id);
        }

        if (this.material.isTextureActive[2] && this.material.mapAmbient.texture_id) {
            gl.activeTexture(gl.TEXTURE2);  // ambient
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapAmbient.texture_id);
        }
        if (this.material.isTextureActive[3] && this.material.mapDiffuse.texture_id) {
            gl.activeTexture(gl.TEXTURE3);  // diffuse
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapDiffuse.texture_id);
        }
        if (this.material.isTextureActive[4] && this.material.mapSpecular.texture_id) {
            gl.activeTexture(gl.TEXTURE4);  // specular
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapSpecular.texture_id);
        }
        if (this.material.isTextureActive[5] && this.material.mapSpecularExponent.texture_id) {
            gl.activeTexture(gl.TEXTURE5);  // shininess
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapSpecularExponent.texture_id);
        }


        BasicModel.shader.setFloat(BasicModel.shader.uniforms.material_transparency, this.material.transparency);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_ambient_colour, this.material.ambient);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_diffuse_colour, this.material.diffuse);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_specular_colour, this.material.specular);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_emissive_colour, this.material.emissive);
        BasicModel.shader.setFloat(BasicModel.shader.uniforms.material_shininess, this.material.specularExponent);
        BasicModel.shader.setIntV(BasicModel.shader.uniforms.material_is_texture_active, this.material.isTextureActive);

    }
    
    draw(gl:WebGL2RenderingContext){
        this.activateBuffers(gl);
        this.activateMaterial(gl);
       this.drawActivatedMaterial(gl);
    }

    drawActivatedMaterial(gl: WebGL2RenderingContext) {
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT,0);
    }

}