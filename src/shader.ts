import {mat4, vec3, vec4} from "gl-matrix";
import {Material} from "./lib/OBJ/";

export class Uniforms{
    model_matrix: WebGLUniformLocation;
    view_matrix: WebGLUniformLocation;
    model_view_projection_matrix: WebGLUniformLocation;
    camera_pos: WebGLUniformLocation;
}


export class Shader {
    ID: WebGLProgram;
    gl: WebGL2RenderingContext;
    uniforms:Uniforms;
    
    constructor(gl: WebGL2RenderingContext, vertexSourceCode: string, fragmentSourceCode: string) {
        this.gl = gl;

        let vertexShader: WebGLShader = getShader(gl, vertexSourceCode, gl.VERTEX_SHADER);
        let fragmentShader: WebGLShader = getShader(gl, fragmentSourceCode, gl.FRAGMENT_SHADER);

        this.ID = gl.createProgram();
        gl.attachShader(this.ID, vertexShader);
        gl.attachShader(this.ID, fragmentShader);
        gl.linkProgram(this.ID);

        if (!gl.getProgramParameter(this.ID, gl.LINK_STATUS)) {
            alert("Could not initialize shaders");
        }
        
        this.uniforms = new Uniforms();
        this.uniforms.model_matrix = this.getUniformLocation("model_matrix");
        this.uniforms.view_matrix = this.getUniformLocation("view_matrix");
        this.uniforms.model_view_projection_matrix = this.getUniformLocation("model_view_projection_matrix");
        this.uniforms.camera_pos = this.getUniformLocation("camera_pos");

    }

    public use(): void {
        this.gl.useProgram(this.ID);
    }
    
    public prepare(gl:WebGL2RenderingContext): void{
        this.use();
    }

    public activateMaterial(gl:WebGL2RenderingContext, material:Material):void{
        
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
    
    public setBoolByName(name: string, value: boolean): void {
        this.gl.uniform1i(this.getUniformLocation(name), value ? 1 : 0);
    }

    public setBool(id: number | WebGLUniformLocation, value: boolean): void {
        this.gl.uniform1i(id, value ? 1 : 0);
    }

    public setInt(id: number | WebGLUniformLocation, value: number): void {
        this.gl.uniform1i(id, value);
    }

    public setIntByName(name: string, value: number): void {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }


    public setIntV(id: number | WebGLUniformLocation, value: number[]): void {
        this.gl.uniform1iv(id, value);
    }

    public setIntVByName(name: string, value: number[]) {
        this.gl.uniform1iv(this.getUniformLocation(name), value);
    }

    public setFloat(id: number | WebGLUniformLocation, value: number) {
        this.gl.uniform1f(id, value);
    }

    public setFloatByName(name: string, value: number) {
        this.gl.uniform1f(this.getUniformLocation(name), value);
    }

    public getUniformLocation(name: string) {
        let a = this.gl.getUniformLocation(this.ID, name);
        return a;
    }

    public setMat4(id: number | WebGLUniformLocation, matrix: mat4 | number[]) {
        this.gl.uniformMatrix4fv(id, false, matrix);
    }

    public setMat4ByName(name: string, matrix: mat4 | number[]) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
    }

    public setVec3(id: number | WebGLUniformLocation, vec: vec3 | number[]) {
        this.gl.uniform3fv(id, vec);
    }

    public setVec3ByName(name: string, vec: vec3 | number[]) {
        this.gl.uniform3fv(this.getUniformLocation(name), vec);
    }

    public setVec4(id: number | WebGLUniformLocation, vec: vec4 | number[]) {
        this.gl.uniform4fv(id, vec);
    }

    public setVec4ByName(name: string, vec: vec4 | number[]) {
        this.gl.uniform4fv(this.getUniformLocation(name), vec);
    }

}

function getShader(gl: WebGL2RenderingContext, sourceCode, type) {
    let shader: WebGLShader;
    shader = gl.createShader(type);

    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}