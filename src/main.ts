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

let MainLoop = require('./lib/MainLoop/mainloop.js');

let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;
let shader: Shader;
let instancedShader: Shader;

const playerOrigin = vec3.fromValues(0,0.8, 0);
const playerOriginRotation = vec3.fromValues(1,0,0);


let document = window.document;

let keys: boolean[] = [];

let models: Object;
let worldData: string;

let disk: Disk;
let diskModel: DiskModel;

let player1:Player;
let playerModel:PlayerModel;

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

let fpsCounter = document.getElementById('fpscounter');

let camera: Camera = new Camera(vec3.fromValues(0, 1, 0), vec3.fromValues(0, 1, 0), 0);

class Main {

    constructor() {
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



        playerModel = new PlayerModel(models["cbabe_stand"]);
        playerModel.init(gl);

        player1 = new Player(playerModel, 0,0.8,0);
        
        diskModel = new DiskModel(models["DiskA"]);
        diskModel.init(gl);
        
        camera.front = player1.forward;
        
        //diskModel.generateInstancingBuffers(gl, 100,0.5);
        DiskReader.createDisksInstanced(gl, worldData, diskModel);
        disk = new Disk(diskModel, 1, 0, 0, 0);

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
            player1.move(Player_Movement.BACKWARD, delta);
        } else if (keys[38] || keys[87]) {
       //     camera.processKeyboard(Camera_Movement.FORWARD, delta);
            player1.move(Player_Movement.FORWARD, delta);
        }
        if (keys[65]) {
         //   camera.processKeyboard(Camera_Movement.LEFT, delta);
            player1.move(Player_Movement.LEFT, delta);
        } else if (keys[68]) {
         //   camera.processKeyboard(Camera_Movement.RIGHT, delta);
            player1.move(Player_Movement.RIGHT, delta);
        }

        if (keys[37]) {
            player1.rotate(delta);
            camera.front = player1.forward;
            camera.up = player1.up;
        }
        if (keys[39]){
            player1.rotate(-delta);
            camera.front = player1.forward;
            camera.up = player1.up;
        } 
        
        if(keys[82]){
            vec3.copy(player1.position, playerOrigin);
            vec3.copy(player1.forward, playerOriginRotation);
        }
    }


    /**
     * @param {Number} interpolationPercentage
     *   How much to interpolate between frames.
     */
    draw(interpolationPercentage) {
        let min = Math.min(window.innerHeight, window.innerWidth);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        //CAMERA STUFF
        vec3.copy(camera.position, player1.position);
        camera.position[0] -= 2* player1.forward[0];
        camera.position[2] -= 2* player1.forward[2];
        camera.position[1] += 0.4;
       //vec3.sub(camera.position,camera.position,player.forward);

        
        
        //Setup view and projection
        let projection = mat4.create();
        let view = camera.getViewMatrix();
        mat4.perspective(projection, glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 100000);
        let viewProjection = mat4.multiply(projection, projection, view);

        let model = mat4.create();

        //Draw Disk
        instancedShader.use();
        instancedShader.setMat4("viewProjection", viewProjection);
        instancedShader.setMat4("model", model);
        
        gl.bindVertexArray(disk.model.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, disk.model.mesh.indexBuffer);

        disk.model.mesh.materials.forEach((material,index) =>{
            let is = disk.model.mesh.vertexBuffer.itemSize;
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, disk.model.mesh.materialsByIndex[index].mapDiffuse.texture);
            gl.drawElementsInstanced(gl.TRIANGLES, is* material.numItems, gl.UNSIGNED_SHORT,material.offset * is * byteSize , disk.model.instanceCount);
        });
        
        gl.bindVertexArray(null);

        
        //Draws Player in front of camera, always facing away from camera
        shader.use();
        shader.setMat4("viewProjection", viewProjection);
        model = mat4.create();

        

        mat4.translate(model, model, player1.position);
        mat4.rotateY(model, model, Math.atan2(player1.forward[0], player1.forward[2]) - Math.PI / 2);

        shader.setMat4("model", model);

        gl.bindVertexArray(player1.model.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, player1.model.mesh.indexBuffer);

        player1.model.mesh.materials.forEach((material,index) =>{
            let is = player1.model.mesh.vertexBuffer.itemSize;
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, player1.model.mesh.materialsByIndex[index].mapDiffuse.texture);
            gl.drawElements(gl.TRIANGLES, is* material.numItems, gl.UNSIGNED_SHORT,material.offset * is * byteSize);
        });

        gl.bindVertexArray(null);



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
    camera.processMouseMovement(player1.forward,player1.position, movementX, -movementY, true);

   
    
}

let root = window.location.href.substr(0, window.location.href.lastIndexOf("/"));

let p1 = OBJ.downloadModels([
    {
        name: 'cbabe_stand',
        obj: "/assets/models/actors/cbabe/cbabe_stand.obj",
        mtl: "/assets/models/actors/cbabe/cbabe.mtl",
    },
    {
        name: 'DiskA',
        obj: "/assets/models/environment/disks/DiskA.obj",
        mtl: "/assets/models/environment/disks/Disks.mtl"
    }
], root);

let p2 = fetch(root + '/assets/worlds/maps/Basic.txt').then((response) => response.text());


Promise.all([p1,p2])
    .then((values) =>{
        let _models = values[0];
        let _worldData = values[1];
        Object.keys(_models).forEach((name) => {
            console.log('Name:', name);
            console.log('Mesh:', _models[name]);
        });
        worldData = _worldData
        models = _models;
        new Main();
    });