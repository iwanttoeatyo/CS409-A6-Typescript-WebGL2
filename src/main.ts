import {glMatrix, mat2d, mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {Camera, Camera_Movement} from "./camera";

let OBJ = require('./lib/OBJ/index');
import {Mesh} from './lib/OBJ/mesh';
import {Layout} from './lib/OBJ/layout';

let MainLoop = require('./lib/MainLoop/mainloop.js');

let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;
let shader: Shader;


let VAO: WebGLVertexArrayObject;
let VBO: WebGLBuffer;
let EBO: any;
let texture1: WebGLTexture;
let texture2: WebGLTexture;

let keys: boolean[] = [];

let models: Object;
let cbabe:Mesh;
let fpsCounter = document.getElementById('fpscounter');

let camera: Camera = new Camera(vec3.fromValues(0, 0, 3));

class Main {

    constructor(models) {
        this.loadWebGL(models);
    }

    
    loadWebGL(_models) {

        models = _models;
        cbabe = models["cbabe_stand"];
        
        canvas = <HTMLCanvasElement> document.getElementById("canvas");
     
        this.initGL();

        shader = new Shader(gl, require("../src/shaders/basic.vert"), require("../src/shaders/basic.frag"));

        this.initBuffers();

        gl.clearColor(0.2, 0.3, 0.3, 1.0);
        gl.enable(gl.DEPTH_TEST);

 
        //Wait ms so images can load to prevent texture warnings
        setInterval(h => {
            MainLoop.setBegin(this.begin).setUpdate(this.update).setDraw(this.draw).setEnd(this.end).start();
        },1);

    }


    initGL() {
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


    initBuffers() {

        VAO = gl.createVertexArray();

        OBJ.initMeshBuffers(gl, cbabe);

        //EBO = mesh.makeIndexBufferData();

        gl.bindVertexArray(VAO);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, cbabe.vertexBuffer);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(1);
        gl.bindBuffer(gl.ARRAY_BUFFER, cbabe.textureBuffer);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);

        texture1 = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture1);

        cbabe.materialsByIndex[0].mapDiffuse.texture.addEventListener('load', function () {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture1);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, cbabe.materialsByIndex[0].mapDiffuse.texture);
            gl.generateMipmap(gl.TEXTURE_2D);

        });

        shader.use();
        shader.setInt("texture1", 0);
    }


    /**
     * @param {Number} delta
     *   The amount of time since the last update, in seconds.
     */


    update(delta) {
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


    begin(timestamp, delta) {
        delta /= 1000;

        if (keys[40] || keys[83]) {
            camera.processKeyboard(Camera_Movement.BACKWARD, delta);
        } else if (keys[38] || keys[87]) {
            camera.processKeyboard(Camera_Movement.FORWARD, delta);
        } else if (keys[65]) {
            camera.processKeyboard(Camera_Movement.LEFT, delta);
        } else if (keys[68]) {
            camera.processKeyboard(Camera_Movement.RIGHT, delta);
        }

        if (keys[37]) camera.processMouseMovement(-50, 0, true);
        if (keys[39]) camera.processMouseMovement(50, 0, true);
    }


    /**
     *
     * @param {Number} interpolationPercentage
     *   How much to interpolate between frames.
     */


    draw(interpolationPercentage) {
        let min = Math.min(window.innerHeight, window.innerWidth);
        canvas.width = window.innerWidth;
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
        let model = mat4.create();
        mat4.translate(model, model, vec3.fromValues(0, 0, 0));
        shader.setMat4("model", model);


        shader.use();

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture1);

        gl.bindVertexArray(VAO);


        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cbabe.indexBuffer);
        gl.drawElements(gl.TRIANGLES, cbabe.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    }

    end(fps, panic) {
        fpsCounter.textContent = Math.round(fps) + ' FPS';
        if (panic) {
            var discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
    }


}

window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};

window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};


let p = OBJ.downloadModels([
    {
        name: 'cbabe_stand',
        obj: "../assets/models/actors/cbabe/cbabe_stand.obj",
        mtl: "../assets/models/actors/cbabe/cbabe.mtl",
    }
]);

p.then((models) => {
    Object.keys(models).forEach((name) => {
        console.log('Name:', name);
        console.log('Mesh:', models[name]);
    });
    new Main(models);
});
