import {Player, Player_Movement} from "./entities/player";
import {World} from "./entities/world";
import {global} from "./globals";
import {PickupManager} from "./pickupmanager";
import {Camera} from "./camera";
import {glMatrix, mat4, vec3} from "gl-matrix";
import {BasicModel} from "./entities/models/basicmodel";
import {Renderer} from "./renderer";
import * as assert from "assert";
import {BasicModelShader} from "./basicmodelshader";
import {Shader} from "./shader";
import {Player_State} from "./entities/models/playermodel";


let OBJ = require("./lib/OBJ/index.js");
let gl: WebGL2RenderingContext = global.gl;

let g_keys: Array<boolean> = global.keys;
let g_mouse_keys: Array<boolean> = global.mouse_keys;

let renderer: Renderer;

const PLAYER_CAMERA_OFFSET = vec3.fromValues(0, 1.6, 0);

export class Game {
    readonly ROD_FILENAME: string = "/assets/models/environment/rod/Rod";
    readonly RING_FILENAME: string = "/assets/models/environment/ring/Ring";
    readonly SKYBOX_FILENAME: string = "/assets/models/environment/skybox/Skybox";
    readonly MAPS_FOLDER: string = "../../assets/worlds/maps/";

    private rod_model: BasicModel;
    private ring_model: BasicModel;
    private skybox_model: BasicModel;

    private world: World;
    private player: Player;
    private pickup_manager: PickupManager;

    private player_camera: Camera = new Camera(vec3.fromValues(0, 1.6, 0), vec3.fromValues(0, 1, 0), 0);
    private overview_camera: Camera = new Camera(vec3.fromValues(100, 200, 10), vec3.fromValues(0, 1, 0), 0, 0);
    private active_camera: Camera = this.player_camera;

    private current_map: number = 0;

    //World Name, World Data
    static maps: Array<string>;

    constructor() {
        //   if (!this.assets_loaded) throw "Game loadAssets must be called before constructor.";
        gl = gl || global.gl;
        assert(gl);
    }

    public async init(): Promise<void> {
        this.player = new Player();
        await this.loadAssets();

        await global.updateProgressText("Initializing world");

        this.ring_model.init(gl);
        this.rod_model.init(gl);
        this.skybox_model.init(gl);

        let w = Date.now();
        this.world = new World(gl, Game.maps[this.current_map++]);
        console.log("world gen time: " + (Date.now() - w) / 1000 + "s");

        this.pickup_manager = new PickupManager(this.world, this.rod_model, this.ring_model);
        this.player.reset(this.world);
        this.overview_camera.lookAt(vec3.fromValues(0, 0, 0));

        this.initRenderer();
        this.addAllGameEntitiesToRenderer();
    }


    private initRenderer(): void {
        // instancedShader = await new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));
        let shader = new BasicModelShader(gl, require('../src/shaders/basicmodel.vert'), require("../src/shaders/basicmodelmanylights.frag"));
        
        renderer = new Renderer(shader);
        global.renderer = renderer;

        //basicModelRenderer.addBasicModel(Player.model);

        renderer.addBasicModel(this.world.diskA_model);
        renderer.addBasicModel(this.world.diskB_model);
        renderer.addBasicModel(this.world.diskC_model);
        renderer.addBasicModel(this.world.diskD_model);
        renderer.addBasicModel(this.world.diskE_model);
        renderer.addBasicModel(this.ring_model);
        renderer.addBasicModel(this.rod_model);

        //Init lighting
        shader.use();

        // directional light
        shader.setBoolByName("lights[0].is_enabled", true);
        shader.setVec4ByName("lights[0].position", [0.34, 0.83, 0.44, 0.0]);
        shader.setVec3ByName("lights[0].ambient", [1.8, 1.8, 1.8]);
        shader.setVec3ByName("lights[0].diffuse", [1.2, 1.2, 1.2]);
        shader.setVec3ByName("lights[0].specular", [0.0, 0.0, 0.0]);

        //Setup player point light
        // shader.setBool("lights[1].is_enabled", true);
        // shader.setVec4("lights[1].position", [this.player.position[0], this.player.position[1], this.player.position[2], 1.0]);
        // shader.setVec3("lights[1].ambient", [0.05, 0.05, 0.05]);
        // shader.setVec3("lights[1].diffuse", [0.1, 0.1, 0.1]);
        // shader.setVec3("lights[1].specular", [0.0, 0.0, 0.0]);
        // shader.setVec3("lights[1].attenuation", [0.4, 0.09, 0.032]);
    }

    private addAllGameEntitiesToRenderer(): void {
        renderer.removeAllEntities();
        //basicModelRenderer.addEntityToRenderList(this.player);

        this.world.disks.forEach(disk => {
            assert(disk.initialized);
            renderer.addEntityToRenderList(disk);
            renderer.addMeshlessModel(disk.heightMapModel);
            renderer.addEntityToRenderList(disk.heightMapEntity);
        });

        this.pickup_manager.rings.forEach(ring => {
            if (!ring.picked_up)
                renderer.addEntityToRenderList(ring);
        });
        this.pickup_manager.rods.forEach(rod => {
            if (!rod.picked_up)
                renderer.addEntityToRenderList(rod);
        });
    }
    
    public updateAnimations(delta_ms:number):void{
        this.player.updateAnimation(delta_ms);
    }

    public update(delta_ms: number): void {

        if (g_keys[77]) {
            this.destroyIntoNewWorld();
            this.addAllGameEntitiesToRenderer();
            g_keys[77] = false;

        }

        let accel_factor = this.world.getAccelFactorAtPosition(this.player.position[0], this.player.position[2], this.player.model.radius);

        //Movement
        let moved = false;
        
        if (g_keys[40] || g_keys[83]) {
            this.player.accelerateBackward(delta_ms, accel_factor);
            moved = true;
        } else if ((g_keys[38] || g_keys[87]) || (g_mouse_keys[1] && g_mouse_keys[3])) {
            this.player.accelerateForward(delta_ms, accel_factor);
            moved = true;
        }
        if (g_keys[65]) {
            this.player.accelerateLeft(delta_ms, accel_factor);
            moved = true;
        } else if (g_keys[68]) {
            this.player.accelerateRight(delta_ms, accel_factor);
            moved = true;
        }
        
        if(!moved)
            this.player.transitionAnimationTo(Player_State.Standing);

        //Turning
        if (g_keys[37])
            this.player.turnLeft(delta_ms);

        if (g_keys[39])
            this.player.turnRight(delta_ms);

        if(g_keys[32])
            this.player.jump();
        
        this.player.update(this.world,delta_ms);

        //R to reset
        if (g_keys[82]) {
            this.player.reset(this.world);
        }

        //O to switch to overview camera
        if (g_keys[79]) {
            this.active_camera = this.overview_camera;
        } else {
            this.active_camera = this.player_camera;
        }

        //Mouse rotate
        this.player.rotate(-global.mouse_x_total / 600);
        this.player_camera.processMouseMovement(this.player.forward, this.player.position, global.mouse_x_total, -global.mouse_y_total, true);
        global.resetMousePosition();


        this.world.update(delta_ms);
        this.pickup_manager.update(delta_ms);

        this.pickup_manager.checkForPickupsCylinderIntersection(this.player.position, this.player.model.radius, this.player.model.half_height, renderer);

        //console.log(this.player.position[0] + ", " + this.player.position[1] + ", " + this.player.position[2] );

        this.player_camera.front[0] = this.player.forward[0];
        //playerCamera.front[1] = 1;
        this.player_camera.front[2] = this.player.forward[2];
        this.player_camera.up = this.player.up;

        let new_cam_position = vec3.clone(this.player.position);
        new_cam_position[0] -= 2.0 * this.player.forward[0];
        new_cam_position[2] -= 2.0 * this.player.forward[2];
        vec3.add(new_cam_position, new_cam_position, PLAYER_CAMERA_OFFSET);
        vec3.copy(this.player_camera.position, new_cam_position);
    }


    public draw(): void {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        let camera = vec3.clone(this.active_camera.position);
        //Setup view and projection
        let projection_matrix = mat4.create();
        mat4.identity(projection_matrix);
        let view_matrix = this.active_camera.getViewMatrix();
        mat4.perspective(projection_matrix, glMatrix.toRadian(80), global.canvas.clientWidth / global.canvas.clientHeight, 0.1, 2000);

        renderer.prepareShader(gl);
        let model = mat4.create();

        //Draw Skybox
        gl.disable(gl.DEPTH_TEST);
        mat4.translate(model, model, this.active_camera.position);

        renderer.setMVPMatrices(model, view_matrix, projection_matrix, this.active_camera.position);
        this.skybox_model.draw(gl,renderer.shader);
        gl.enable(gl.DEPTH_TEST);

        //Draw all entities in renderer
        renderer.render(gl, view_matrix, projection_matrix);
        this.player.draw(gl, renderer.shader, view_matrix, projection_matrix,camera);
    }


    public destroyIntoNewWorld(): void {
        if (this.current_map >= Game.maps.length) this.current_map = 0;

        this.world.destroy();
        this.world.init(gl, Game.maps[this.current_map++]);

        this.pickup_manager.init(this.world);
        this.player.reset(this.world);
    }


    public getScore(): number {
        return this.pickup_manager.getScore();
    }

    public doDemo(delta_ms: number): void {
        let speed_factor = this.world.getAccelFactorAtPosition(this.player.position[0], this.player.position[2], this.player.model.radius);
        
        this.player.accelerateForward(delta_ms / 2,speed_factor);
        this.player.rotate(delta_ms / 5);


    }

    private async loadAssets(): Promise<void> {
        let start = Date.now();

        await global.updateProgressText("Downloading world");
        await World.loadAssets();
        await this.loadWorldData();
        await global.updateProgressText("Downloading pickups");
        await this.loadPickupModels();
        await global.updateProgressText("Downloading skybox");
        await this.loadSkybox();
        await global.updateProgressText("Downloading player");
        await this.player.loadAssets();

        let end = Date.now();
        console.log("asset download time: " + (end - start) / 1000 + "s");


    }


    private async loadPickupModels(): Promise<void> {
        let mesh = await OBJ.downloadModels(
            [{
                name: 'Ring',
                obj: this.RING_FILENAME + ".obj",
                mtl: this.RING_FILENAME + ".mtl"
            }]);
        this.ring_model = new BasicModel(mesh.Ring);

        mesh = await OBJ.downloadModels(
            [{
                name: 'Rod',
                obj: this.ROD_FILENAME + ".obj",
                mtl: this.ROD_FILENAME + ".mtl"
            }]);
        this.rod_model = new BasicModel(mesh.Rod);

        return;
    }

    private async loadWorldData(): Promise<void> {
        Game.maps = [];
        let context = require.context("../../assets/worlds/maps/", true, /\.txt$/);
        context.keys().forEach(key =>
            Game.maps.push(context(key)));


    }

    private async loadSkybox(): Promise<void> {
        let mesh = await OBJ.downloadModels(
            [{
                name: 'Skybox',
                obj: this.SKYBOX_FILENAME + ".obj",
                mtl: this.SKYBOX_FILENAME + ".mtl"
            }]);
        this.skybox_model = new BasicModel(mesh.Skybox);
        return
    }
}