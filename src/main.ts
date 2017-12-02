import {glMatrix, mat4, vec3, vec4} from "gl-matrix";
import {Shader} from "./shader";
import {Camera, Camera_Movement} from "./camera";

let OBJ = require('./lib/OBJ/index');
import {Mesh} from './lib/OBJ/mesh';
import {Layout} from './lib/OBJ/layout';
import {Disk} from "./entities/disk";
import {DiskModel} from "./entities/diskmodel";
import {DiskReader} from "./entities/diskreader";
import {Player, Player_Movement} from "./entities/player";
import {PlayerModel} from "./entities/playermodel";
import {World, WorldMeshes} from "./entities/world";
import {Skybox} from "./entities/skybox";

let MainLoop = require('./lib/MainLoop/mainloop.js');

let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;
let shader: Shader;
let instancedShader: Shader;

const playerOrigin = vec3.fromValues(0, 0.8, 0);
const playerOriginRotation = vec3.fromValues(1, 0, 0);


let document = window.document;

let keys: boolean[] = [];
let mouseKeys: boolean[] = [];

let models: Object;

let player: Player;
let playerModel: PlayerModel;
let disk: Disk;
let diskModel: DiskModel;
let worldData: string
let fpsCounter = document.getElementById('fpscounter');

let camera: Camera = new Camera(vec3.fromValues(0, 1.6, 0), vec3.fromValues(0, 1, 0), 0);


class Main {
    world: World;
    skybox: Skybox;


    loadAssets(): Promise<void> {

        let root = window.location.href.substr(0, window.location.href.lastIndexOf("/"));

        let p1 = OBJ.downloadModels([
            {
                name: 'cbabe_stand',
                obj: "/assets/models/actors/cbabe/cbabe_stand.obj",
                mtl: "/assets/models/actors/cbabe/cbabe.mtl",
            }
        ]);

        let p2 = fetch(root + '/assets/worlds/maps/Basic.txt').then((response) => response.text());

        let p3 = World.load();
        let p4 = Skybox.load();

        return Promise.all([p1, p2, p3, p4])
            .then((values) => {
                let _models = values[0];
                let _worldData = values[1];
                let _worldMeshes = <WorldMeshes>values[2];
                let _skyboxMesh = <Mesh>values[3]["Skybox"];
                console.log(_worldMeshes);
                console.log(_skyboxMesh);
                Object.keys(_models).forEach((name) => {
                    console.log('Name:', name);
                    console.log('Mesh:', _models[name]);
                });
                models = _models;
                worldData = _worldData;

                shader = new Shader(gl, require("../src/shaders/basic.vert"), require("../src/shaders/basic.frag"));
                instancedShader = new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));
                this.world = new World(gl, _worldData, _worldMeshes);
                this.skybox = new Skybox(gl, _skyboxMesh);

            });
    }


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


        this.loadAssets().then((values) => {
            this.initBuffers();
            this.initPointerLock();

            //Wait ms so images can load to prevent texture warnings
            setInterval(h => {
                MainLoop.setBegin(this.begin.bind(this))
                    .setUpdate(this.update.bind(this))
                    .setDraw(this.draw.bind(this))
                    .setEnd(this.end.bind(this))
                    .start();

            }, 100);

        });


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

        playerModel = new PlayerModel(models["cbabe_stand"]);
        playerModel.init(gl);

        player = new Player(playerModel, 0, 0.8, 0);

        diskModel = new DiskModel(this.world.diskAModel.mesh, 0);
        diskModel.init(gl);
        DiskReader.createDisksInstanced(gl, worldData, diskModel);
        disk = new Disk(diskModel, 1, 0, 0, 0);

        camera.front = player.forward;

        shader.use();
        shader.setInt("texture1", 0);
        instancedShader.use();
        instancedShader.setInt("texture1", 0);
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
            player.move(Player_Movement.BACKWARD, delta);
        } else if ((keys[38] || keys[87]) || (mouseKeys[1] && mouseKeys[3])) {
            //     camera.processKeyboard(Camera_Movement.FORWARD, delta);
            player.move(Player_Movement.FORWARD, delta);
        }
        if (keys[65]) {
            //   camera.processKeyboard(Camera_Movement.LEFT, delta);
            player.move(Player_Movement.LEFT, delta);
        } else if (keys[68]) {
            //   camera.processKeyboard(Camera_Movement.RIGHT, delta);
            player.move(Player_Movement.RIGHT, delta);
        }

        if (keys[37]) {
            player.rotate(delta);
            camera.front[0] = player.forward[0];
            camera.front[2] = player.forward[2];
            camera.up = player.up;
        }
        if (keys[39]) {
            player.rotate(-delta);
            camera.front[0] = player.forward[0];
            camera.front[2] = player.forward[2];
            camera.up = player.up;
        }

        if (keys[82]) {
            vec3.copy(player.position, playerOrigin);
            vec3.copy(player.forward, playerOriginRotation);
        }
    }


    /**
     * @param {Number} interpolationPercentage
     *   How much to interpolate between frames.
     */
    draw(interpolationPercentage) {

        this.resize();
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


       
        camera.position[0] = player.position [0];
        camera.position[2] = player.position[2];
        camera.position[0] -= 2 * player.forward[0];
        camera.position[2] -= 2 * player.forward[2];
        // camera.position[1] +=  player.position[1] + 0.4;
        //vec3.sub(camera.position,camera.position,player.forward);


        //Setup view and projection
        let projection = mat4.create();
        let view = camera.getViewMatrix();
        mat4.perspective(projection, glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 10000);
        let viewProjection = mat4.multiply(projection, projection, view);

        let model = mat4.create();

        gl.disable(gl.DEPTH_TEST);
        shader.use();
        mat4.translate(model, model, camera.position);
        shader.setMat4("model", model);
        shader.setMat4("viewProjection", viewProjection);
        this.skybox.draw(gl);
        //Draw Skybox

        gl.enable(gl.DEPTH_TEST);
        //Draw Disk
        //Draw Disk
        model = mat4.create();
        instancedShader.use();
        instancedShader.setMat4("viewProjection", viewProjection);
        instancedShader.setMat4("model", model);

        this.world.draw(gl);


        //Draws Player in front of camera, always facing away from camera
        shader.use();
        shader.setMat4("viewProjection", viewProjection);
        model = mat4.create();

        //Move player model to its position
        mat4.translate(model, model, player.position);
        //Rotate model to face away from camera
        mat4.rotateY(model, model, Math.atan2(player.forward[0], player.forward[2]) - Math.PI / 2);
        shader.setMat4("model", model);
        player.model.draw(gl);


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

window.onmousedown = function (e) {
    mouseKeys[e.which] = true;
}

window.onmouseup = function (e) {
    mouseKeys[e.which] = false;
}

function moveCallback(e) {
    let movementX = e.movementX ||
        e.mozMovementX ||
        e.webkitMovementX ||
        0;
    let movementY = e.movementY ||
        e.mozMovementY ||
        e.webkitMovementY ||
        0;
    player.rotate(-movementX / 600);
    camera.processMouseMovement(player.forward, player.position, movementX, -movementY, true);


}


new Main();

