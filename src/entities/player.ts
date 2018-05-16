import {mat4, quat, vec2, vec3} from "gl-matrix";

import {Player_State, PlayerModel} from "./models/playermodel";
import {Entity, Model_Type} from "./entity";
import {World} from "./world";
import {MathHelper} from "../mathhelper";
import vec2_rotate = MathHelper.vec2_rotate;
import * as assert from "assert";


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

    public model: PlayerModel;
    public loaded: boolean;


    private velocity: vec3;
    private jumping: boolean;


    constructor() {
        super("player", Model_Type.ANIMATED);
    }
    

    
    public draw(gl:WebGL2RenderingContext, view_matrix:mat4, proj_matrix:mat4, camera_pos:vec3){
        assert(this.loaded);
        
        let model_matrix = mat4.create();
        let q = quat.create();
        quat.rotateY(q, q, Math.atan2(this.forward[0], this.forward[2]) - Math.PI/2);
        mat4.fromRotationTranslation(model_matrix, q, vec3.add(vec3.create(),this.position,vec3.fromValues(0, 0.8,0)));
        
        this.model.draw(gl,model_matrix,view_matrix,proj_matrix,camera_pos);
    }
    
    public updateAnimation(delta_ms:number):void{
        this.model.updateAnimation(delta_ms);
    }
    
    public update(world: World, delta_time_ms: number): void {
        let delta_time_s = delta_time_ms / 1000;

        let old_pos = vec3.clone(this.position);
        let new_pos = vec3.clone(this.velocity);
        vec3.scaleAndAdd(new_pos, old_pos, new_pos, delta_time_s);

        let height = world.getHeightAtCirclePosition(new_pos[0], new_pos[2], this.model.radius);

        if (this.jumping) {

            let gravity = vec3.fromValues(0, -9.8, 0);
            vec3.scaleAndAdd(this.velocity, this.velocity, gravity, delta_time_s);

            if (world.isCylinderCollisionWithDisk(vec3.add(vec3.create(), new_pos, PLAYER_OFFSET), this.model.radius, this.model.half_height)) {

                if (world.isCylinderCollisionWithDisk(vec3.add(vec3.create(), old_pos, PLAYER_OFFSET), this.model.radius, this.model.half_height)) {
                    //Collided from above disk. stop falling
                    this.jumping = false;
                    this.model.setState(Player_State.Standing);
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

            if (world.isOnDisk(new_pos[0], new_pos[2], this.model.radius)) {
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
                this.model.setState(Player_State.Falling);
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
        vec3.scaleAndAdd(this.velocity,vec3.fromValues(0,JUMP_UP_SPEED,0), this.forward,JUMP_FORWARD_SPEED);
        this.model.setState(Player_State.Jumping);        
        this.jumping = true;
    }

    rotate(angle: number): void {
        vec3.rotateY(this.forward, this.forward, [0, 0, 0], angle * 2);
    }


    public accelerateForward(delta_time_ms: number, speed_factor: number): void {
        let accel = vec3.clone(this.forward);
        vec3.scale(accel, accel, ACCEL_FORWARD * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
        this.transitionAnimationTo(Player_State.Running);
    }

    public accelerateBackward(delta_time_ms: number, speed_factor: number): void {
        let accel = vec3.clone(this.forward);
        vec3.negate(accel, accel);
        vec3.scale(accel, accel, ACCEL_FORWARD * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
        this.transitionAnimationTo(Player_State.Reversing);
    }

    public accelerateLeft(delta_time_ms: number, speed_factor: number): void {
        let accel = this.getRight();
        vec3.negate(accel, accel);
        vec3.scale(accel, accel, ACCEL * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
        this.transitionAnimationTo(Player_State.Strafing);
    }

    public accelerateRight(delta_time_ms: number, speed_factor: number): void {
        let accel = this.getRight();
        vec3.scale(accel, accel, ACCEL * delta_time_ms / 1000 * speed_factor);
        this.addAcceleration(accel);
        this.transitionAnimationTo(Player_State.Strafing);
    }

    public turnLeft(delta_time_ms: number): void {
        let amount = TURNING_DEGREES * delta_time_ms / 1000;
        vec3.rotateY(this.forward, this.forward, this.up, amount);
    }

    public turnRight(delta_time_ms: number): void {
        let amount = TURNING_DEGREES * delta_time_ms / 1000;
        vec3.rotateY(this.forward, this.forward, this.up, -amount);
    }
    
    public transitionAnimationTo(state:Player_State): void{
        if(!this.jumping)
            this.model.setState(state);
    }

    public async loadAssets(): Promise<void> {
        this.model = new PlayerModel();
        await this.model.load();
        this.loaded = true;
        return;
    }

}