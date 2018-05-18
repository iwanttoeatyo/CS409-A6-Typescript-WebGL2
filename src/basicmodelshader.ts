import {mat4, vec3, vec4} from "gl-matrix";
import {Shader, Uniforms} from "./shader";
import {BasicModel} from "./entities/models/basicmodel";
import {Material} from "./lib/OBJ/"

import {global} from "./globals";


class BasicModelUniforms extends Uniforms {
    tween_enabled: WebGLUniformLocation;
    tween_factor: WebGLUniformLocation;
    material_transparency_texture: WebGLUniformLocation;
    material_emission_texture: WebGLUniformLocation;
    material_ambient_texture: WebGLUniformLocation;
    material_diffuse_texture: WebGLUniformLocation;
    material_specular_texture: WebGLUniformLocation;
    material_shininess_texture: WebGLUniformLocation;
    material_transparency_channel: WebGLUniformLocation;
    material_shininess_channel: WebGLUniformLocation;
    material_transparency: WebGLUniformLocation;
    material_ambient_colour: WebGLUniformLocation;
    material_diffuse_colour: WebGLUniformLocation;
    material_specular_colour: WebGLUniformLocation;
    material_emissive_colour: WebGLUniformLocation;
    material_shininess: WebGLUniformLocation;
    material_is_texture_active: WebGLUniformLocation;
};

export class BasicModelShader extends Shader {
    public uniforms: BasicModelUniforms;

    constructor(gl: WebGL2RenderingContext, vertexSourceCode: string, fragmentSourceCode: string) {
        super(gl, vertexSourceCode, fragmentSourceCode);
        this.use();

        this.uniforms = new BasicModelUniforms();
        this.uniforms.model_matrix = this.getUniformLocation("model_matrix");
        this.uniforms.view_matrix = this.getUniformLocation("view_matrix");
        this.uniforms.model_view_projection_matrix = this.getUniformLocation("model_view_projection_matrix");
        this.uniforms.camera_pos = this.getUniformLocation("camera_pos");
        this.uniforms.tween_enabled = this.getUniformLocation("tween_enabled");
        this.uniforms.tween_factor = this.getUniformLocation("tween_factor");
        this.uniforms.material_transparency_texture = this.getUniformLocation("material.transparency_texture");
        this.uniforms.material_emission_texture = this.getUniformLocation("material.emission_texture");
        this.uniforms.material_ambient_texture = this.getUniformLocation("material.ambient_texture");
        this.uniforms.material_diffuse_texture = this.getUniformLocation("material.diffuse_texture");
        this.uniforms.material_specular_texture = this.getUniformLocation("material.specular_texture");
        this.uniforms.material_shininess_texture = this.getUniformLocation("material.shininess_texture");
        this.uniforms.material_transparency_channel = this.getUniformLocation("material.transparency_channel");
        this.uniforms.material_shininess_channel = this.getUniformLocation("material.shininess_channel");
        this.uniforms.material_transparency = this.getUniformLocation("material.transparency");
        this.uniforms.material_ambient_colour = this.getUniformLocation("material.ambient_colour");
        this.uniforms.material_diffuse_colour = this.getUniformLocation("material.diffuse_colour");
        this.uniforms.material_specular_colour = this.getUniformLocation("material.specular_colour");
        this.uniforms.material_emissive_colour = this.getUniformLocation("material.emission_colour");
        this.uniforms.material_shininess = this.getUniformLocation("material.shininess");
        this.uniforms.material_is_texture_active = this.getUniformLocation("material.is_texture_active");


        gl.bindAttribLocation(this.ID, 0, "a_vertex");
        gl.bindAttribLocation(this.ID, 1, "a_tex_coord");
        gl.bindAttribLocation(this.ID, 2, "a_normal");
        gl.bindAttribLocation(this.ID, 3, "a_vertex1");
        gl.bindAttribLocation(this.ID, 4, "a_normal1");

        this.setInt(this.uniforms.material_transparency_texture, 0);
        this.setInt(this.uniforms.material_emission_texture, 1);
        this.setInt(this.uniforms.material_ambient_texture, 2);
        this.setInt(this.uniforms.material_diffuse_texture, 3);
        this.setInt(this.uniforms.material_specular_texture, 4);
        this.setInt(this.uniforms.material_shininess_texture, 5);
        
        if(!global.EMPTY_TEXTURE){
            gl.bindVertexArray(null);
            global.EMPTY_TEXTURE = gl.createTexture();
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D,   gl.TEXTURE_WRAP_T, gl.REPEAT);
            const pixel = new Uint8Array([192, 192, 192, 255]);  // grey
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);

        }

    }
    
    prepare(gl:WebGL2RenderingContext):void{
        this.use();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE3);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE4);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE5);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);

        this.setBool(this.uniforms.tween_enabled, false);
    }

    activateMaterial(gl:WebGL2RenderingContext, material:Material):void{
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

        this.setFloat(this.uniforms.material_transparency, material.transparency);
        this.setVec3(this.uniforms.material_ambient_colour, material.ambient);
        this.setVec3(this.uniforms.material_diffuse_colour, material.diffuse);
        this.setVec3(this.uniforms.material_specular_colour, material.specular);
        this.setVec3(this.uniforms.material_emissive_colour, material.emissive);
        this.setInt(this.uniforms.material_transparency_channel, 0);
        this.setInt(this.uniforms.material_shininess_channel, 0);
        this.setFloat(this.uniforms.material_shininess, material.specularExponent);
        this.setIntV(this.uniforms.material_is_texture_active, material.isTextureActive);
    }
}
