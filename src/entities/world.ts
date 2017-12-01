import {Disk} from "./disk";
import {DiskReader} from "./diskreader";
import {DiskModel} from "./diskmodel";
let OBJ = require("../lib/OBJ/index.js");
import {Mesh} from "../lib/OBJ/index.js";

export interface WorldMeshes{
    DiskA:Mesh;
    DiskB:Mesh;
    DiskC:Mesh;
    DiskD:Mesh;
    DiskE:Mesh;
}

export class World{
    diskAModel:DiskModel;
    diskBModel:DiskModel;
    diskCModel:DiskModel;
    diskDModel:DiskModel;
    diskEModel:DiskModel;
    
    disks:Disk;
    
    constructor(gl:WebGL2RenderingContext, worldData:string, meshes:WorldMeshes){
        this.diskAModel = new DiskModel(meshes.DiskA);
        this.diskBModel = new DiskModel(meshes.DiskB);
        this.diskCModel = new DiskModel(meshes.DiskC);
        this.diskDModel = new DiskModel(meshes.DiskD);
        this.diskEModel = new DiskModel(meshes.DiskE);
    }

    
    static load(){
       
       let p = OBJ.downloadModels([
           {
               name: 'DiskA',
               obj: "/assets/models/environment/disks/DiskASolid.obj",
               mtl: "/assets/models/environment/disks/Disks.mtl"
           },
           {
               name: 'DiskB',
               obj: "/assets/models/environment/disks/DiskBSolid.obj",
               mtl: false
           },
           {
               name: 'DiskC',
               obj: "/assets/models/environment/disks/DiskCSolid.obj",
               mtl: false
           },
           {
               name: 'DiskD',
               obj: "/assets/models/environment/disks/DiskDSolid.obj",
               mtl: false
           },
           {
               name: 'DiskE',
               obj: "/assets/models/environment/disks/DiskESolid.obj",
               mtl: false
           }]);
       
       return p;
    }
}