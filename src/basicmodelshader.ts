import {mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {BasicModel} from "./entities/models/basicmodel";

class Uniforms {
    model_matrix: WebGLUniformLocation;
    view_matrix: WebGLUniformLocation;
    model_view_projection_matrix: WebGLUniformLocation;
    camera_pos: WebGLUniformLocation;
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
    public uniforms: Uniforms;

    constructor(gl: WebGL2RenderingContext, vertexSourceCode: string, fragmentSourceCode: string) {
        super(gl, vertexSourceCode, fragmentSourceCode);

        this.uniforms = new Uniforms();
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
    }

    public setMVPMatrices(model: mat4, view: mat4, projection: mat4, camera_pos:vec3 = vec3.fromValues(0,0,0)): void {
        let mvp_matrix = mat4.create();
        mat4.mul(mvp_matrix, view, model);
        mat4.mul(mvp_matrix, projection, mvp_matrix);
        this.setMat4(this.uniforms.model_matrix, model);
        //  BasicModel.shader.setMat4(BasicModel.uniforms.view_matrix, view);
        this.setMat4(this.uniforms.model_view_projection_matrix, mvp_matrix);
        this.setVec3(this.uniforms.camera_pos, camera_pos);
    }
}
