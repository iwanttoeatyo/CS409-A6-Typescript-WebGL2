import {vec3, vec4} from "gl-matrix";
import {Guid} from "../lib/guid";

export enum Model_Type {
    BASIC = 0,
    MESHLESS = 1
}


export class Entity {
    id: string;
    position: vec3;
    scalar: vec3;
    //quaternion: vec4;
    forward: vec3;
    mesh_name: string;
    model_type: Model_Type;

    constructor(mesh_name: string, model_type: Model_Type, pos: vec3,
                forward: vec3 = vec3.fromValues(0, 0, -1),
                scale: vec3 = vec3.fromValues(1, 1, 1)) {
        
        this.id = Guid.newGuid();
        this.position = pos;
        this.scalar = scale;
        this.forward = forward;
        this.mesh_name = mesh_name;
        this.model_type = model_type;
    }
    
    
}