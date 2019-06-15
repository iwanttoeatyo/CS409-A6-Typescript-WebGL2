import {Player} from "entities/player";
import {World} from "entities/world";
import {global} from "globals";
import {PickupManager} from "pickupmanager";
import {Camera} from "camera";
import {glMatrix, mat4, vec3, vec4} from "gl-matrix";
import {BasicModel} from "entities/models/basicmodel";
import {Renderer} from "renderers/renderer";
import {Player_State} from "entities/models/playermodel";
import {MovementGraph} from "movementgraph";
import {PointList} from "renderers/linerenderer";
import {Bat} from "entities/bat";
import {Collision} from "helpers/collision";
import {Pointer} from "./helpers/pointer";

let OBJ = require("lib/OBJ/index.js");

let gl: WebGL2RenderingContext;
let g_keys: Array<boolean> = global.keys;
let g_mouse_keys: Array<boolean> = global.mouse_keys;

let renderer: Renderer;

const PLAYER_CAMERA_OFFSET = vec3.fromValues(0, 0.8, 0);
const LIGHT_DIRECTION = vec4.fromValues(0.34, 0.83, 0.44, 0.0);

let model_matrix: mat4 = mat4.create();
let projection_matrix: mat4 = mat4.create();
let view_matrix: mat4 = mat4.create();

export class Game {
    readonly ROD_FILENAME: string = "/assets/models/environment/rod/Rod";
    readonly RING_FILENAME: string = "/assets/models/environment/ring/Ring";
    readonly BAT_FILENAME: string = "/assets/models/actors/bat/BrownBat";
    readonly SKYBOX_FILENAME: string = "/assets/models/environment/skybox/Skybox";

    private rod_model: BasicModel;
    private bat_model: BasicModel;
    private ring_model: BasicModel;
    private skybox_model: BasicModel;

    private world: World;
    private world_graph: MovementGraph;
    private world_graph_point_list: PointList;
    private player: Player;
    private bats: Bat[] = [];
    private pickup_manager: PickupManager;

    private player_camera: Camera = new Camera(vec3.fromValues(0, 1.6, 0), vec3.fromValues(0, 1, 0), 0);
    private overview_camera: Camera = new Camera(vec3.fromValues(100, 190, 10), vec3.fromValues(0, 1, 0), 0, 0);
    private active_camera: Pointer<Camera> = new Pointer<Camera>(this.player_camera);
    private camera_lock: boolean = false;

    private current_map: number = 0;
    public show_path: boolean = true;

    //World Name, World Data
    static maps: Array<string>;

    constructor(_gl: WebGL2RenderingContext) {
        //   if (!this.assets_loaded) throw "Game loadAssets must be called before constructor.";
        gl = _gl;
        this.player = new Player();
    }

    public async init(): Promise<void> {
        await this.loadAssets();

        await global.updateProgressText("Initializing world");

        this.player.init(gl);
        this.ring_model.init(gl);
        this.rod_model.init(gl);
        this.skybox_model.init(gl);
        this.bat_model.init(gl);

        let w = Date.now();
        this.world = new World(gl, Game.maps[this.current_map++]);
        this.world_graph = new MovementGraph(this.world.disks);
        this.initWorldGraphPointLine();
        console.log("world gen time: " + (Date.now() - w) / 1000 + "s");

        this.pickup_manager = new PickupManager(this.world, this.world_graph, this.rod_model, this.ring_model);
        this.player.reset(this.world);
        this.initBats();
        this.overview_camera.lookAt(vec3.fromValues(0, 0, 0));

        await this.initRenderer();
        await this.addAllGameEntitiesToRenderer();
    }

    private initBats(): void {
        this.bats = [];
        for (let disk of this.world.disks) {
            this.bats.push(new Bat(this.bat_model, this.player, this.world));
        }
    }

    private initWorldGraphPointLine(): void {
        let offset = vec3.fromValues(0, 0.2, 0);
        this.world_graph_point_list = new PointList();
        this.world_graph_point_list.allocate(this.world_graph.getNodeLinkCount() * 2 * 2);
        let temp_pos = vec3.create();

        for (let node of this.world_graph.getNodeList()) {
            for (let link of node.node_links) {
                let color = vec4.fromValues(0.25 + link.weight / 50.0, 1.0 - link.weight / 150.0, 0.0, 1.0);
                this.world_graph_point_list.pushRaw(vec3.add(temp_pos, node.pos, offset), color);
                this.world_graph_point_list.pushRaw(
                    vec3.add(temp_pos, this.world_graph.getNodeList()[link.dest_node_id].pos, offset),
                    color
                );
            }
        }
    }

    private displayMovementGraph(view_matrix: mat4, projection_matrix: mat4): void {
        if (this.active_camera.value === this.overview_camera) gl.disable(gl.DEPTH_TEST);
        let vp = mat4.multiply(mat4.create(), projection_matrix, view_matrix);

        global.line_renderer.prepare();
        global.line_renderer.drawPointList(this.world_graph_point_list, vp);
        gl.enable(gl.DEPTH_TEST);
    }

    public displayRingZeroPath(view_matrix: mat4, projection_matrix: mat4): void {
        let ring = this.pickup_manager.rings[0];
        let path = ring.path;
        let offset = vec3.fromValues(0, 1, 0);
        let white = vec4.fromValues(1,1,1,1);
        let position = vec3.create();
        let target = vec3.create();
        let node_list = this.world_graph.getNodeList();

        global.line_renderer.prepare();
        global.line_renderer.preAllocatePointLine(path.length * 2 + 6);
        global.line_renderer.addLine(
            ring.position,
            vec3.add(position, ring.position, offset),
            white
        );
        global.line_renderer.addLine(
            vec3.add(position, ring.position, offset),
            vec3.add(target, ring.target_position, offset),
            white
        );

        if (path.length) {
            global.line_renderer.addLine(
                vec3.add(position, node_list[ring.target_node_id].pos, offset),
                vec3.add(target, node_list[path[0]].pos, offset),
                white
            );

            for (let i = 0; i < path.length - 1; i++) {
                global.line_renderer.addLine(
                    vec3.add(position, node_list[path[i]].pos, offset),
                    vec3.add(target, node_list[path[i + 1]].pos, offset),
                    white
                );
            }
        }
        gl.disable(gl.DEPTH_TEST);
        let vp_matrix = mat4.mul(mat4.create(), projection_matrix, view_matrix);
        global.line_renderer.drawAndClear(vp_matrix);
        gl.enable(gl.DEPTH_TEST);
    }

    private initRenderer(): void {
        // instancedShader = await new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));
        renderer = global.renderer;
        renderer.initShadows(LIGHT_DIRECTION, this.active_camera);

        //basicModelRenderer.addBasicModel(Player.model);
        renderer.removeAllModels();
        renderer.addBasicModel(this.world.diskA_model);
        renderer.addBasicModel(this.world.diskB_model);
        renderer.addBasicModel(this.world.diskC_model);
        renderer.addBasicModel(this.world.diskD_model);
        renderer.addBasicModel(this.world.diskE_model);
        renderer.addBasicModel(this.ring_model);
        renderer.addBasicModel(this.rod_model);
        renderer.addBasicModel(this.bat_model);

        //Init lighting
        let shader = renderer.basic_model_shader;
        shader.use();

        // directional light
        shader.setBoolByName("lights[0].is_enabled", true);
        shader.setVec4ByName("lights[0].position", LIGHT_DIRECTION);
        shader.setVec3ByName("lights[0].ambient", [1.8, 1.8, 1.8]);
        shader.setVec3ByName("lights[0].diffuse", [1.2, 1.2, 1.2]);
        shader.setVec3ByName("lights[0].specular", [0.0, 0.0, 0.0]);

        shader = renderer.basic_model_shader_shadow;
        shader.use();

        shader.setBoolByName("lights[0].is_enabled", true);
        shader.setVec4ByName("lights[0].position", LIGHT_DIRECTION);
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
        for (let disk of this.world.disks) {
            renderer.addEntityToRenderList(disk);
            renderer.addMeshlessModel(disk.heightMapModel);
            renderer.addEntityToRenderList(disk.heightMapEntity);
        }
        for (let ring of this.pickup_manager.rings) {
            if (!ring.picked_up) renderer.addEntityToRenderList(ring);
        }
        for (let rod of this.pickup_manager.rods) {
            if (!rod.picked_up) renderer.addEntityToRenderList(rod);
        }
        for (let bat of this.bats) {
            renderer.addEntityToRenderList(bat);
        }
    }

    public updateAnimations(delta_ms: number): void {
        this.player.updateAnimation(delta_ms);
    }

    public update(delta_ms: number): void {
        if (g_keys[77]) {
            this.destroyIntoNewWorld();
            this.initRenderer();
            this.addAllGameEntitiesToRenderer();
            g_keys[77] = false;
        }

        if (g_keys[80]) {
            g_keys[80] = false;
            this.show_path = !this.show_path;
        }

        if (g_keys[76]) {
            g_keys[76] = false;
            global.poor_performance = !global.poor_performance;
        }

        //R to reset
        if (g_keys[82]) {
            this.player.reset(this.world);
        }

        //O to switch to overview camera
        if (g_keys[79]) {
            this.active_camera.value = this.overview_camera;
            this.camera_lock = false;
        } else {
            if (!this.camera_lock) this.active_camera.value = this.player_camera;
        }

        if (global.poor_performance) renderer.disableShadows();
        else renderer.enableShadows();

        let accel_factor = this.world.getAccelFactorAtPosition(
            this.player.position[0],
            this.player.position[2],
            this.player.model.radius
        );

        //Movement
        if (g_keys[40] || g_keys[83]) {
            this.player.accelerateBackward(delta_ms, accel_factor);
        } else if (g_keys[38] || g_keys[87] || (g_mouse_keys[1] && g_mouse_keys[3])) {
            this.player.accelerateForward(delta_ms, accel_factor);
        }
        if (g_keys[65]) {
            this.player.accelerateLeft(delta_ms, accel_factor);
        } else if (g_keys[68]) {
            this.player.accelerateRight(delta_ms, accel_factor);
        }

        if (g_keys[40] || g_keys[83]) {
            this.player.transitionAnimationTo(Player_State.Reversing);
        } else if (g_keys[38] || g_keys[87] || (g_mouse_keys[1] && g_mouse_keys[3])) {
            this.player.transitionAnimationTo(Player_State.Running);
        } else if (g_keys[65] || g_keys[68]) {
            this.player.transitionAnimationTo(Player_State.Strafing);
        } else {
            this.player.transitionAnimationTo(Player_State.Standing);
        }

        //Turning
        if (g_keys[37]) this.player.turnLeft(delta_ms);

        if (g_keys[39]) this.player.turnRight(delta_ms);

        if (g_keys[32]) this.player.jump();

        this.player.update(this.world, delta_ms);

        for (let bat of this.bats) {
            bat.update(delta_ms);
        }

        this.batPlayerCollisions();



        //Mouse rotate
        this.player.rotate(-global.mouse_x_total / 600);
        this.player_camera.processMouseMovement(
            this.player.forward,
            this.player.position,
            global.mouse_x_total,
            -global.mouse_y_total,
            true
        );
        global.resetMousePosition();

        this.pickup_manager.update(delta_ms);

        this.pickup_manager.checkForPickupsCylinderIntersection(
            this.player.position,
            this.player.model.radius,
            this.player.model.half_height,
            renderer
        );

        this.player_camera.front[0] = this.player.forward[0];
        //playerCamera.front[1] = 1;
        this.player_camera.front[2] = this.player.forward[2];
        this.player_camera.up = this.player.up;

        vec3.copy(this.player_camera.position, this.player.position);
        this.player_camera.position[0] -= 3.0 * this.player.forward[0];
        this.player_camera.position[2] -= 3.0 * this.player.forward[2];
        vec3.add(this.player_camera.position, this.player_camera.position, PLAYER_CAMERA_OFFSET);
    }

    public draw(): void {
        let camera_pos = this.active_camera.value.position;

        if (renderer.shadow_enabled) {
            let light_view_matrix = view_matrix;
            let depth_proj_matrix = projection_matrix;

            renderer.getDepthProjMatrix(depth_proj_matrix);
            renderer.getLightViewMatrix(light_view_matrix);

            //Render Shadows to Depth Texture
            renderer.beginRenderDepth();
            this.player.draw(gl, renderer.active_shader, light_view_matrix, depth_proj_matrix, camera_pos);
            renderer.renderCull(light_view_matrix, depth_proj_matrix, camera_pos, global.SHADOW_DISTANCE * 2);
            renderer.endRenderDepth(light_view_matrix, depth_proj_matrix);
        }

        //Render To Screen
        mat4.identity(projection_matrix);
        mat4.identity(view_matrix);
        mat4.identity(model_matrix);
        this.active_camera.value.getViewMatrix(view_matrix);

        mat4.perspective(
            projection_matrix,
            glMatrix.toRadian(global.FOV),
            global.canvas.clientWidth / global.canvas.clientHeight,
            0.1,
            2000
        );
        //
        renderer.beginRender();

        //Draw Skybox
        gl.disable(gl.DEPTH_TEST);
        mat4.translate(model_matrix, model_matrix, this.active_camera.value.position);
        renderer.active_shader.setMVPMatrices(model_matrix, view_matrix, projection_matrix, camera_pos);
        this.skybox_model.draw(gl, renderer.active_shader);
        gl.enable(gl.DEPTH_TEST);

        //Draw all entities in renderer
        if (this.active_camera.value == this.player_camera && global.poor_performance)
            renderer.renderCull(view_matrix, projection_matrix, camera_pos, 100);
        else renderer.render(view_matrix, projection_matrix, camera_pos);

        this.player.draw(gl, renderer.active_shader, view_matrix, projection_matrix, camera_pos);

        if (this.show_path) {
            this.displayMovementGraph(view_matrix, projection_matrix);
            this.displaySearchPathSpheres(view_matrix, projection_matrix);
            this.displayRingZeroPath(view_matrix, projection_matrix);
        }

        //Render the shadow map texture
        // if(renderer.shadow_enabled)
        //     global.renderer.depth_texture.renderDepthTextureToQuad(0, 0, 256, 256);
    }

    public toggleCamera(): void {
        if (this.active_camera.value == this.overview_camera) {
            this.camera_lock = false;
            this.active_camera.value = this.player_camera;
        } else {
            this.camera_lock = true;
            this.active_camera.value = this.overview_camera;
        }
    }

    public reset():void{
        this.player.reset(this.world);
    }

    public batPlayerCollisions(): void {
        for (let bat of this.bats) {
            if (bat.ignore_timer > 0) continue;

            if (
                Collision.cylinderIntersection(
                    bat.position,
                    bat.radius,
                    bat.half_height,
                    this.player.position,
                    this.player.radius,
                    this.player.half_height
                )
            ) {
                this.player.hitByBat(bat.velocity);

                vec3.set(bat.velocity, 0, bat.S_MAX, 0);
                bat.ignore_timer = 1.0;

                //global.particle_emitter.addEffect(500, bat.position, 0.03, vec4.fromValues(1,1,0.3, 1), 600, Particle_Pattern.Random, 2.0, 0.0);
            }
        }
    }

    public displaySearchPathSpheres(view_matrix: mat4, projection_matrix: mat4): void {
        global.sphere_renderer.prepare();
        let search_data = this.world_graph.getMemorizedSearchData();
        let start_node_id = 0;
        let end_node_id = 0;
        let meeting_node_id = 0;

        if (search_data.length)
            if (this.active_camera.value === this.overview_camera) {
                let highest_priority_start = 0;
                let lowest_priority_start = Number.MAX_VALUE;
                let highest_priority_end = 0;
                let lowest_priority_end = Number.MAX_VALUE;

                for (let i = 0; i < search_data.length; i++) {
                    let start_data = search_data[i].start;
                    let end_data = search_data[i].end;
                    if (start_data.visited && end_data.visited) meeting_node_id = i;
                    if (end_data.visited) {
                        if (end_data.given_cost === 0) end_node_id = i;
                        highest_priority_end = Math.max(end_data.priority, highest_priority_end);
                        lowest_priority_end = Math.min(end_data.priority, lowest_priority_end);
                    }
                    if (start_data.visited) {
                        if (start_data.given_cost === 0) start_node_id = i;
                        highest_priority_start = Math.max(start_data.priority, highest_priority_start);
                        lowest_priority_start = Math.min(start_data.priority, lowest_priority_start);
                    }
                }

                highest_priority_start = search_data[meeting_node_id].start.priority;
                highest_priority_end = search_data[meeting_node_id].end.priority;

                let prio_start_diff = highest_priority_start - lowest_priority_start;
                let prio_end_diff = highest_priority_end - lowest_priority_end;

                for (let i = 0; i < search_data.length; i++) {
                    let start_data = search_data[i].start;
                    let end_data = search_data[i].end;

                    //If not visited dont draw
                    if (!start_data.visited && !end_data.visited) continue;

                    let color = vec4.create();
                    let scale = 1.5;

                    if (i == start_node_id || i == end_node_id || i == meeting_node_id) scale = 3.0;

                    if (start_data.visited) {
                        let color_frac = 1.0 - (start_data.priority - lowest_priority_start) / prio_start_diff / 2.0;
                        color = vec4.set(color, 0, color_frac, 1, 1);
                    } else if (end_data.visited) {
                        let color_frac = 1.0 - (end_data.priority - lowest_priority_end) / prio_end_diff;
                        color = vec4.set(color, 1, color_frac, 1, 1);
                    }

                    //Set these colors for distinguished nodes
                    if (i === start_node_id) vec4.set(color, 0, 1, 1, 1);
                    if (i === meeting_node_id) vec4.set(color, 0.6, 0, 1, 1);
                    if (i === end_node_id) vec4.set(color, 1, 1, 1, 1);

                    //Draw
                    mat4.identity(model_matrix)
                    mat4.translate(model_matrix, model_matrix, this.world_graph.getNodeList()[i].pos);
                    mat4.scale(model_matrix, model_matrix, vec3.fromValues(scale, scale, scale));

                    global.sphere_renderer.draw(color, model_matrix, view_matrix, projection_matrix);
                }
            }
    }

    public destroyIntoNewWorld(): void {
        if (this.current_map >= Game.maps.length) this.current_map = 0;

        this.world.destroy();
        this.world.init(gl, Game.maps[this.current_map++]);
        this.world_graph = new MovementGraph(this.world.disks);
        this.initBats();
        this.initWorldGraphPointLine();

        this.pickup_manager.init(this.world, this.world_graph);
        this.player.reset(this.world);
    }

    public getScore(): number {
        return this.pickup_manager.getScore();
    }

    public doDemo(delta_ms: number): void {
        let speed_factor = this.world.getAccelFactorAtPosition(
            this.player.position[0],
            this.player.position[2],
            this.player.model.radius
        );

        // this.player.accelerateForward(delta_ms / 2, speed_factor);
        this.player.rotate(delta_ms / 5000);
    }

    private async loadAssets(): Promise<void> {
        let start = Date.now();

        await global.updateProgressText("Downloading world");
        await World.loadAssets();
        await this.loadWorldData();
        await global.updateProgressText("Downloading models");
        await this.loadModels();
        await global.updateProgressText("Downloading player models");
        await this.player.loadAssets();

        let end = Date.now();
        console.log("asset download time: " + (end - start) / 1000 + "s");
    }

    private async loadModels(): Promise<void> {
        let mesh = await OBJ.downloadModels([
            {
                name: "Ring",
                obj: this.RING_FILENAME + ".obj",
                mtl: this.RING_FILENAME + ".mtl"
            }
        ]);
        this.ring_model = new BasicModel(mesh.Ring, 0.7, 0.1);

        mesh = await OBJ.downloadModels([
            {
                name: "Rod",
                obj: this.ROD_FILENAME + ".obj",
                mtl: this.ROD_FILENAME + ".mtl"
            }
        ]);
        this.rod_model = new BasicModel(mesh.Rod, 0.1, 1.0);

        mesh = await OBJ.downloadModels([
            {
                name: "Bat",
                obj: this.BAT_FILENAME + ".obj",
                mtl: this.BAT_FILENAME + ".mtl"
            }
        ]);
        this.bat_model = new BasicModel(mesh.Bat, 0.5, 0.05);
        this.bat_model.rotation_offset = -Math.PI / 2;

        mesh = await OBJ.downloadModels([
            {
                name: "Skybox",
                obj: this.SKYBOX_FILENAME + ".obj",
                mtl: this.SKYBOX_FILENAME + ".mtl"
            }
        ]);
        this.skybox_model = new BasicModel(mesh.Skybox);
        return;
    }

    private async loadWorldData(): Promise<void> {
        Game.maps = [];
        let context = require.context("assets/worlds/maps/", true, /\.txt$/);
        context.keys().forEach(key => Game.maps.push(context(key).default));
    }
}
