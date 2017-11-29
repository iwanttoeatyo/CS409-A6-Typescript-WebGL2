import {glMatrix, mat2d, mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {Camera, Camera_Movement} from "./camera";

let OBJ = require('./lib/OBJ/index');
import {Mesh} from './lib/OBJ/mesh';
import {Layout} from './lib/OBJ/layout';
import {Disk} from "./entities/disk";
import {DiskModel} from "./entities/diskmodel";

let MainLoop = require('./lib/MainLoop/mainloop.js');

let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;
let shader: Shader;
let instancedShader: Shader;


let document = window.document;

let VBO: WebGLBuffer;
let EBO: any;
let texture1: WebGLTexture;
let texture2: WebGLTexture;

let keys: boolean[] = [];

let models: Object;

interface Model {
    mesh: Mesh;
    texture: WebGLTexture;
    textureNum;
    VAO: WebGLVertexArrayObject;
    position: vec3,
    forward: vec3
}

let player: Model = {
    mesh: null,
    texture: null,
    textureNum: 0,
    VAO: null,
    position: vec3.fromValues(0, 0.8, 0),
    forward: vec3.fromValues(0, -1, 0)
};

let disks: Disk[] = [];
let disk: Disk;
let diskModel: DiskModel;

let fpsCounter = document.getElementById('fpscounter');

let camera: Camera = new Camera(vec3.fromValues(0, 0, 0));

class Main {

    constructor(_models) {
        models = _models;
        player.mesh = models["cbabe_stand"];


        canvas = <HTMLCanvasElement> document.getElementById("canvas");

        this.initGL();

        shader = new Shader(gl, require("../src/shaders/basic.vert"), require("../src/shaders/basic.frag"));
        instancedShader = new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));

        this.initBuffers();

        gl.clearColor(0.2, 0.3, 0.3, 1.0);
        gl.enable(gl.DEPTH_TEST);
        //  gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);

        this.initPointerLock();
        //Wait ms so images can load to prevent texture warnings
        setInterval(h => {
            MainLoop.setBegin(this.begin).setUpdate(this.update).setDraw(this.draw).setEnd(this.end).start();

        }, 1);

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

    initModel(model, texture_num) {
        model.VAO = gl.createVertexArray();
        OBJ.initMeshBuffers(gl, model.mesh);
        gl.bindVertexArray(model.VAO);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, model.mesh.vertexBuffer);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(1);
        gl.bindBuffer(gl.ARRAY_BUFFER, model.mesh.textureBuffer);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);

        model.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, model.texture);

        let i = new Image();
        i.src = model.mesh.materialsByIndex[texture_num].mapDiffuse.texture;
        i.addEventListener('load', function () {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, model.texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, i);
            gl.generateMipmap(gl.TEXTURE_2D);
        });


        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, model.texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, model.mesh.materialsByIndex[texture_num].mapDiffuse.texture);
        gl.generateMipmap(gl.TEXTURE_2D);
    }

    initBuffers() {
        this.initModel(player, player.textureNum);

        diskModel = new DiskModel(models["DiskA"]);
        diskModel.init(gl);
        diskModel.generateInstancingBuffers(gl, 500,0.5);
        disk = new Disk(diskModel, 1, 0, 0, 0);

        // for (let i = 0; i < 1000; i++) {
        //     let v = i;
        //     if (v % 2) v = -v;
        //     disks.push(new Disk(diskModel, 10 * Math.random() + 2, 500 * Math.random() - 200, 25 * Math.random() - 25, 500 * Math.random() - 200));
        // }


        shader.use();
        shader.setInt("texture1", 0);
        instancedShader.use();
        instancedShader.setInt("texture1", 0);


        fetch('../assets/worlds/maps/Basic.txt').then((response) => response.text())
            .then((data) => {

            });

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
        }
        if (keys[65]) {
            camera.processKeyboard(Camera_Movement.LEFT, delta);
        } else if (keys[68]) {
            camera.processKeyboard(Camera_Movement.RIGHT, delta);
        }

        if (keys[37]) camera.processMouseMovement(-delta, 0, true);
        if (keys[39]) camera.processMouseMovement(delta, 0, true);
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


        //Setup view and projection
        let projection = mat4.create();
        let view = camera.getViewMatrix();

        mat4.perspective(projection, glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 100000);

        let viewProjection = mat4.multiply(projection, projection, view);

        let model = mat4.create();

        //Draw Disk
        instancedShader.use();
        instancedShader.setMat4("viewProjection", viewProjection);
        gl.bindVertexArray(disk.model.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, disk.model.texture_side);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, disk.model.mesh.indexBuffer);

        model = mat4.create();
       // mat4.translate(model, model, disk.position);
       // mat4.scale(model, model, vec3.fromValues(disk.radius, 1, disk.radius));
        instancedShader.setMat4("model", model);

        gl.drawElementsInstanced(gl.TRIANGLES, disk.model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT,0,disk.model.instanceCount);
      //  gl.drawElements(gl.TRIANGLES, disk.model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        
         gl.bindVertexArray(null);
        //
        // //Draws Player in front of camera, always facing away from camera
        // shader.use();
        // shader.setMat4("viewProjection", viewProjection);
        // model = mat4.create();
        // gl.bindVertexArray(player.VAO);
        // vec3.copy(player.position, camera.position);
        // player.position[0] = camera.front[0] * 0.8 + camera.position[0];
        // player.position[1] = camera.position[1];
        // player.position[2] = camera.front[2] * 0.8 + camera.position[2];
        //
        // player.position[1] = player.position[1] - 1;
        //
        // mat4.translate(model, model, player.position);
        // mat4.rotateY(model, model, Math.atan2(camera.front[0], camera.front[2]) - Math.PI / 2);
        //
        // shader.setMat4("model", model);
        //
        // gl.activeTexture(gl.TEXTURE0);
        // gl.bindTexture(gl.TEXTURE_2D, player.texture);
        //
        // gl.bindVertexArray(player.VAO);
        // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, player.mesh.indexBuffer);
        // gl.drawElements(gl.TRIANGLES, player.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        // gl.bindVertexArray(null);


    }

    end(fps, panic) {
        fpsCounter.textContent = Math.round(fps) + ' FPS';
        if (panic) {
            var discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
    }

    initPointerLock() {
        let _canvas: any = canvas;
        // Start by going fullscreen with the element.  Current implementations
        // require the element to be in fullscreen before requesting pointer
        // lock--something that will likely change in the future.
        canvas.requestFullscreen = canvas.requestFullscreen ||
            _canvas.mozRequestFullscreen ||
            _canvas.mozRequestFullScreen || // Older API upper case 'S'.
            canvas.webkitRequestFullscreen;
        canvas.addEventListener('click', canvas.requestFullscreen, false);

        document.addEventListener('fullscreenchange', this.fullscreenChange, false);
        document.addEventListener('mozfullscreenchange', this.fullscreenChange, false);
        document.addEventListener('webkitfullscreenchange', this.fullscreenChange, false);

        document.addEventListener('pointerlockchange', this.pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', this.pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', this.pointerLockChange, false);
    }

    fullscreenChange() {
        let document: any = window.document;
        let _canvas: any = canvas;
        if (document.webkitFullscreenElement === canvas ||
            document.mozFullscreenElement === canvas ||
            document.mozFullScreenElement === canvas ||
            document.fullscreenElement === canvas) { // Older API upper case 'S'.
            // Element is fullscreen, now we can request pointer lock
            canvas.requestPointerLock = canvas.requestPointerLock ||
                _canvas.mozRequestPointerLock ||
                _canvas.webkitRequestPointerLock;
            canvas.requestPointerLock();
        }
    }

    pointerLockChange(e) {

        let document: any = window.document;
        if (document.pointerLockElement === canvas ||
            document.mozPointerLockElement === canvas ||
            document.webkitPointerLockElement === canvas) {

            document.addEventListener("mousemove", moveCallback, false);

        }
        else {
            document.removeEventListener("mousemove", moveCallback, false);
        }
    }


}

window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};

window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};

function moveCallback(e) {
    let movementX = e.movementX ||
        e.mozMovementX ||
        e.webkitMovementX ||
        0;
    let movementY = e.movementY ||
        e.mozMovementY ||
        e.webkitMovementY ||
        0;
    camera.processMouseMovement(movementX, -movementY, true);
}


let p = OBJ.downloadModels([
    {
        name: 'cbabe_stand',
        obj: "/assets/models/actors/cbabe/cbabe_stand.obj",
        mtl: "/assets/models/actors/cbabe/cbabe.mtl",
    },
    {
        name: 'DiskA',
        obj: "/assets/models/environment/disks/DiskBSolid.obj",
        mtl: "/assets/models/environment/disks/Disks.mtl"
    }
], window.location.href.substr(0, window.location.href.lastIndexOf("/")));

p.then((models) => {
    Object.keys(models).forEach((name) => {
        console.log('Name:', name);
        console.log('Mesh:', models[name]);
    });
    new Main(models);
});

