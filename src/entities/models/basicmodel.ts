let OBJ = require('../../lib/OBJ/index.js');
import {Mesh, Material} from '../../lib/OBJ/index.js'
import {BasicModelShader} from "../../basicmodelshader";


export class BasicModel {
    VAO: WebGLVertexArrayObject;
    mesh: Mesh;
    initialized: Boolean;
    rotation_offset: number;

    public readonly radius: number;
    public readonly half_height: number;

    constructor(mesh: Mesh, radius: number = 0, half_height: number = 0) {
        this.mesh = mesh;
        this.radius = radius;
        this.half_height = half_height;
        this.initialized = false;
        this.rotation_offset = 0;
    }
    
    init(gl: WebGL2RenderingContext) {
        this.VAO = gl.createVertexArray();
        OBJ.initMeshBuffers(gl, this.mesh);
        gl.bindVertexArray(this.VAO);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.vertexBuffer);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        gl.enableVertexAttribArray(1);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.textureBuffer);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, 0, 0);

        gl.enableVertexAttribArray(2);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.normalBuffer);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
        //
        // gl.disableVertexAttribArray(3);
        // gl.disableVertexAttribArray(4);

        //this.textures = [];

        this.initAllTextures(gl);
        this.initialized = true;
    }


    initAllTextures(gl: WebGL2RenderingContext) {
        for(let i in this.mesh.materialsByIndex){
            let material = this.mesh.materialsByIndex[i];
            if (material.mapDiffuse) {
                if (material.mapDiffuse.texture.complete) {
                    material.mapDiffuse.texture_id = this.loadTexture(gl, material.mapDiffuse.texture);
                } else {
                    material.mapDiffuse.texture.addEventListener('load', () => {
                        material.mapDiffuse.texture_id = this.loadTexture(gl,  material.mapDiffuse.texture);
                    });
                }
            }
            if (material.mapAmbient) {
                if (material.mapAmbient.texture.complete) {
                    material.mapAmbient.texture_id = this.loadTexture(gl,  material.mapAmbient.texture);
                } else {
                    material.mapAmbient.texture.addEventListener('load', () => {
                        material.mapAmbient.texture_id = this.loadTexture(gl,  material.mapAmbient.texture);
                    });
                }
            }
            if (material.mapEmissive) {
                if (material.mapEmissive.texture.complete) {
                    material.mapEmissive.texture_id = this.loadTexture(gl, material.mapEmissive.texture);
                } else {
                    material.mapEmissive.texture.addEventListener('load', () => {
                        material.mapEmissive.texture_id = this.loadTexture(gl,  material.mapEmissive.texture);
                    });
                }
            }
        }
       


    }

    private loadTexture(gl: WebGL2RenderingContext, texture: any, flip: boolean = true) {
        let texture_id = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture_id);
        if (flip)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, texture);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        return texture_id;

    }

    draw(gl: WebGL2RenderingContext, shader:BasicModelShader) {
        this.activateBuffers(gl);

        for(let s in this.mesh.materialsByIndex) {
            let i = parseInt(s);
            
            let is = this.mesh.vertexBuffer.itemSize;
            let submesh = this.mesh.submesh[i];
            this.activateMaterial(gl,shader, i);
            let byteSize = 2;
            gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
        }

        gl.bindVertexArray(null);
    }

    activateBuffers(gl: WebGL2RenderingContext) {
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    }

    drawActivatedMaterial(gl: WebGL2RenderingContext, index: number) {
        let is = this.mesh.vertexBuffer.itemSize;
        let submesh = this.mesh.submesh[index];
        let byteSize = 2;
        gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);

    }

    activateMaterial(gl: WebGL2RenderingContext, shader:BasicModelShader, index: number) {
        let material:Material = this.mesh.materialsByIndex[index];
        if (material.isTextureActive[0] && material.mapTransparency.texture_id) {
            gl.activeTexture(gl.TEXTURE0);  // transparency
            gl.bindTexture(gl.TEXTURE_2D, material.mapTransparency.texture_id);
        }
        if (material.isTextureActive[1] && material.mapEmissive.texture_id) {
            gl.activeTexture(gl.TEXTURE1);  // emission
            gl.bindTexture(gl.TEXTURE_2D, material.mapEmissive.texture_id);
        }

        if (material.isTextureActive[2] && material.mapAmbient.texture_id) {
            gl.activeTexture(gl.TEXTURE2);  // ambient
            gl.bindTexture(gl.TEXTURE_2D, material.mapAmbient.texture_id);
        }
        if (material.isTextureActive[3] && material.mapDiffuse.texture_id) {
            gl.activeTexture(gl.TEXTURE3);  // diffuse
            gl.bindTexture(gl.TEXTURE_2D, material.mapDiffuse.texture_id);
        }
        if (material.isTextureActive[4] && material.mapSpecular.texture_id) {
            gl.activeTexture(gl.TEXTURE4);  // specular
            gl.bindTexture(gl.TEXTURE_2D, material.mapSpecular.texture_id);
        }
        if (material.isTextureActive[5] && material.mapSpecularExponent.texture_id) {
            gl.activeTexture(gl.TEXTURE5);  // shininess
            gl.bindTexture(gl.TEXTURE_2D, material.mapSpecularExponent.texture_id);
        }

        shader.setBool(shader.uniforms.tween_enabled, false);
        shader.setFloat(shader.uniforms.material_transparency, material.transparency);
        shader.setVec3(shader.uniforms.material_ambient_colour, material.ambient);
        shader.setVec3(shader.uniforms.material_diffuse_colour, material.diffuse);
        shader.setVec3(shader.uniforms.material_specular_colour, material.specular);
        shader.setVec3(shader.uniforms.material_emissive_colour, material.emissive);
        shader.setFloat(shader.uniforms.material_shininess, material.specularExponent);
        shader.setIntV(shader.uniforms.material_is_texture_active, material.isTextureActive);

    }


}