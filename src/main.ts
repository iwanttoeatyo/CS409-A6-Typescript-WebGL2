import {glMatrix, mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {Camera, Camera_Movement} from "./camera";

import {Mesh} from './lib/OBJ/mesh';
import {MaterialLibrary} from './lib/OBJ/index.js';
import {Layout} from './lib/OBJ/layout';
import {Player, Player_Movement} from "./entities/player";
import {World, WorldMeshes} from "./entities/world";
import {Skybox} from "./entities/skybox";


let MainLoop = require('./lib/MainLoop/mainloop.js');


let document = window.document;
let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;

let shader: Shader;
let instancedShader: Shader;

const playerOrigin = vec3.fromValues(0, 0.8, 0);
const playerOriginRotation = vec3.fromValues(1, 0, 0);

let keys: boolean[] = [];
let mouseKeys: boolean[] = [];

let fpsCounter = document.getElementById('fpscounter');

let playerCamera: Camera = new Camera(vec3.fromValues(0, 1.6, 0), vec3.fromValues(0, 1, 0), 0);
let worldCamera: Camera = new Camera(vec3.fromValues(100,200,10), vec3.fromValues(0,1,0), 0, 0);
//Set overview camera to look at origin.
worldCamera.lookAt(vec3.fromValues(0,0,0));

let activeCamera:Camera = playerCamera;

class Main {
    world: World;
    skybox: Skybox;
    player:Player;


    constructor() {

        canvas = <HTMLCanvasElement> document.getElementById("canvas");
        this.initGL();

        //Set the background color before we load any assets
        gl.clearColor(0.2, 0.3, 0.3, 1.0);
        gl.enable(gl.DEPTH_TEST);
        //  gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);

        this.resize();
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        //Display that we are loading
        
        
        
        this.loadAssets().then(() => {
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

        let root = window.location.href.substr(0, window.location.href.lastIndexOf("/"));

        console.log("world started " + Date.now());
        let _worldMeshes = await World.loadWorldMeshes();
        let _worldMat = await World.loadWorldMat();
        console.log("world done "  + Date.now());
        let _worldData = await World.loadWorldData();
        this.world = new World(gl, _worldData, _worldMeshes, _worldMat);

        
        console.log("skybox started " + Date.now());
        let skybox_model = await Skybox.load();
        console.log("skybox done "  + Date.now());
        this.skybox = new Skybox(gl, skybox_model["Skybox"]);

        
        let _playerData =await Player.loadMesh();

        //   this.skybox = new Skybox(gl, _skyboxMesh);
        this.player = new Player(gl, _playerData["cbabe"],playerOrigin);

        shader = new Shader(gl, require("../src/shaders/basic.vert"), require("../src/shaders/basic.frag"));
        instancedShader = new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));

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
        shader.setInt("texture1", 0);
        instancedShader.use();
        instancedShader.setInt("material.diffuse", 0);
       // instancedShader.setInt("material.specular", 1);
       // instancedShader.setInt("material.emission", 2);
        
        
        
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
        
        if(keys[79]){
            activeCamera = worldCamera;
        }else{
            activeCamera = playerCamera;
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
        let projection = mat4.create();
        let view = activeCamera.getViewMatrix();
        mat4.perspective(projection, glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 10000);
        let viewProjection = mat4.multiply(projection, projection, view);


        let model = mat4.create();

        
        //Draw Skybox
        gl.disable(gl.DEPTH_TEST);
        shader.use();
        mat4.translate(model, model, activeCamera.position);
        shader.setFloat("ambient", 0.65);
        
        shader.setMat4("model", model);
        shader.setMat4("viewProjection", viewProjection);
        this.skybox.draw(gl);


        instancedShader.use();
        // directional light
        instancedShader.setVec3("dirLight.direction", [-0.45, -1.0, -0.7]);
        instancedShader.setVec3("dirLight.ambient", [0.2, 0.2, 0.2]);
        instancedShader.setVec3("dirLight.diffuse", [0.7, 0.7, 0.7]);
        instancedShader.setVec3("dirLight.specular", [0.0, 0.0, 0.0]);
        //Setup player point light
 
        instancedShader.setVec3("playerLight.position",[this.player.position[0], this.player.position[1], this.player.position[2]]);
        instancedShader.setVec3("playerLight.ambient", [0.05, 0.05, 0.05]);
        instancedShader.setVec3("playerLight.diffuse", [0.1, 0.1, 0.1]);
        instancedShader.setVec3("playerLight.specular", [0.0, 0.0, 0.0]);
        instancedShader.setFloat("playerLight.constant", 0.4);
        instancedShader.setFloat("playerLight.linear", 0.09);
        instancedShader.setFloat("playerLight.quadratic", 0.032);
        instancedShader.setVec3("viewPos",playerCamera.position);

        // material properties
        instancedShader.setFloat("material.shininess", 64.0);



        //Draw Disk
        gl.enable(gl.DEPTH_TEST);
        model = mat4.create();
        instancedShader.use();
        instancedShader.setMat4("viewProjection", viewProjection);
        instancedShader.setMat4("model", model);

        this.world.draw(gl);


        //Draws Player in front of camera, always facing away from camera
        instancedShader.use();
        instancedShader.setMat4("viewProjection", viewProjection);
        model = mat4.create();

        //Move player model to its position
        mat4.translate(model, model, this.player.position);
        //Rotate model to face away from camera
        mat4.rotateY(model, model, Math.atan2(this.player.forward[0], this.player.forward[2]) - Math.PI / 2);
        instancedShader.setMat4("model", model);
        //shader.setFloat("ambient", 0.75);
        this.player.draw(gl);


    }

    end(fps, panic) {
        fpsCounter.textContent = Math.round(fps) + ' FPS';
        if (panic) {
            var discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
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

            document.addEventListener("mousemove", this.moveCallback,false);
        }
        else {
            document.removeEventListener("mousemove", this.moveCallback,false);
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

