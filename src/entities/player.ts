import {mat4, vec2, vec3} from "gl-matrix";

import {PlayerModel} from "./models/playermodel";
import {Entity, Model_Type} from "./entity";
import {World} from "./world";
import {MathHelper} from "../mathhelper";
import vec2_rotate = MathHelper.vec2_rotate;


let OBJ = require("../lib/OBJ/index.js");

const PLAYER_OFFSET = vec3.fromValues(0, 0.8, 0);
const PLAYER_INIT_FORWARD = vec3.fromValues(0, 0, -1);

const SPEED = 10;
const JUMP_UP_SPEED = 12.0;
const JUMP_FORWARD_SPEED = 8.0;

const TURNING_DEGREES = 3.0;
const ACCEL_FORWARD = 25.0;
const ACCEL = 10.0;

export enum Player_Movement {
    FORWARD,
    BACKWARD,
    LEFT,
    RIGHT
}

export class Player extends Entity {
    static readonly PLAYER_FILENAME: string = "/assets/models/actors/cbabe/cbabe";
    static model: PlayerModel;
    static loaded: boolean;


    private velocity: vec3;
    private jumping: boolean;


    constructor(gl: WebGL2RenderingContext, world: World) {
        if (!Player.loaded) throw "Player load must be called before constructor";
        super(Player.model.mesh.name, Model_Type.BASIC);
        Player.model.rotation_offset = -Math.PI / 2;
        Player.model.init(gl);

        this.reset(world);
    }

    public update(world: World, delta_time_ms: number): void {
        let delta_time_s = delta_time_ms / 1000;

        let old_pos = vec3.clone(this.position);
        let new_pos = vec3.clone(this.velocity);
        vec3.scaleAndAdd(new_pos, old_pos, new_pos, delta_time_s);

        let height = world.getHeightAtCirclePosition(new_pos[0], new_pos[2], Player.model.radius);

        if (this.jumping) {

            let gravity = vec3.fromValues(0, -9.8, 0);
            vec3.scaleAndAdd(this.velocity, this.velocity, gravity, delta_time_s);

            if (world.isCylinderCollisionWithDisk(vec3.add(vec3.create(), new_pos, PLAYER_OFFSET), Player.model.radius, Player.model.half_height)) {

                if (world.isCylinderCollisionWithDisk(vec3.add(vec3.create(), old_pos, PLAYER_OFFSET), Player.model.radius, Player.model.half_height)) {
                    //Collided from above disk. stop falling
                    this.jumping = false;
                    this.velocity[1] = 0;
                    new_pos[1] = height;
                } else {
                    //Collided with side of disk. Stop forward velocity
                    this.velocity[0] = this.velocity[2] = 0;
                    new_pos[0] = old_pos[0];
                    new_pos[2] = old_pos[2];
                }
            }
        } else {
            //Not jumping

            if (world.isOnDisk(new_pos[0], new_pos[2], Player.model.radius)) {
                //Not Falling
                new_pos[1] = height;
                this.velocity[1] = 0;

                //Apply friction
                let friction = world.getFrictionAtPosition(new_pos[0], new_pos[2]);
                vec3.scale(this.velocity, this.velocity, Math.pow(friction, delta_time_s));

                //Apply Sliding
                let min_slope = world.getSlopeFactorAtPosition(new_pos[0], new_pos[2]);
                let player_height = new_pos[1];
                let min_height = new_pos[1];

                let min_direction = vec2.create();

                for (let i = 0; i < 60; i++) {

                    //Rotate the direction so we get 60 equally spaced direction around circle
                    let dir = vec2.fromValues(1, 0);
                    vec2_rotate(dir, dir, Math.PI * 2 * (i / 60));

                    let pos = vec3.fromValues(new_pos[0] + dir[0] * 0.01,0, new_pos[2] + dir[1] * 0.01);
                    let h = world.getHeightAtPointPosition(pos[0], pos[2]);
                    if (h < min_height) {
                        min_height = h;
                        min_direction = dir;
                    }
                }

                let slope = (player_height - min_height) / 0.01;

                if (slope > min_slope) {
                    let a = (slope - min_slope) * 10.0 * delta_time_s;
                    let accel = vec3.fromValues(min_direction[0], 0, min_direction[1]);
                    vec3.scale(accel, accel, a);
                    this.addAcceleration(accel);
                }
            } else {
                //Start Falling
                this.jumping = true;
            }
        }

        vec3.copy(this.position, new_pos);
    }

    public reset(world: World): void {
        this.velocity = this.velocity || vec3.create();
        let pos: vec3 = vec3.clone(world.disks[0].position);
        pos[1] = world.getHeightAtPointPosition(pos[0], pos[2]);
        vec3.copy(this.position, pos);
        vec3.set(this.velocity, 0, 0, 0);
        this.jumping = false;
    }

    public addAcceleration(a: vec3): void {
        if (!this.jumping)
            vec3.add(this.velocity, this.velocity, a);
    }

    public jump(): void {
        if (this.jumping) return;
        let new_vel: vec3 = vec3.clone(this.forward);
        vec3.scale(new_vel, new_vel, JUMP_FORWARD_SPEED);
        vec3.add(new_vel,new_vel, vec3.fromValues(0,JUMP_UP_SPEED,0));
        this.jumping = true;
        vec3.copy(this.velocity,new_vel);
    }

    rotate(angle: number): void {
        vec3.rotateY(this.forward, this.forward, [0, 0, 0], angle * 2);
    }


    public accelerateForward(delta_time_ms: number, speed_factor: number): void {
        let accel = vec3.clone(this.forward);
        vec3.scale(accel, accel, ACCEL_FORWARD * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
    }

    public accelerateBackward(delta_time_ms: number, speed_factor: number): void {
        let accel = vec3.clone(this.forward);
        vec3.negate(accel, accel);
        vec3.scale(accel, accel, ACCEL_FORWARD * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
    }

    public accelerateLeft(delta_time_ms: number, speed_factor: number): void {
        let accel = this.getRight();
        vec3.negate(accel, accel);
        vec3.scale(accel, accel, ACCEL * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
    }

    public accelerateRight(delta_time_ms: number, speed_factor: number): void {
        let accel = this.getRight();
        vec3.scale(accel, accel, ACCEL * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
    }

    public turnLeft(delta_time_ms: number): void {
        let amount = TURNING_DEGREES * delta_time_ms / 1000;
        vec3.rotateY(this.forward, this.forward, this.up, amount);
    }

    public turnRight(delta_time_ms: number): void {
        let amount = TURNING_DEGREES * delta_time_ms / 1000;
        vec3.rotateY(this.forward, this.forward, this.up, -amount);
    }

    static async load(): Promise<void> {
        let mesh = await OBJ.downloadModels(
            [{
                name: 'cbabe',
                obj: this.PLAYER_FILENAME + "_stand.obj",
                mtl: this.PLAYER_FILENAME + ".mtl"
            }]);

        Player.model = new PlayerModel(mesh.cbabe);

        Player.loaded = true;
        return;
    }

}