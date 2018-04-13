import {mat4, vec3} from "gl-matrix";
import {PlayerModel} from "./models/playermodel";
import {Mesh} from "../lib/OBJ/index.js";
import {MaterialLibrary} from "../lib/OBJ/index.js";
import {BADFAMILY} from "dns";
import {BasicModel} from "./models/basicmodel";
import {Entity, Model_Type} from "./entity";

let OBJ = require("../lib/OBJ/index.js");

const SPEED = 20;

export enum Player_Movement {
    FORWARD,
    BACKWARD,
    LEFT,
    RIGHT
}

export class Player  extends Entity{
    model: PlayerModel;
    up: vec3;

    constructor(gl: WebGL2RenderingContext, mesh: Mesh, pos: vec3) {
        super(pos,null,vec3.fromValues(1,0,0),mesh.name, Model_Type.BASIC);
        this.model = new PlayerModel(mesh);
        this.model.rotation_offset = vec3.fromValues(0,0,- Math.PI / 2);
        this.model.init(gl);
        this.up = vec3.fromValues(0, 1, 0);
    }


    rotate(angle: number): void {
        vec3.rotateY(this.forward, this.forward, [0, 0, 0], angle * 2);
    }

    move(direction: Player_Movement, deltaTime: number): void {
        let velocity = vec3.create();
        if (direction == Player_Movement.FORWARD) {
            vec3.scale(velocity, this.forward, SPEED * deltaTime);
            vec3.add(this.position, this.position, velocity);
        } else if (direction == Player_Movement.BACKWARD) {
            vec3.scale(velocity, this.forward, -SPEED * deltaTime * 0.5);
            vec3.add(this.position, this.position, velocity);
        } else if (direction == Player_Movement.LEFT) {
            let r = vec3.create();
            vec3.copy(r, this.forward);
            vec3.rotateY(r, r, [0, 0, 0], Math.PI / 2);
            vec3.scale(velocity, r, SPEED * deltaTime);
            vec3.add(this.position, this.position, velocity);
        } else if (direction == Player_Movement.RIGHT) {
            let r = vec3.create();
            vec3.copy(r, this.forward);
            vec3.rotateY(r, r, [0, 0, 0], -Math.PI / 2);
            vec3.scale(velocity, r, SPEED * deltaTime);
            vec3.add(this.position, this.position, velocity);
        }


    }

    draw(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4): void {
        //Draws Player in front of camera, always facing away from camera
        let model = mat4.create();

        //Move player model to its position
        mat4.translate(model, model, this.position);
        //Rotate model to face away from camera
        mat4.rotateY(model, model, Math.atan2(this.forward[0], this.forward[2]) - Math.PI / 2);
        BasicModel.setMVPMatrices(model,view_matrix,projection_matrix);
        this.model.draw(gl);


    }

    static async loadMesh() {
        return OBJ.downloadModels([
            {
                name: 'cbabe',
                obj: "/assets/models/actors/cbabe/cbabe_stand.obj",
                mtl: "/assets/models/actors/cbabe/cbabe.mtl"
            }
        ]);
    }

}