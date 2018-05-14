import {vec3, vec4} from "gl-matrix";
import {Guid} from "../lib/guid/guid";

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
    up: vec3 = vec3.fromValues(0, 1, 0);

    mesh_name: string;

    model_type: Model_Type;

    constructor(mesh_name: string, model_type: Model_Type,
                pos: vec3 = vec3.fromValues(0, 0, 0),
                forward: vec3 = vec3.fromValues(0, 0, -1),
                scale: vec3 = vec3.fromValues(1, 1, 1)) {

        this.id = Guid.newGuid();

        this.position = vec3.clone(pos);
        this.scalar = vec3.clone(scale);
        this.forward = vec3.clone(forward);
        this.mesh_name = mesh_name;
        this.model_type = model_type;
    }


}