import {mat4, vec3} from "gl-matrix";

let OBJ = require('../../lib/OBJ/index.js');
import {Mesh} from '../../lib/OBJ/index.js'
import {Shader} from '../../shader';
import {BasicModelShader} from "../../basicmodelshader";




export class BasicModel {
    VAO: WebGLVertexArrayObject;
    mesh: Mesh;
    initialized: Boolean;
    rotation_offset: number;
    textures: Array<WebGLTexture>;
    static shader: BasicModelShader;
    static EMPTY_TEXTURE: WebGLTexture;

    public readonly radius: number;
    public readonly half_height:number;
    
    constructor(mesh: Mesh, radius:number = 1, half_height:number = 1) {
        this.mesh = mesh;
        this.radius = radius;
        this.half_height = half_height;
        this.initialized = false;
        this.rotation_offset = 0;
    }

    static initWithShader(gl: WebGL2RenderingContext, shader: BasicModelShader) {
        this.shader= shader;
    
        shader.use();
        gl.bindAttribLocation(shader.ID, 0, "a_vertex");
        gl.bindAttribLocation(shader.ID, 1, "a_tex_coord");
        gl.bindAttribLocation(shader.ID, 2, "a_normal");
        // gl.bindAttribLocation(shader.ID, 3, "a_vertex1");
        // gl.bindAttribLocation(shader.ID, 4, "a_normal1");

        gl.bindVertexArray(null);
        BasicModel.EMPTY_TEXTURE = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.EMPTY_TEXTURE);
        const pixel = new Uint8Array([0, 0, 0, 255]);  // black
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);

        

    }



    static use(gl: WebGL2RenderingContext) {

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

        this.textures = [];

        this.initAllTextures(gl);
        this.initialized = true;
    }


    initAllTextures(gl: WebGL2RenderingContext) {
        for (let i = 0; i < this.mesh.materialNames.length; i++) {
            if (this.mesh.materialsByIndex[i].mapDiffuse) {
                if (this.mesh.materialsByIndex[i].mapDiffuse.texture.complete) {
                    this.mesh.materialsByIndex[i].mapDiffuse.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapDiffuse.texture);
                } else {
                    this.mesh.materialsByIndex[i].mapDiffuse.texture.addEventListener('load', () => {
                        this.mesh.materialsByIndex[i].mapDiffuse.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapDiffuse.texture);
                    });
                }
            }
            if (this.mesh.materialsByIndex[i].mapAmbient) {
                if (this.mesh.materialsByIndex[i].mapAmbient.texture.complete) {
                    this.mesh.materialsByIndex[i].mapAmbient.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapAmbient.texture);
                } else {
                    this.mesh.materialsByIndex[i].mapAmbient.texture.addEventListener('load', () => {
                        this.mesh.materialsByIndex[i].mapAmbient.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapAmbient.texture);
                    });
                }
            }
            if (this.mesh.materialsByIndex[i].mapEmissive) {
                if (this.mesh.materialsByIndex[i].mapEmissive.texture.complete) {
                    this.mesh.materialsByIndex[i].mapEmissive.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapEmissive.texture);
                } else {
                    this.mesh.materialsByIndex[i].mapEmissive.texture.addEventListener('load', () => {
                        this.mesh.materialsByIndex[i].mapEmissive.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapEmissive.texture);
                    });
                }
            }
        }


    }

    loadTexture(gl: WebGL2RenderingContext, texture_num: number, texture: any, flip: boolean = true) {
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
        this.textures[texture_num] = texture_id;
        return texture_id;

    }
    
    draw(gl: WebGL2RenderingContext) {
        this.activateBuffers(gl);

        this.textures.forEach((texture, index) => {
            let is = this.mesh.vertexBuffer.itemSize;
            let submesh = this.mesh.submesh[index];
            this.activateMaterial(gl, index);
            let byteSize = 2;
            gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
        });

        gl.bindVertexArray(null);
    }

    // draw(gl:WebGL2RenderingContext){
    //     gl.bindVertexArray(this.VAO);
    //     gl.activeTexture(gl.TEXTURE0);
    //     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    //
    //
    //     this.textures.forEach((texture,index) =>{
    //         let is = this.mesh.vertexBuffer.itemSize;
    //         let submesh = this.mesh.submesh[index];
    //         let byteSize = 2;
    //         gl.bindTexture(gl.TEXTURE_2D, texture);
    //         gl.drawElements(gl.TRIANGLES, this.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT,submesh.offset * is * byteSize);
    //     });
    //
    //     gl.bindVertexArray(null);
    // }

    activateBuffers(gl: WebGL2RenderingContext){
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    }
    
    drawActivatedMaterial(gl: WebGL2RenderingContext, index: number) {
        let is = this.mesh.vertexBuffer.itemSize;
        let submesh = this.mesh.submesh[index];
        let byteSize = 2;
        gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
       
    }


    activateMaterial(gl: WebGL2RenderingContext, index: number) {
        if (this.mesh.materialsByIndex[index].isTextureActive[0] && this.mesh.materialsByIndex[index].mapTransparency.texture_id) {
            gl.activeTexture(gl.TEXTURE0);  // transparency
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapTransparency.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[1] && this.mesh.materialsByIndex[index].mapEmissive.texture_id) {
            gl.activeTexture(gl.TEXTURE1);  // emission
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapEmissive.texture_id);
        }

        if (this.mesh.materialsByIndex[index].isTextureActive[2] && this.mesh.materialsByIndex[index].mapAmbient.texture_id) {
            gl.activeTexture(gl.TEXTURE2);  // ambient
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapAmbient.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[3] && this.mesh.materialsByIndex[index].mapDiffuse.texture_id) {
            gl.activeTexture(gl.TEXTURE3);  // diffuse
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapDiffuse.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[4] && this.mesh.materialsByIndex[index].mapSpecular.texture_id) {
            gl.activeTexture(gl.TEXTURE4);  // specular
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapSpecular.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[5] && this.mesh.materialsByIndex[index].mapSpecularExponent.texture_id) {
            gl.activeTexture(gl.TEXTURE5);  // shininess
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapSpecularExponent.texture_id);
        }

        
        BasicModel.shader.setFloat(BasicModel.shader.uniforms.material_transparency, this.mesh.materialsByIndex[index].transparency);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_ambient_colour, this.mesh.materialsByIndex[index].ambient);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_diffuse_colour, this.mesh.materialsByIndex[index].diffuse);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_specular_colour, this.mesh.materialsByIndex[index].specular);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_emissive_colour, this.mesh.materialsByIndex[index].emissive);
        BasicModel.shader.setFloat(BasicModel.shader.uniforms.material_shininess, this.mesh.materialsByIndex[index].specularExponent);
        BasicModel.shader.setIntV(BasicModel.shader.uniforms.material_is_texture_active, this.mesh.materialsByIndex[index].isTextureActive);


    }


}