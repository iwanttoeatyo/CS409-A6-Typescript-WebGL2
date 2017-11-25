"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gl_matrix_1 = require("gl-matrix");
var frag = require('basic.frag');
var vert = require('basic.vert');
var canvas;
var gl;
var shader_prog;
var triangleVertexPositionBuffer;
var mMatrix = gl_matrix_1.mat4.create();
var vMatrix = gl_matrix_1.mat4.create();
var pMatrix = gl_matrix_1.mat4.create();
var vao;
var pos;
var model;
var view;
var projection;
var cPos = gl_matrix_1.vec3.fromValues(0, 0, 3.0);
var cUp = gl_matrix_1.vec3.fromValues(0, 1, 0);
var cFront = gl_matrix_1.vec3.fromValues(0, 0, -1);
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
    var fragmentShader = getShader(gl, frag, gl.FRAGMENT_SHADER);
    var vertexShader = getShader(gl, vert, gl.VERTEX_SHADER);
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
    triangleVertexPositionBuffer = gl.createBuffer();
    vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
    var vertices = [
        -1.5, -0.5, 0.0,
        0.5, -0.5, 0.0,
        0.0, 0.5, 0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(pos);
}
function drawScene() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl_matrix_1.mat4.perspective(pMatrix, 70, canvas.width / canvas.height, 0.1, 100.0);
    var cForward = gl_matrix_1.vec3.create();
    cForward = gl_matrix_1.vec3.add(cForward, cPos, cFront);
    gl_matrix_1.mat4.lookAt(vMatrix, cPos, cForward, cUp);
    //move view and projection matrix to vertex shader
    gl.uniformMatrix4fv(view, false, vMatrix);
    gl.uniformMatrix4fv(projection, false, pMatrix);
    gl_matrix_1.mat4.identity(mMatrix);
    //Move our Triangle
    var translation = gl_matrix_1.vec3.create();
    gl_matrix_1.vec3.set(translation, 0, 0, -1.0);
    gl_matrix_1.mat4.translate(mMatrix, mMatrix, translation);
    //Pass triangle position to vertex shader
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
    //Draw triangle
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}
function getShader(gl, src, type) {
    var shader;
    shader = gl.createShader(type);
    gl.shaderSource(shader, src.default);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}
