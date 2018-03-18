import {mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {BasicModel} from "./entities/models/basicmodel";

class Uniforms {
    model_matrix: WebGLUniformLocation;
    view_matrix: WebGLUniformLocation;
    model_view_projection_matrix: WebGLUniformLocation;
    camera_pos: WebGLUniformLocation;
    tween_enabled: WebGLUniformLocation;
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

export class BasicModelShader extends  Shader{
    uniforms:Uniforms;
    
    constructor(gl: WebGL2RenderingContext, vertexSourceCode: string, fragmentSourceCode: string) {
        super(gl, vertexSourceCode,fragmentSourceCode);

        this.uniforms = new Uniforms();
        this.uniforms.model_matrix = this.getUniformLocation("model_matrix");
        this.uniforms.view_matrix = this.getUniformLocation("view_matrix");
        this.uniforms.model_view_projection_matrix = this.getUniformLocation("model_view_projection_matrix");
        this.uniforms.camera_pos = this.getUniformLocation("camera_pos");
        this.uniforms.tween_enabled = this.getUniformLocation("tween_enabled");
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
        this.uniforms.material_emissive_colour = this.getUniformLocation("material.emissive_colour");
        this.uniforms.material_shininess = this.getUniformLocation("material.shininess");
        this.uniforms.material_is_texture_active = this.getUniformLocation("material.is_texture_active");
    }

    use() {
        this.gl.useProgram(this.ID);
    }

    setBoolByName(name: string, value: boolean) {
        this.gl.uniform1i(this.getUniformLocation(name), value ? 1 : 0);
    }

    setBool(id: number | WebGLUniformLocation, value: boolean) {
        this.gl.uniform1i(id, value ? 1 : 0);
    }

    setInt(id: number | WebGLUniformLocation, value: number) {
        this.gl.uniform1i(id, value);
    }
    setIntByName(name: string, value: number) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }


    setIntV(id: number | WebGLUniformLocation, value: number[]) {
        this.gl.uniform1iv(id, value);
    }

    setIntVByName(name: string, value: number[]) {
        this.gl.uniform1iv(this.getUniformLocation(name), value);
    }
    
    setFloat(id: number | WebGLUniformLocation, value: number) {
        this.gl.uniform1f(id, value);
    }
    setFloatByName(name: string, value: number) {
        this.gl.uniform1f(this.getUniformLocation(name), value);
    }

    getUniformLocation(name: string) {
        var a = this.gl.getUniformLocation(this.ID, name);
        return a;
    }

    setMat4(id: number | WebGLUniformLocation, matrix: mat4 | number[]) {
        this.gl.uniformMatrix4fv(id, false, matrix);
    }

    setMat4ByName(name: string, matrix: mat4 | number[]) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
    }
    
    setVec3(id: number | WebGLUniformLocation, vec: vec3| number[]) {
        this.gl.uniform3fv(id, vec);
    }
    
    setVec3ByName (name: string, vec: vec3| number[]) {
        this.gl.uniform3fv(this.getUniformLocation(name), vec);
    }
    
    setVec4(id: number | WebGLUniformLocation, vec: vec4| number[]){
        this.gl.uniform4fv(id, vec);
    }

    setVec4ByName(name: string, vec: vec4| number[]){
        this.gl.uniform4fv(this.getUniformLocation(name), vec);
    }

}

function getShader(gl: WebGL2RenderingContext, sourceCode, type) {
    let shader: WebGLShader;
    shader = gl.createShader(type);


    gl.shaderSource(shader,sourceCode);

    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}