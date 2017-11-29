import {DiskModel} from "./diskmodel";
import {vec3} from "gl-matrix";

export class Disk {
    model: DiskModel;
    //TODO: Terrain for movespeed
    //terrain:Terrain
    position: vec3;
    radius: number;
    
    constructor(model: DiskModel, radius: number, x:number, y: number, z: number) {
        if(!model.initialized) throw "DiskModel was not initialized";
        this.model = model;
        this.position = vec3.fromValues(x, y, z,);
        this.radius = radius;
    }

}