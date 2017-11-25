"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
let frag = require('basic.frag');
let vert = require('basic.vert');
let canvas;
let gl;
let shader_prog;
let VBO;
let mMatrix = gl_matrix_1.mat4.create();
let vMatrix = gl_matrix_1.mat4.create();
let pMatrix = gl_matrix_1.mat4.create();
let VAO;
let EBO;
let pos;
let model;
let view;
let projection;
let cPos = gl_matrix_1.vec3.fromValues(0, 0, 3.0);
let cUp = gl_matrix_1.vec3.fromValues(0, 1, 0);
let cFront = gl_matrix_1.vec3.fromValues(0, 0, -1);
(function loadWebGL() {
    canvas = document.getElementById("canvas");
    initGL();
    initShaders();
    initBuffers();
    gl.clearColor(0.2, 0.3, 0.3, 1.0);
    gl.enable(gl.DEPTH_TEST);
    drawScene();
})();
function initGL() {
    try {
        gl = canvas.getContext("webgl2");
    }
    catch (e) {
        throw "GL init error:\n" + e;
    }
    if (!gl) {
        alert("WebGL is not available on your browser.");
    }
}
function initShaders() {
    let fragmentShader = getShader(gl, frag, gl.FRAGMENT_SHADER);
    let vertexShader = getShader(gl, vert, gl.VERTEX_SHADER);
    shader_prog = gl.createProgram();
    gl.attachShader(shader_prog, vertexShader);
    gl.attachShader(shader_prog, fragmentShader);
    gl.linkProgram(shader_prog);
    if (!gl.getProgramParameter(shader_prog, gl.LINK_STATUS)) {
        alert("Could not initialize shaders");
    }
    gl.useProgram(shader_prog);
    pos = gl.getAttribLocation(shader_prog, "Position");
    model = gl.getUniformLocation(shader_prog, "model");
    view = gl.getUniformLocation(shader_prog, "view");
    projection = gl.getUniformLocation(shader_prog, "projection");
}
function initBuffers() {
    let vertices = [
        0.5, 0.5, 0.0,
        0.5, -0.5, 0.0,
        -0.5, -0.5, 0.0,
        -0.5, 0.5, 0.0 // top left 
    ];
    let indices = [
        0, 1, 3,
        1, 2, 3 // second triangle
    ];
    VAO = gl.createVertexArray();
    VBO = gl.createBuffer();
    EBO = gl.createBuffer();
    gl.bindVertexArray(VAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, EBO);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
}
function drawScene() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl_matrix_1.mat4.perspective(pMatrix, 70, canvas.width / canvas.height, 0.1, 100.0);
    let cForward = gl_matrix_1.vec3.create();
    cForward = gl_matrix_1.vec3.add(cForward, cPos, cFront);
    gl_matrix_1.mat4.lookAt(vMatrix, cPos, cForward, cUp);
    //move view and projection matrix to vertex shader
    gl.uniformMatrix4fv(view, false, vMatrix);
    gl.uniformMatrix4fv(projection, false, pMatrix);
    gl_matrix_1.mat4.identity(mMatrix);
    //Move our Triangle
    let translation = gl_matrix_1.vec3.create();
    gl_matrix_1.vec3.set(translation, 0, 0, -1.0);
    gl_matrix_1.mat4.translate(mMatrix, mMatrix, translation);
    //Pass triangle position to vertex shader
    // gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
    //gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 3, 0);
    gl.useProgram(shader_prog);
    gl.bindVertexArray(VAO);
    //Draw triangle
    gl.drawElements(gl.LINE_LOOP, 6, gl.UNSIGNED_INT, 0);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
}
function getShader(gl, src, type) {
    let shader;
    shader = gl.createShader(type);
    gl.shaderSource(shader, src.default);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}
//# sourceMappingURL=main.js.map