import {vec3} from "gl-matrix";
import {PlayerModel} from "./models/playermodel";
import {Mesh} from "../lib/OBJ/index.js";
import {MaterialLibrary} from "../lib/OBJ/index.js";
let OBJ = require("../lib/OBJ/index.js");

const SPEED = 20;

export enum Player_Movement {
    FORWARD,
    BACKWARD,
    LEFT,
    RIGHT
}
export class Player {
    model: PlayerModel;
    position: vec3;
    forward: vec3;
    up: vec3;

    constructor(gl:WebGL2RenderingContext,mesh: Mesh, pos:vec3 | number[]) {
        this.model = new PlayerModel(mesh);
        this.model.init(gl);
        this.position = vec3.fromValues(pos[0],pos[1],pos[2]);
        this.up = vec3.fromValues(0,1,0);
        this.forward = vec3.fromValues(1,0,0);
    }
    
    
    rotate(angle:number):void{
       vec3.rotateY(this.forward, this.forward, [0,0,0], angle*2);
    }

    move( direction:Player_Movement,deltaTime:number):void{
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
    
    draw(gl:WebGL2RenderingContext):void{
        this.model.draw(gl);
        
        
    }
    
    static async loadMesh(){
        return OBJ.downloadModels([
            {
                name: 'cbabe',
                obj: "/assets/models/actors/cbabe/cbabe_stand_n.obj",
                mtl: "/assets/models/actors/cbabe/cbabe.mtl"
            }
        ]);
    }
    
    static load(): Object{
        let a = new Mesh(require('../../assets/models/actors/cbabe/cbabe_stand_n.obj'));
        let b = new MaterialLibrary(require('../../assets/models/actors/cbabe/cbabe.mtl'));
        a.addMaterialLibrary(b);
        let c = require('../../assets/models/actors/cbabe/cbabe_base64.txt');
        let image = new Image();
        image.src = 'data:image/jpeg;base64,' + c;
        a.materialsByIndex[0].mapDiffuse.texture = image;
        return  a;
    }
}