import {BasicModel} from "./basicmodel";
import {Mesh} from "../../lib/OBJ/index.js";
import {global} from "../../globals";

let OBJ = require("../../lib/OBJ/index.js");
import {MaterialLibrary} from "../../lib/OBJ";
import {mat4, vec3} from "gl-matrix";


let gl = global.gl;

enum Run_State {
    Start = 0,
    Run1 = 1,
    Run2 = 2,
    Run3 = 3,
    Run4 = 4,
    Run5 = 5,
    StartReverse = 6
}

export enum Player_State {
    Standing,
    Jumping,
    Falling,
    Running,
    Strafing,
    Reversing
}

interface Frame {
    model: BasicModel;
    duration: number;

}


export class PlayerModel {
    private readonly PLAYER_FOLDER: string = "/assets/models/actors/cbabe/";

    private stand_model: BasicModel;
    private jump_model: BasicModel;
    private run_frames: Frame[];
    private state: Player_State = Player_State.Standing;

    private time_into_frame: number = 0;
    private run_state: Run_State;
    private animation_rate = 1;

    public radius: number = 0.25;
    public half_height: number = 0.8;

    constructor() {
        gl = gl || global.gl;

        this.run_frames = new Array<Frame>(7);
        for (let frame of this.run_frames)
            frame = {model: null, duration: null};

        this.run_frames[0] = {model: null, duration: 260};
        this.run_frames[1] = {model: null, duration: 260};
        this.run_frames[2] = {model: null, duration: 260};
        this.run_frames[3] = {model: null, duration: 350};
        this.run_frames[4] = {model: null, duration: 260};
        this.run_frames[5] = {model: null, duration: 260};
        this.run_frames[6] = {model: null, duration: 260};
        this.run_state = Run_State.Start;
    }

    public updateAnimation(delta_time_ms: number): void {
        let index = this.run_state;

        switch (this.state) {
            case Player_State.Running:
            case Player_State.Strafing: {
                this.time_into_frame += delta_time_ms * this.animation_rate;
                //go to next state
                if (this.time_into_frame > this.run_frames[index].duration) {

                    this.time_into_frame -= this.run_frames[index].duration;
                    this.run_state = this.run_state + 1;

                    if (this.run_state > Run_State.Run5)
                        this.run_state = Run_State.Run1;
                }
                break;
            }
            case Player_State.Reversing: {
                this.time_into_frame -= delta_time_ms * this.animation_rate;
                //go to next state
                if (this.time_into_frame < 0) {
                    this.run_state = this.run_state - 1;

                    if (this.run_state < Run_State.Run1) this.run_state = Run_State.Run5;
                    index = this.run_state;
                    this.time_into_frame += this.run_frames[index].duration;
                }
                break;
            }
        }
    }

    public draw(gl: WebGL2RenderingContext, model_matrix: mat4, view_matrix: mat4, projection_matrix: mat4, camera_pos: vec3): void {
        this.stand_model.activateMaterial(gl, 0);


        switch (this.state) {
            case Player_State.Running:
            case Player_State.Strafing:
            case Player_State.Reversing:
                mat4.translate(model_matrix, model_matrix, vec3.fromValues(0, -0.035, 0));
        }

        BasicModel.shader.setMVPMatrices(model_matrix, view_matrix, projection_matrix, camera_pos);

        switch (this.state) {
            case Player_State.Running:
            case Player_State.Strafing:
            case Player_State.Reversing: {
                let tween = this.time_into_frame / this.run_frames[this.run_state].duration;
                //this.run_frames[this.run_state.valueOf()].model.draw(gl,tween,model_matrix,view_matrix,projection_matrix);
                this.run_frames[this.run_state].model.draw(gl);
                //this.stand_model.draw(gl);

                break;
            }
            case Player_State.Standing:
                this.stand_model.draw(gl);
                break;
            case Player_State.Jumping:
            case Player_State.Falling:


                this.jump_model.draw(gl);
        }
    }

    public setState(new_state: Player_State): void {
        if (this.state == new_state) return;

        switch (new_state) {
            case Player_State.Strafing:
            case Player_State.Running:
                if (this.state != Player_State.Strafing && this.state != Player_State.Running) {
                    this.time_into_frame = 0;
                    this.run_state = Run_State.Start;
                }
                break;
            case Player_State.Reversing:
                this.run_state = Run_State.StartReverse;
                let i = this.run_state.valueOf();
                this.time_into_frame = this.run_frames[i].duration;
                break;
        }

        switch (new_state) {
            case Player_State.Reversing:
                this.animation_rate = 0.6;
                break;
            case Player_State.Strafing:
                this.animation_rate = 0.6;
                break;
            case Player_State.Running:
                this.animation_rate = 1.0;
                break;
        }

        this.state = new_state;
    }

    init(gl: WebGL2RenderingContext) {
        this.stand_model.init(gl);
        this.jump_model.init(gl);

    }

    public async load(): Promise<void> {
        let mesh = await OBJ.downloadModels(
            [{
                name: 'cbabe_stand',
                obj: this.PLAYER_FOLDER + "cbabe_stand.obj",
                downloadMtlTextures: false,

            }, {
                name: 'cbabe_jump',
                obj: this.PLAYER_FOLDER + "cbabe_jump.obj",
                downloadMtlTextures: false,

            }, {
                name: 'cbabe_run_start',
                obj: this.PLAYER_FOLDER + "cbabe_run_start.obj",
                downloadMtlTextures: false,

            }, {
                name: 'cbabe_run_loop0',
                obj: this.PLAYER_FOLDER + "cbabe_run_loop0.obj",
                downloadMtlTextures: false,

            }, {
                name: 'cbabe_run_loop1',
                obj: this.PLAYER_FOLDER + "cbabe_run_loop1.obj",
                downloadMtlTextures: false,

            }, {
                name: 'cbabe_run_loop2',
                obj: this.PLAYER_FOLDER + "cbabe_run_loop2.obj",
                downloadMtlTextures: false,

            }, {
                name: 'cbabe_run_loop3',
                obj: this.PLAYER_FOLDER + "cbabe_run_loop3.obj",
                downloadMtlTextures: false,

            }, {
                name: 'cbabe_run_loop4',
                obj: this.PLAYER_FOLDER + "cbabe_run_loop4.obj",
                downloadMtlTextures: false,

            }
            ]);


        let data = await (await fetch(this.PLAYER_FOLDER + 'cbabe.mtl')).text();
        let mat = new MaterialLibrary(data);

        await OBJ.downloadMtlTextures(mat,
            window.location.href.substr(0, window.location.href.lastIndexOf("/")) + this.PLAYER_FOLDER);

        mesh.cbabe_stand.addMaterialLibrary(mat);
        mesh.cbabe_jump.addMaterialLibrary(mat);
        mesh.cbabe_run_start.addMaterialLibrary(mat);
        mesh.cbabe_run_loop0.addMaterialLibrary(mat);
        mesh.cbabe_run_loop1.addMaterialLibrary(mat);
        mesh.cbabe_run_loop2.addMaterialLibrary(mat);
        mesh.cbabe_run_loop3.addMaterialLibrary(mat);
        mesh.cbabe_run_loop4.addMaterialLibrary(mat);
        this.stand_model = new BasicModel(mesh.cbabe_stand);
        this.jump_model = new BasicModel(mesh.cbabe_jump);
        this.run_frames[0].model = new BasicModel(mesh.cbabe_run_start);
        this.run_frames[1].model = new BasicModel(mesh.cbabe_run_loop0);
        this.run_frames[2].model = new BasicModel(mesh.cbabe_run_loop1);
        this.run_frames[3].model = new BasicModel(mesh.cbabe_run_loop2);
        this.run_frames[4].model = new BasicModel(mesh.cbabe_run_loop3);
        this.run_frames[5].model = new BasicModel(mesh.cbabe_run_loop4);
        this.run_frames[6].model = new BasicModel(mesh.cbabe_run_start);

        this.stand_model.init(gl);
        this.jump_model.init(gl);
        this.run_frames[0].model.init(gl);
        this.run_frames[1].model.init(gl);
        this.run_frames[2].model.init(gl);
        this.run_frames[3].model.init(gl);
        this.run_frames[4].model.init(gl);
        this.run_frames[5].model.init(gl);
        this.run_frames[6].model.init(gl);
    }

}