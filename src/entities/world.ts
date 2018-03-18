import {Disk, Terrain} from "./disk";
import {DiskModel} from "./models/diskmodel";

let OBJ = require("../lib/OBJ/index.js");
import {Mesh} from "../lib/OBJ/index.js";
import {MaterialLibrary} from "../lib/OBJ/index.js";
import {Shader} from "../shader";
import {mat4, vec3} from "gl-matrix";

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

        this.diskAModel = new DiskModel(meshes.DiskA);
        this.diskBModel = new DiskModel(meshes.DiskB);
        this.diskCModel = new DiskModel(meshes.DiskC);
        this.diskDModel = new DiskModel(meshes.DiskD);
        this.diskEModel = new DiskModel(meshes.DiskE);
        this.worldData = worldData;
        this.disks = [];

        this.diskAModel.init(gl);
        this.diskBModel.init(gl);
        this.diskCModel.init(gl);
        this.diskDModel.init(gl);
        this.diskEModel.init(gl);

        const lines = worldData.split('\n');

        if (lines[0].indexOf("version 1") == -1) console.warn("Can't read Disk World File");

        let count = parseInt(lines[2]);
        lines.splice(0, 3);
        for (let i = 0; i < count; i++) {
            let elements = lines[i].split("\t");
            let x = parseFloat(elements[0]);
            let z = parseFloat(elements[1]);
            let radius: number = parseFloat(elements[2]);
            let model: DiskModel = null;
            let terrain: Terrain = null;

            switch (true) {
                case (radius < 8):
                    model = this.diskAModel;
                    terrain = Terrain.RED_ROCK;
                    break;
                case (radius <= 12):
                    model = this.diskBModel;
                    terrain = Terrain.LEAFY;
                    break;
                case(radius <= 20):
                    model = this.diskCModel;
                    terrain = Terrain.ICY;
                    break;
                case (radius <= 30):
                    model = this.diskDModel;
                    terrain = Terrain.SANDY;
                    break;
                case(radius > 30):
                    model = this.diskEModel;
                    terrain = Terrain.GREY_ROCK;
                    break;
            }
            if (!model) throw "No Disk Model found for radius: " + radius;
            this.disks.push(new Disk(model, terrain, radius, x, 0, z));
        }
        this.disks.forEach(disk => {
            disk.init(gl);
        })
    }

    static async loadWorldMeshes(): Promise<WorldMeshes> {
        return OBJ.downloadModels([
            {
                name: 'DiskA',
                obj: "/assets/models/environment/disks/DiskA.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskB',
                obj: "/assets/models/environment/disks/DiskB.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskC',
                obj: "/assets/models/environment/disks/DiskC.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskD',
                obj: "/assets/models/environment/disks/DiskD.obj",
                downloadMtlTextures: false
            },
            {
                name: 'DiskE',
                obj: "/assets/models/environment/disks/DiskE.obj",
                downloadMtlTextures: false
            }]);
    }

    static async loadWorldMat(): Promise<MaterialLibrary> {
        let mat = new MaterialLibrary(require('../../assets/models/environment/disks/Disks.mtl'));
        await OBJ.downloadMtlTextures(mat,
            window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/assets/models/environment/disks/');
        return mat;
    }

    static async loadWorldData(): Promise<string> {
        return require('../../assets/worlds/maps/Basic.txt');
    }

    draw(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {
        this.disks.forEach(disk => {
            disk.draw(gl, view_matrix, projection_matrix);
        })
    }

}