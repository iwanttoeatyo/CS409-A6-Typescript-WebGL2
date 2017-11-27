import {glMatrix, mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {Camera, Camera_Movement} from "./camera";

let basicFrag = require("basic.frag");
let basicVert = require("basic.vert");
let imageSrc = require('../assets/container.jpg');
let imageSrc2 = require('../assets/awesomeface.png');
let MainLoop = require('./lib/mainloop.min.js');

let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;
let shader_prog: WebGLShader;
let shader: Shader;
let VBO: WebGLBuffer;
let mMatrix: mat4 = mat4.create();
let vMatrix: mat4 = mat4.create();
let pMatrix: mat4 = mat4.create();
let VAO: WebGLVertexArrayObject;
let EBO: WebGLBuffer;
let texture1: WebGLTexture;
let texture2: WebGLTexture;
let keys: boolean[] = [];
let cubePositions: vec3[];
let fpsCounter = document.getElementById('fpscounter')

let mixValue: number = 0.2;

let view: WebGLUniformLocation;
let projection: WebGLUniformLocation;

let camera: Camera = new Camera(vec3.fromValues(0, 0, 3));


(function loadWebGL() {

    canvas = <HTMLCanvasElement> document.getElementById("canvas");
    initGL();

    shader = new Shader(gl, basicVert, basicFrag);

    initBuffers();

    gl.clearColor(0.2, 0.3, 0.3, 1.0);
    gl.enable(gl.DEPTH_TEST);



    //Wait 200ms so images can load to prevent texture warnings
    setInterval(function () {


        MainLoop.setBegin(begin).setUpdate(update).setDraw(draw).setEnd(end).start();
    }, 200);

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


function initBuffers() {
    let vertices = [
        -0.5, -0.5, -0.5, 0.0, 0.0,
        0.5, -0.5, -0.5, 1.0, 0.0,
        0.5, 0.5, -0.5, 1.0, 1.0,
        0.5, 0.5, -0.5, 1.0, 1.0,
        -0.5, 0.5, -0.5, 0.0, 1.0,
        -0.5, -0.5, -0.5, 0.0, 0.0,

        -0.5, -0.5, 0.5, 0.0, 0.0,
        0.5, -0.5, 0.5, 1.0, 0.0,
        0.5, 0.5, 0.5, 1.0, 1.0,
        0.5, 0.5, 0.5, 1.0, 1.0,
        -0.5, 0.5, 0.5, 0.0, 1.0,
        -0.5, -0.5, 0.5, 0.0, 0.0,

        -0.5, 0.5, 0.5, 1.0, 0.0,
        -0.5, 0.5, -0.5, 1.0, 1.0,
        -0.5, -0.5, -0.5, 0.0, 1.0,
        -0.5, -0.5, -0.5, 0.0, 1.0,
        -0.5, -0.5, 0.5, 0.0, 0.0,
        -0.5, 0.5, 0.5, 1.0, 0.0,

        0.5, 0.5, 0.5, 1.0, 0.0,
        0.5, 0.5, -0.5, 1.0, 1.0,
        0.5, -0.5, -0.5, 0.0, 1.0,
        0.5, -0.5, -0.5, 0.0, 1.0,
        0.5, -0.5, 0.5, 0.0, 0.0,
        0.5, 0.5, 0.5, 1.0, 0.0,

        -0.5, -0.5, -0.5, 0.0, 1.0,
        0.5, -0.5, -0.5, 1.0, 1.0,
        0.5, -0.5, 0.5, 1.0, 0.0,
        0.5, -0.5, 0.5, 1.0, 0.0,
        -0.5, -0.5, 0.5, 0.0, 0.0,
        -0.5, -0.5, -0.5, 0.0, 1.0,

        -0.5, 0.5, -0.5, 0.0, 1.0,
        0.5, 0.5, -0.5, 1.0, 1.0,
        0.5, 0.5, 0.5, 1.0, 0.0,
        0.5, 0.5, 0.5, 1.0, 0.0,
        -0.5, 0.5, 0.5, 0.0, 0.0,
        -0.5, 0.5, -0.5, 0.0, 1.0
    ];

    let indices = [
        0, 1, 3, // first triangle
        1, 2, 3  // second triangle
    ];

    cubePositions = [
        vec3.fromValues(0.0, 0.0, 0.0),
        vec3.fromValues(2.0, 5.0, -15.0),
        vec3.fromValues(-1.5, -2.2, -2.5),
        vec3.fromValues(-3.8, -2.0, -12.3),
        vec3.fromValues(2.4, -0.4, -3.5),
        vec3.fromValues(-1.7, 3.0, -7.5),
        vec3.fromValues(1.3, -2.0, -2.5),
        vec3.fromValues(1.5, 2.0, -2.5),
        vec3.fromValues(1.5, 0.2, -1.5),
        vec3.fromValues(-1.3, 1.0, -1.5)
    ];

    VAO = gl.createVertexArray();
    VBO = gl.createBuffer();
    EBO = gl.createBuffer();

    gl.bindVertexArray(VAO);

    gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, EBO);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), gl.STATIC_DRAW);

    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);

    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 20, 12);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);

    texture1 = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    let image = new Image();
    image.src = imageSrc;
    image.addEventListener('load', function () {

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        gl.generateMipmap(gl.TEXTURE_2D);
    });

    texture2 = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    let image2 = new Image();
    image2.src = imageSrc2;
    image2.addEventListener('load', function () {

        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, texture2);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image2);
        gl.generateMipmap(gl.TEXTURE_2D);
    });


    shader.use();
    shader.setInt("texture1", 0);
    shader.setInt("texture2", 1);
}


/**
 * @param {Number} delta
 *   The amount of time since the last update, in seconds.
 */
function update(delta) {
}


/**
 * Called once per frame before update and draw
 * @param {Number} [timestamp]
 *   The current timestamp (when the frame started), in milliseconds. Thisw
 *   epoch (i.e. the "zero" time) depends on the engine running this code.
 *   In engines that support `DOMHighResTimeStamp` (all modern browsers
 *   except iOS Safari 8) the epoch is the time the page started loading,
 *   specifically `performance.timing.navigationStart`. Everywhere else,
 *   including node.js, the epoch is the Unix epoch (1970-01-01T00:00:00Z).
 * @param {Number} [delta]
 *   The total elapsed time that has not yet been simulated, in
 *   milliseconds.
 */
function begin(timestamp, delta) {
    delta /= 1000;

    if (keys[40] || keys[83]) {
        camera.processKeyboard(Camera_Movement.BACKWARD, delta);
    } else if (keys[38] || keys[87]) {
        camera.processKeyboard(Camera_Movement.FORWARD, delta);
    } else if (keys[37] || keys[65]) {
        camera.processKeyboard(Camera_Movement.LEFT, delta);
    } else if (keys[39] || keys[68]) {
        camera.processKeyboard(Camera_Movement.RIGHT, delta);
    }
}


/**
 *
 * @param {Number} interpolationPercentage
 *   How much to interpolate between frames.
 */
function draw(interpolationPercentage) {
    let min = Math.min(window.innerHeight, window.innerWidth);
    canvas.width =  window.innerWidth;
    canvas.height = window.innerHeight;

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


    let view = mat4.create();

    let projection = mat4.create();


    mat4.translate(view, view, vec3.fromValues(0, 0, -3));

    view = camera.getViewMatrix();

    mat4.perspective(projection, glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 100);
    //mat4.perspective(projection, glMatrix.toRadian(camera.zoom), canvas.width / canvas.height, 0.1, 100);
    shader.setMat4("view", view);
    shader.setMat4("projection", projection);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);


    shader.use();

    gl.bindVertexArray(VAO);

    cubePositions.forEach(function (cube, index) {
        let model = mat4.create();
        mat4.translate(model, model, cube);
        let angle = 20 * index;
        if (index % 3 == 0)
            angle = Date.now() / 1000 * 25.0;
        mat4.rotate(model, model, glMatrix.toRadian(angle), vec3.fromValues(1, 0.3, 0.5));
        shader.setMat4("model", model);
        gl.drawArrays(gl.TRIANGLES, 0, 36);
    });


}

function end(fps, panic) {
    fpsCounter.textContent = Math.round(fps) + ' FPS';
    if (panic) {
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
    }
}

window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};

window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};


