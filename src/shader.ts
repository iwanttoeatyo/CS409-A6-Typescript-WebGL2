import {mat4, vec3, vec4} from "gl-matrix";



export class Shader {
    ID: WebGLProgram;
    gl: WebGL2RenderingContext;

    constructor(gl: WebGL2RenderingContext, vertexPath: string, fragmentPath: string) {
        this.gl = gl;

        let fragmentShader: WebGLShader = getShader(gl, fragmentPath, gl.FRAGMENT_SHADER);
        let vertexShader: WebGLShader = getShader(gl, vertexPath, gl.VERTEX_SHADER);

        this.ID = gl.createProgram();
        gl.attachShader(this.ID, vertexShader);
        gl.attachShader(this.ID, fragmentShader);
        gl.linkProgram(this.ID);

        if (!gl.getProgramParameter(this.ID, gl.LINK_STATUS)) {
            alert("Could not initialize shaders");
        }

        
    }

    use() {
        this.gl.useProgram(this.ID);
    }

    setBool(name: string, value: number) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }

    setInt(name: string, value: number) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }

    setFloat(name: string, value: number) {
        this.gl.uniform1f(this.getUniformLocation(name), value);
    }

    getUniformLocation(name: string) {
        return this.gl.getUniformLocation(this.ID, name);
    }

    setMat4(name: string, matrix: mat4) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
    }

    setVec3(name: string, vec: vec3) {
        this.gl.uniform3fv(this.getUniformLocation(name), vec);
    }
    
    setVec4(name: string, vec: vec4){
        this.gl.uniform4fv(this.getUniformLocation(name), vec);
    }


}

function getShader(gl: WebGL2RenderingContext, path, type) {
    let shader: WebGLShader;
    shader = gl.createShader(type);


    gl.shaderSource(shader, path.default);

    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}