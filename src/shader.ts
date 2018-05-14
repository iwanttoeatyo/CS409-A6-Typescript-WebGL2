import {mat4, vec3, vec4} from "gl-matrix";


export class Shader {
    ID: WebGLProgram;
    gl: WebGL2RenderingContext;

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

    }

    public use(): void {
        this.gl.useProgram(this.ID);
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