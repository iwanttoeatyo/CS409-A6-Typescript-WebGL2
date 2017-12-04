import {Disk} from "./disk";
import {DiskModel, Terrain} from "./models/diskmodel";

let OBJ = require("../lib/OBJ/index.js");
import {Mesh} from "../lib/OBJ/index.js";
import {MaterialLibrary} from "../lib/OBJ/index.js";

export interface WorldMeshes {
    DiskA: Mesh;
    DiskB: Mesh;
    DiskC: Mesh;
    DiskD: Mesh;
    DiskE: Mesh;
}


export class World {
    diskAModel: DiskModel;
    diskBModel: DiskModel;
    diskCModel: DiskModel;
    diskDModel: DiskModel;
    diskEModel: DiskModel;
    worldData: string;

    disks: Array<Disk>;

    constructor(gl: WebGL2RenderingContext, worldData: string, meshes: WorldMeshes, mat: MaterialLibrary) {
        meshes.DiskA.addMaterialLibrary(mat);
        meshes.DiskB.addMaterialLibrary(mat);
        meshes.DiskC.addMaterialLibrary(mat);
        meshes.DiskD.addMaterialLibrary(mat);
        meshes.DiskE.addMaterialLibrary(mat);
        
        this.diskAModel = new DiskModel(meshes.DiskA, Terrain.RED_ROCK);
        this.diskBModel = new DiskModel(meshes.DiskB, Terrain.LEAFY);
        this.diskCModel = new DiskModel(meshes.DiskC, Terrain.ICY);
        this.diskDModel = new DiskModel(meshes.DiskD, Terrain.SANDY);
        this.diskEModel = new DiskModel(meshes.DiskE, Terrain.GREY_ROCK);
        this.worldData = worldData;
        this.disks = [];


        this.diskAModel.init(gl);
        this.diskBModel.init(gl);
        this.diskCModel.init(gl);
        this.diskDModel.init(gl);
        this.diskEModel.init(gl);


        const lines = worldData.split('\n');

        let size = Object.keys(Terrain).length / 2;
        let offsets = new Array(size);
        let scales = new Array(size);
        for (let i = 0; i < size; i++) {
            offsets[i] = [];
            scales[i] = [];
        }


        if (lines[0].indexOf("version 1") == -1) console.warn("Can't read Disk World File");

        let count = parseInt(lines[2]);
        lines.splice(0, 3);
        for (let i = 0; i < count; i++) {
            let elements = lines[i].split("\t");
            let x = parseFloat(elements[0]);
            let z = parseFloat(elements[1]);
            let radius: number = parseFloat(elements[2]);
            let model: DiskModel = null;

            switch (true) {
                case (radius < 8):
                    model = this.diskAModel;
                    break;
                case (radius <= 12):
                    model = this.diskBModel;
                    break;
                case(radius <= 20):
                    model = this.diskCModel;
                    break;
                case (radius <= 30):
                    model = this.diskDModel;
                    break;
                case(radius > 30):
                    model = this.diskEModel;
                    break;
            }
            if (!model) throw "No Disk Model found for radius: " + radius;

            this.disks.push(new Disk(model, radius, x, 0, z));

            let pos = [x, 0, z];
            offsets[model.terrain].push(pos[0], pos[1], pos[2]);
            scales[model.terrain].push(radius, 1, radius);

        }
        this.diskAModel.generateInstancingOffsetScale(gl, offsets[0], scales[0]);
        this.diskBModel.generateInstancingOffsetScale(gl, offsets[1], scales[1]);
        this.diskCModel.generateInstancingOffsetScale(gl, offsets[2], scales[2]);
        this.diskDModel.generateInstancingOffsetScale(gl, offsets[3], scales[3]);
        this.diskEModel.generateInstancingOffsetScale(gl, offsets[4], scales[4]);

    }


    static load(): Array<Promise<Object>> {

        let p = OBJ.downloadModels([
            {
                name: 'DiskA',
                obj: "/assets/models/environment/disks/DiskASolid.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskB',
                obj: "/assets/models/environment/disks/DiskBSolid.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskC',
                obj: "/assets/models/environment/disks/DiskCSolid.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskD',
                obj: "/assets/models/environment/disks/DiskDSolid.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskE',
                obj: "/assets/models/environment/disks/DiskESolid.obj",
                downloadMtlTextures: false
            }]);
        let b = new MaterialLibrary(require('../../assets/models/environment/disks/Disks.mtl'));
        let a = OBJ.downloadMtlTextures(b, 
            window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/assets/models/environment/disks/');

        return [p,a,Promise.resolve(b)];
    }


    draw(gl: WebGL2RenderingContext) {
        this.diskAModel.drawInstanced(gl);
        this.diskBModel.drawInstanced(gl);
        this.diskCModel.drawInstanced(gl);
        this.diskDModel.drawInstanced(gl);
        this.diskEModel.drawInstanced(gl);
    }
}