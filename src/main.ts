import {mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";

let basicFrag = require("basic.frag");
let basicVert = require("basic.vert");


let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;
let shader_prog: WebGLShader;
let shader: Shader;
let VBO: WebGLBuffer;
let mMatrix: mat4 = mat4.create();
let vMatrix: mat4 = mat4.create();
let pMatrix: mat4 = mat4.create();
let VAO: WebGLVertexArrayObject;


let view: WebGLUniformLocation;
let projection: WebGLUniformLocation;


let cPos: vec3 = vec3.fromValues(0, 0, 3.0);
let cUp: vec3 = vec3.fromValues(0, 1, 0);
let cFront: vec3 = vec3.fromValues(0, 0, -1);


(function loadWebGL() {

    canvas = <HTMLCanvasElement> document.getElementById("canvas");
    initGL();
    initShaders();
    initBuffers();

    gl.clearColor(0.2, 0.3, 0.3, 1.0);

    gl.enable(gl.DEPTH_TEST);

    requestAnimationFrame(drawScene);
    
})();


function initGL() {
    try {
        gl = <WebGL2RenderingContext> canvas.getContext("webgl2");
    } catch (e) {
        throw "GL init error:\n" + e;
    }
    if (!gl) {
        alert("WebGL is not available on your browser.")
    }

    gl.enable(gl.SAMPLE_COVERAGE);
    gl.sampleCoverage(1, false);
}


function initShaders() {

    shader = new Shader(gl,basicVert, basicFrag);
    shader.use();

}


function initBuffers() {
    let vertices = [
        // positions         // colors
        0.5, -0.5, 0.0,  1.0, 0.0, 0.0,  // bottom right
        -0.5, -0.5, 0.0,  0.0, 1.0, 0.0,  // bottom left
        0.0,  0.5, 0.0,  0.0, 0.0, 1.0   // top 
];

    VAO = gl.createVertexArray();
    VBO = gl.createBuffer();

    
    gl.bindVertexArray(VAO);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
    
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);
        
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
    gl.bindVertexArray(null);



}

function drawScene(time) {
    canvas.width = window.innerHeight * (15/16);
    canvas.height = window.innerHeight * (15/16);
    
    time /= 1000;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    // mat4.perspective(pMatrix, 70, canvas.width / canvas.height, 0.1, 100.0);
    // let cForward: vec3 = vec3.create();
    // cForward = vec3.add(cForward, cPos, cFront);
    // mat4.lookAt(vMatrix, cPos, cForward, cUp);
    // //move view and projection matrix to vertex shader
    // gl.uniformMatrix4fv(view, false, vMatrix);
    // gl.uniformMatrix4fv(projection, false, pMatrix);


    //mat4.identity(mMatrix);
    //Move our Triangle
    //let translation = vec3.create();
    //vec3.set(translation, 0, 0, -1.0);
    //mat4.translate(mMatrix, mMatrix, translation);

    //Pass triangle position to vertex shader

   // gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
    //gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 3, 0);

    shader.use();
    gl.bindVertexArray(VAO);


    //Draw triangle
  //  gl.drawElements(gl.TRIANGLE_STRIP,6, gl.UNSIGNED_INT, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(drawScene);
}
