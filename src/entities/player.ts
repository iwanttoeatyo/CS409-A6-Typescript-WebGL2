import {DiskModel} from "./diskmodel";
import {vec3} from "gl-matrix";
import {PlayerModel} from "./playermodel";

const SPEED = 8;

export enum Player_Movement {
    FORWARD,
    BACKWARD,
    LEFT,
    RIGHT
}
export class Player {
    model: PlayerModel  ;
    position: vec3;
    forward: vec3;
    up: vec3;

    constructor(model: PlayerModel, x:number, y: number, z: number) {
        if(!model.initialized) throw "PlayerModel was not initialized";
        this.model = model;
        this.position = vec3.fromValues(x, y, z,);
        this.up = vec3.fromValues(0,1,0);
        this.forward = vec3.fromValues(1,0,0);
    }
    
    
    rotate(angle:number){
       vec3.rotateY(this.forward, this.forward, [0,0,0], angle);
    }

    move( direction:Player_Movement,deltaTime:number){
        let velocity = vec3.create();
        if(direction == Player_Movement.FORWARD){
            vec3.scale(velocity,this.forward,SPEED*deltaTime);
            vec3.add(this.position, this.position, velocity);
        }else if (direction == Player_Movement.BACKWARD){
            vec3.scale(velocity,this.forward,-SPEED*deltaTime*0.5);
            vec3.add(this.position, this.position, velocity);
        }else if(direction == Player_Movement.LEFT){
            let r = vec3.create();
            vec3.copy(r, this.forward);
            vec3.rotateY(r, r, [0,0,0], Math.PI/2);
            vec3.scale(velocity,r,SPEED*deltaTime);
            vec3.add(this.position, this.position, velocity);
        }else if(direction == Player_Movement.RIGHT){
            let r = vec3.create();
            vec3.copy(r, this.forward);
            vec3.rotateY(r, r, [0,0,0], -Math.PI/2);
            vec3.scale(velocity,r,SPEED*deltaTime);
            vec3.add(this.position, this.position, velocity);
        }
        
    }
}