import {mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";

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
let keys:boolean[] = [];

let mixValue:number = 0.2; 

let view: WebGLUniformLocation;
let projection: WebGLUniformLocation;


let cPos: vec3 = vec3.fromValues(0, 0, 3.0);
let cUp: vec3 = vec3.fromValues(0, 1, 0);
let cFront: vec3 = vec3.fromValues(0, 0, -1);


(function loadWebGL() {

    canvas = <HTMLCanvasElement> document.getElementById("canvas");
    initGL();

    shader = new Shader(gl, basicVert, basicFrag);

    initBuffers();

    gl.clearColor(0.2, 0.3, 0.3, 1.0);
    gl.enable(gl.DEPTH_TEST);

    //Wait 50ms so images can load to prevent texture warnings
    setInterval(function(){
        MainLoop.setMaxAllowedFPS(60);
        MainLoop.setBegin(begin).setUpdate(update).setDraw(draw).setEnd(end).start(); 
    },50);

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
            // positions        // colors         // texture coords
            0.5, 0.5, 0.0,      1.0, 0.0, 0.0,  1.0, 1.0,   // top right
            0.5, -0.5, 0.0,     0.0, 1.0, 0.0,  1.0, 0.0,   // bottom right
            -0.5, -0.5, 0.0,    0.0, 0.0, 1.0,  0.0, 0.0,   // bottom left
            -0.5, 0.5, 0.0,     1.0, 1.0, 0.0,  0.0, 1.0    // top left 
    ];

    let indices = [
        0, 1, 3, // first triangle
        1, 2, 3  // second triangle
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
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 0);

    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 12);

    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 24);

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
function update(delta){
}


/** 
 * Called once per frame before update and draw
 * @param {Number} [timestamp]
 *   The current timestamp (when the frame started), in milliseconds. This
 *   should only be used for comparison to other timestamps because the
 *   epoch (i.e. the "zero" time) depends on the engine running this code.
 *   In engines that support `DOMHighResTimeStamp` (all modern browsers
 *   except iOS Safari 8) the epoch is the time the page started loading,
 *   specifically `performance.timing.navigationStart`. Everywhere else,
 *   including node.js, the epoch is the Unix epoch (1970-01-01T00:00:00Z).
 * @param {Number} [delta]
 *   The total elapsed time that has not yet been simulated, in
 *   milliseconds.
 */
function begin(timestamp, delta){
    if(keys['40']){
        mixValue += 0.05;
        if(mixValue > 1) mixValue = 1;
    }else if (keys[38]){
        mixValue -= 0.05;
        if(mixValue < 0) mixValue = 0;
    }
}


/**
 *
 * @param {Number} interpolationPercentage
 *   How much to interpolate between frames.
 */
function draw(interpolationPercentage) {
    canvas.width = window.innerHeight * (15 / 16);
    canvas.height = window.innerHeight * (15 / 16);

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
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);

    // set the texture mix value in the shader
    shader.setFloat("mixValue", mixValue);
    
    shader.use();
   
    gl.bindVertexArray(VAO);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0);


}

function end(fps, panic){
    if(panic){
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
    }
}

window.onkeydown = function( e){
  keys[e.keyCode] = true;
};

window.onkeyup = function(e){
    keys[e.keyCode] = false;
}


