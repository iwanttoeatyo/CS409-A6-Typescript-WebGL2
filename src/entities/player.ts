import {DiskModel} from "./diskmodel";
import {vec3} from "gl-matrix";
import {PlayerModel} from "./playermodel";
import {Mesh} from "../lib/OBJ/index.js";

const SPEED = 20;

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

    constructor(gl:WebGL2RenderingContext,mesh: Mesh, x:number, y: number, z: number) {
        this.model = new PlayerModel(mesh);
        this.model.init(gl);
        this.position = vec3.fromValues(x, y, z,);
        this.up = vec3.fromValues(0,1,0);
        this.forward = vec3.fromValues(1,0,0);
    }
    
    
    rotate(angle:number){
       vec3.rotateY(this.forward, this.forward, [0,0,0], angle*2);
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
    
    draw(gl:WebGL2RenderingContext){
        this.model.draw(gl);
        
        
    }
}