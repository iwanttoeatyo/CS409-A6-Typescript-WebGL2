import {glMatrix, mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {Camera, Camera_Movement} from "./camera";

import {Mesh} from './lib/OBJ/mesh';
import {MaterialLibrary} from './lib/OBJ/index.js';
import {Layout} from './lib/OBJ/layout';
import {Player, Player_Movement} from "./entities/player";
import {World, WorldMeshes} from "./entities/world";
import {Skybox} from "./entities/skybox";
import {BasicModel} from "./entities/models/basicmodel";
import {Renderer} from "./Renderer";
import {BasicModelShader} from "./basicmodelshader";
import * as assert from "assert";

let MainLoop = require('./lib/MainLoop/mainloop.js');

let is_mobile;
let demo_ticker = 0;
let document = window.document;
let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;

let shader: Shader;
let instancedShader: Shader;
let basicModelShader: BasicModelShader;
let basicModelRenderer: Renderer;

const playerOrigin = vec3.fromValues(0, 0.8, 0);
const playerOriginRotation = vec3.fromValues(1, 0, 0);

let keys: boolean[] = [];
let mouseKeys: boolean[] = [];

let fpsCounter = document.getElementById('fpscounter');

let playerCamera: Camera = new Camera(vec3.fromValues(0, 1.6, 0), vec3.fromValues(0, 1, 0), 0);
let worldCamera: Camera = new Camera(vec3.fromValues(100, 200, 10), vec3.fromValues(0, 1, 0), 0, 0);
//Set overview camera to look at origin.
worldCamera.lookAt(vec3.fromValues(0, 0, 0));

let activeCamera: Camera = playerCamera;

class Main {
    world: World;
    skybox: Skybox;
    player: Player;

    constructor() {

        canvas = <HTMLCanvasElement> document.getElementById("canvas");
        this.initGL();

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            is_mobile = true;
        }

        //Set the background color before we load any assets
        gl.clearColor(0.2, 0.3, 0.3, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);

        this.resize();
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        //Display that we are loading

        this.loadAssets().then(() => {

            //Done loading

            this.initBuffers();
            this.initPointerLock();
            //Wait ms so images can load to prevent texture warnings
            setTimeout(h => {
                MainLoop.setBegin(this.begin.bind(this))
                    .setUpdate(this.update.bind(this))
                    .setDraw(this.draw.bind(this))
                    .setEnd(this.end.bind(this))
                    .start();

            }, 100);
        });
    }

    async loadAssets(): Promise<void> {
        let start = Date.now();

        let loading = document.getElementById("loading");
        loading.innerText = "Loading Models and World. Please Wait.";

        let _worldMeshes = await World.loadWorldMeshes();
        let _worldMat = await World.loadWorldMat();
        let _worldData = await World.loadWorldData();

        let skybox_model = await Skybox.load();
        let _playerData = await Player.loadMesh();

        this.player = new Player(gl, _playerData["cbabe"], playerOrigin);
        this.skybox = new Skybox(gl, skybox_model["Skybox"]);
        let w = Date.now();
        this.world = new World(gl, _worldData, _worldMeshes, _worldMat);
        console.log("world gen time: " + (Date.now() - w) / 1000 + "s");
        shader = await new Shader(gl, require("../src/shaders/basic.vert"), require("../src/shaders/basic.frag"));
        // instancedShader = await new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));
        basicModelShader = await new BasicModelShader(gl, require('../src/shaders/basicmodel.vert'), require("../src/shaders/basicmodelmanylights.frag"));
        basicModelRenderer = new Renderer();
        basicModelRenderer.init(basicModelShader);
        basicModelRenderer.addBasicModel(this.player.model);
        basicModelRenderer.addEntityToRenderList(this.player);
        basicModelRenderer.addBasicModel(this.world.diskAModel);
        basicModelRenderer.addBasicModel(this.world.diskBModel);
        basicModelRenderer.addBasicModel(this.world.diskCModel);
        basicModelRenderer.addBasicModel(this.world.diskDModel);
        basicModelRenderer.addBasicModel(this.world.diskEModel);

        this.world.disks.forEach(disk => {
            assert(disk.initialized);
            basicModelRenderer.addEntityToRenderList(disk);
            basicModelRenderer.addMeshlessModel(disk.heightMapModel);
            basicModelRenderer.addEntityToRenderList(disk.heightMapEntity);
        });

        loading.remove();
        let end = Date.now();
        console.log("total time: " + (end - start) / 1000 + "s");
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

        playerCamera.front = this.player.forward;

        shader.use();
        shader.setIntByName("texture1", 0);
        basicModelShader.use();
        // instancedShader.setInt("material.diffuse", 0);
        // instancedShader.setInt("material.specular", 1);
        // instancedShader.setInt("material.emission", 2);
        BasicModel.initWithShader(gl, basicModelShader);

    }


    /**
     * @param {Number} delta
     *   The amount of time since the last update, in seconds.
     */
    update(delta) {
    }

    /**
     * Called once per frame before update and draw
     */
    begin(timestamp, delta) {
        delta /= 1000;

        if (is_mobile) {
            this.doDemo(delta);
        } else {
            if (keys[40] || keys[83]) {
                //     camera.processKeyboard(Camera_Movement.BACKWARD, delta);
                this.player.move(Player_Movement.BACKWARD, delta);
            } else if ((keys[38] || keys[87]) || (mouseKeys[1] && mouseKeys[3])) {
                //     camera.processKeyboard(Camera_Movement.FORWARD, delta);
                this.player.move(Player_Movement.FORWARD, delta);
            }
            if (keys[65]) {
                //   camera.processKeyboard(Camera_Movement.LEFT, delta);
                this.player.move(Player_Movement.LEFT, delta);
            } else if (keys[68]) {
                //   camera.processKeyboard(Camera_Movement.RIGHT, delta);
                this.player.move(Player_Movement.RIGHT, delta);
            }

            if (keys[37]) {
                this.player.rotate(delta);
                playerCamera.front[0] = this.player.forward[0];
                playerCamera.front[2] = this.player.forward[2];
                playerCamera.up = this.player.up;
            }
            if (keys[39]) {
                this.player.rotate(-delta);
                playerCamera.front[0] = this.player.forward[0];
                playerCamera.front[2] = this.player.forward[2];
                playerCamera.up = this.player.up;
            }

            if (keys[82]) {
                vec3.copy(this.player.position, playerOrigin);
                vec3.copy(this.player.forward, playerOriginRotation);
            }

            if (keys[79]) {
                activeCamera = worldCamera;
            } else {
                activeCamera = playerCamera;
            }
        }


    }


    /**
     * @param {Number} interpolationPercentage
     *   How much to interpolate between frames.
     */
    draw(interpolationPercentage) {

        this.resize();
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


        //Move camera behind player
        playerCamera.position[0] = this.player.position [0];
        playerCamera.position[2] = this.player.position[2];
        playerCamera.position[0] -= 2 * this.player.forward[0];
        playerCamera.position[2] -= 2 * this.player.forward[2];


        //Setup view and projection
        let projection_matrix = mat4.create();
        mat4.identity(projection_matrix);
        let view_matrix = activeCamera.getViewMatrix();
        mat4.perspective(projection_matrix, glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 10000);

        let model = mat4.create();

        //Draw Skybox
        gl.disable(gl.DEPTH_TEST);
        shader.use();
        mat4.translate(model, model, activeCamera.position);
        shader.setFloatByName("ambient", 1.0);

        shader.setMat4ByName("model", model);
        let viewProjection = mat4.create();
        viewProjection = mat4.multiply(viewProjection, projection_matrix, view_matrix);
        shader.setMat4ByName("viewProjection", viewProjection);
        this.skybox.draw(gl);

        basicModelShader.use();

        // directional light
        basicModelShader.setBoolByName("lights[0].is_enabled", true);
        basicModelShader.setVec4ByName("lights[0].position", [0.34, 0.83, 0.44, 0.0]);
        basicModelShader.setVec3ByName("lights[0].ambient", [1.0, 1.0, 1.0]);
        basicModelShader.setVec3ByName("lights[0].diffuse", [1.0, 1.0, 1.0]);
        basicModelShader.setVec3ByName("lights[0].specular", [1.0, 1.0, 1.0]);
        //Setup player point light

        // basicModelShader.setBool("lights[1].is_enabled", true);
        // basicModelShader.setVec4("lights[1].position", [this.player.position[0], this.player.position[1], this.player.position[2], 1.0]);
        // basicModelShader.setVec3("lights[1].ambient", [0.05, 0.05, 0.05]);
        // basicModelShader.setVec3("lights[1].diffuse", [0.1, 0.1, 0.1]);
        // basicModelShader.setVec3("lights[1].specular", [0.0, 0.0, 0.0]);
        // basicModelShader.setVec3("lights[1].attenuation", [0.4, 0.09, 0.032]);

        basicModelShader.setVec3(basicModelShader.uniforms.camera_pos, activeCamera.position);

        // //Draw Disk
        gl.enable(gl.DEPTH_TEST);
        // this.world.draw(gl, view_matrix, projection_matrix);

        basicModelRenderer.render(gl, view_matrix, projection_matrix);
        // this.player.draw(gl, view_matrix, projection_matrix);

    }

    end(fps, panic) {
        fpsCounter.textContent = Math.round(fps) + ' FPS';
        if (panic) {
            var discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
    }


    doDemo(delta: number) {
        demo_ticker++;
        this.player.move(Player_Movement.FORWARD, delta / 2);
       
            this.player.rotate(delta / 8);
            playerCamera.front[0] = this.player.forward[0];
            playerCamera.front[2] = this.player.forward[2];
        
    }

    resize(): void {
        let min = Math.min(window.innerHeight, window.innerWidth);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        gl.viewport(0, 0, canvas.width, canvas.height);
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

    fullscreenChange = (e) => {
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
    };

    pointerLockChange = (e) => {

        let document: any = window.document;
        if (document.pointerLockElement === canvas ||
            document.mozPointerLockElement === canvas ||
            document.webkitPointerLockElement === canvas) {

            document.addEventListener("mousemove", this.moveCallback, false);
        }
        else {
            document.removeEventListener("mousemove", this.moveCallback, false);
        }
    };

    moveCallback = (e) => {
        let movementX = e.movementX ||
            e.mozMovementX ||
            e.webkitMovementX ||
            0;
        let movementY = e.movementY ||
            e.mozMovementY ||
            e.webkitMovementY ||
            0;
        this.player.rotate(-movementX / 600);
        playerCamera.processMouseMovement(this.player.forward, this.player.position, movementX, -movementY, true);
    }

}

window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};

window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};

window.onmousedown = function (e) {
    mouseKeys[e.which] = true;
};

window.onmouseup = function (e) {
    mouseKeys[e.which] = false;
};


new Main();

