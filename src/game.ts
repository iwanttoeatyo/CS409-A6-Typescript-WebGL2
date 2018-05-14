import {Player, Player_Movement} from "./entities/player";
import {World} from "./entities/world";
import {global} from "./globals";
import {PickupManager} from "./pickupmanager";
import {Camera} from "./camera";
import {glMatrix, mat4, vec3} from "gl-matrix";
import {BasicModel} from "./entities/models/basicmodel";
import {Renderer} from "./Renderer";
import * as assert from "assert";
import {BasicModelShader} from "./basicmodelshader";
import {Shader} from "./shader";


let OBJ = require("./lib/OBJ/index.js");
let gl:WebGL2RenderingContext = global.gl;

let g_keys:Array<boolean> = global.keys;
let g_mouse_keys:Array<boolean> = global.mouse_keys;


let shader: Shader;
let basicModelShader: BasicModelShader;
let basicModelRenderer: Renderer;

const PLAYER_ORIGIN = vec3.fromValues(0, 0, 0);
const PLAYER_FORWARD = vec3.fromValues(1, 0, 0);
const PLAYER_CAMERA_OFFSET = vec3.fromValues(0, 0.8, 0);


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
    }

    public async init(): Promise<void>{
        await this.loadAssets();
        
        await global.updateProgressText("Initializing world");

        this.ring_model.init(gl);
        this.rod_model.init(gl);
        this.skybox_model.init(gl);

        let w = Date.now();
        this.world = new World(gl, Game.maps[this.current_map]);
        console.log("world gen time: " + (Date.now() - w) / 1000 + "s");

        this.pickup_manager = new PickupManager(this.world, this.rod_model, this.ring_model);
        this.player = new Player(gl, this.world);
        this.overview_camera.lookAt(vec3.fromValues(0, 0, 0));

        this.initShaders();
        this.initRenderer();


    }

    private initShaders(): void {
 
        shader = new Shader(gl, require("../src/shaders/basic.vert"), require("../src/shaders/basic.frag"));
        // instancedShader = await new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));
        basicModelShader = new BasicModelShader(gl, require('../src/shaders/basicmodel.vert'), require("../src/shaders/basicmodelmanylights.frag"));

        shader.use();
        shader.setIntByName("texture1", 0);
        shader.setFloatByName("ambient", 1.4);

        //Init lighting
        basicModelShader.use();

        // directional light
        basicModelShader.setBoolByName("lights[0].is_enabled", true);
        basicModelShader.setVec4ByName("lights[0].position", [0.34, 0.83, 0.44, 0.0]);
        basicModelShader.setVec3ByName("lights[0].ambient", [1.8, 1.8, 1.8]);
        basicModelShader.setVec3ByName("lights[0].diffuse", [1.2, 1.2, 1.2]);
        basicModelShader.setVec3ByName("lights[0].specular", [0.0, 0.0, 0.0]);

        //Setup player point light
        // basicModelShader.setBool("lights[1].is_enabled", true);
        // basicModelShader.setVec4("lights[1].position", [this.player.position[0], this.player.position[1], this.player.position[2], 1.0]);
        // basicModelShader.setVec3("lights[1].ambient", [0.05, 0.05, 0.05]);
        // basicModelShader.setVec3("lights[1].diffuse", [0.1, 0.1, 0.1]);
        // basicModelShader.setVec3("lights[1].specular", [0.0, 0.0, 0.0]);
        // basicModelShader.setVec3("lights[1].attenuation", [0.4, 0.09, 0.032]);

        BasicModel.initWithShader(gl, basicModelShader);

    }

    private initRenderer(): void {

        basicModelRenderer = new Renderer();
        basicModelRenderer.init(basicModelShader);
        basicModelRenderer.addBasicModel(Player.model);
        basicModelRenderer.addEntityToRenderList(this.player);
        basicModelRenderer.addBasicModel(this.world.diskA_model);
        basicModelRenderer.addBasicModel(this.world.diskB_model);
        basicModelRenderer.addBasicModel(this.world.diskC_model);
        basicModelRenderer.addBasicModel(this.world.diskD_model);
        basicModelRenderer.addBasicModel(this.world.diskE_model);
        basicModelRenderer.addBasicModel(this.ring_model);
        basicModelRenderer.addBasicModel(this.rod_model);

        this.world.disks.forEach(disk => {
            assert(disk.initialized);
            basicModelRenderer.addEntityToRenderList(disk);
            basicModelRenderer.addMeshlessModel(disk.heightMapModel);
            basicModelRenderer.addEntityToRenderList(disk.heightMapEntity);
        });

        this.pickup_manager.rings.forEach(ring => {
            basicModelRenderer.addEntityToRenderList(ring);
        });
        this.pickup_manager.rods.forEach(rod => {
            basicModelRenderer.addEntityToRenderList(rod);
        });
    }

    public update(delta_ms: number): void {

        if(g_keys[9])
            this.destroyIntoNewWorld();
        
        //Movement
        if (g_keys[40] || g_keys[83]) {
            //     camera.processKeyboard(Camera_Movement.BACKWARD, delta_ms);
            this.player.move(Player_Movement.BACKWARD, delta_ms);
        } else if ((g_keys[38] || g_keys[87]) || (g_mouse_keys[1] && g_mouse_keys[3])) {
            //     camera.processKeyboard(Camera_Movement.FORWARD, delta_ms);
            this.player.move(Player_Movement.FORWARD, delta_ms);
        }
        if (g_keys[65]) {
            //   camera.processKeyboard(Camera_Movement.LEFT, delta_ms);
            this.player.move(Player_Movement.LEFT, delta_ms);
        } else if (g_keys[68]) {
            //   camera.processKeyboard(Camera_Movement.RIGHT, delta_ms);
            this.player.move(Player_Movement.RIGHT, delta_ms);
        }

        //Turning
        if (g_keys[37])
            this.player.rotate(delta_ms);

        if (g_keys[39])
            this.player.rotate(-delta_ms);


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
 

        //Set height to world height
        let height = this.world.getHeightAtCirclePosition(this.player.position[0], this.player.position[2], Player.model.radius);
        this.player.position[1] = height + Player.model.half_height;

        this.world.update(delta_ms);
        this.pickup_manager.update(delta_ms);

        this.pickup_manager.checkForPickupsCylinderIntersection(this.player.position, Player.model.radius, Player.model.half_height, basicModelRenderer);

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

        //Setup view and projection
        let projection_matrix = mat4.create();
        mat4.identity(projection_matrix);
        let view_matrix = this.active_camera.getViewMatrix();
        mat4.perspective(projection_matrix, glMatrix.toRadian(80), global.canvas.clientWidth / global.canvas.clientHeight, 0.1, 2000);

        basicModelShader.use();
        basicModelShader.setVec3(basicModelShader.uniforms.camera_pos, this.active_camera.position);
        
        let model = mat4.create();

        //Draw Skybox
        gl.disable(gl.DEPTH_TEST);
        mat4.translate(model, model, this.active_camera.position);
        
        basicModelShader.setMVPMatrices(model,view_matrix,projection_matrix);
        this.skybox_model.draw(gl);
        gl.enable(gl.DEPTH_TEST);

        //Draw all entities in renderer
        basicModelRenderer.render(gl, view_matrix, projection_matrix);
        // this.player.draw(gl, view_matrix, projection_matrix);
    }


    public destroyIntoNewWorld(): void {
        this.world.destroy();
        this.world.init(gl, Game.maps[this.current_map]);

        if (this.current_map >= Game.maps.length) this.current_map = 0;

        this.pickup_manager.init();
    }


    public getScore(): number {
        return this.pickup_manager.getScore();
    }

    public doDemo(delta_ms: number): void {
        this.player.move(Player_Movement.FORWARD, delta_ms / 2);

        this.player.rotate(delta_ms / 6);
        this.player_camera.front[0] = this.player.forward[0];
        this.player_camera.front[2] = this.player.forward[2];

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
        await Player.load();

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