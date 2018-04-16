import {Disk, Terrain} from "./disk";
import {DiskModel} from "./models/diskmodel";

let OBJ = require("../lib/OBJ/index.js");
import {Mesh} from "../lib/OBJ/index.js";
import {MaterialLibrary} from "../lib/OBJ/index.js";
import {Shader} from "../shader";
import {mat4, vec3} from "gl-matrix";
import {Collision} from "../collision";
import {Random} from "../random";
import {PickupManager} from "../pickupmanager";
import {BasicModel} from "./models/basicmodel";


export interface PickupMeshes {
    Ring: Mesh;
    Rod: Mesh;
}

export interface WorldMeshes {
    DiskA: Mesh;
    DiskB: Mesh;
    DiskC: Mesh;
    DiskD: Mesh;
    DiskE: Mesh;
}

export class World {
    public readonly diskAModel: DiskModel;
    public readonly diskBModel: DiskModel;
    public readonly diskCModel: DiskModel;
    public readonly diskDModel: DiskModel;
    public readonly diskEModel: DiskModel;
    public readonly rod_model: BasicModel;
    public readonly ring_model: BasicModel;
    private readonly world_radius: number;
    public pickup_manager: PickupManager = new PickupManager();

    disks: Array<Disk> = [];

    public constructor(gl: WebGL2RenderingContext, worldData: string, meshes: WorldMeshes, mat: MaterialLibrary, pickup_meshes: PickupMeshes) {
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
        this.rod_model = new BasicModel(pickup_meshes.Rod);
        this.ring_model = new BasicModel(pickup_meshes.Ring);

        this.diskAModel.init(gl);
        this.diskBModel.init(gl);
        this.diskCModel.init(gl);
        this.diskDModel.init(gl);
        this.diskEModel.init(gl);
        this.rod_model.init(gl);
        this.ring_model.init(gl);

        this.pickup_manager.init(this, this.rod_model, this.ring_model);

        const lines = worldData.split('\n');

        if (lines[0].indexOf("version 1") == -1) console.warn("Can't read Disk World File");

        this.world_radius = parseInt(lines[1]);
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
            let pos = vec3.fromValues(disk.position[0], disk.getHeightAtPosition(disk.position[0], disk.position[2]), disk.position[2]);
            this.pickup_manager.addRod(pos, disk.type + 1);
            this.pickup_manager.addRing(pos);
        })
    }

    public update(delta_time_ms: number): void {
        this.pickup_manager.update(delta_time_ms);
    }

    public draw(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4): void {
        this.disks.forEach(disk => {
            disk.draw(gl, view_matrix, projection_matrix);
        })
    }

    public getSpeedFactorAtPosition(x: number, z: number, radius: number = 0): number {
        for (let i = 0; i < this.disks.length; i++) {
            if (Collision.circleIntersection(x, z, radius, this.disks[i].position[0], this.disks[i].position[2], this.disks[i].radius))
                return this.disks[i].getSpeedFactor();
        }

        //No collision with a disk
        return 1.0;
    }

    public getRandomDiskPosition(): vec3 {
        let i = Random.randi(this.disks.length - 1);
        return this.disks[i].position;
    }

    public getHeightAtPointPosition(x: number, z: number): number {
        return this.getHeightAtCirclePosition(x, z, 0);
    }

    public getHeightAtCirclePosition(x: number, z: number, r: number): number {
        for (let i = 0; i < this.disks.length; i++) {
            if (Collision.circleIntersection(x, z, r, this.disks[i].position[0], this.disks[i].position[2], this.disks[i].radius)){
                return this.disks[i].getHeightAtPosition(x, z);
            }
                
        }
        //No collision with a disk
        return 0.0;
    }


    public static async loadPickupMeshes(): Promise<PickupMeshes> {
        return OBJ.downloadModels([
            {
                name: 'Ring',
                obj: "/assets/models/environment/ring/Ring.obj",
                mtl: "/assets/models/environment/ring/Ring.mtl"
            },
            {
                name: 'Rod',
                obj: "/assets/models/environment/rod/Rod.obj",
                mtl: "/assets/models/environment/rod/Rod.mtl"
            }
        ])
    }

    public static async loadWorldMeshes(): Promise<WorldMeshes> {
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

    public static async loadWorldMat(): Promise<MaterialLibrary> {
        let mat = new MaterialLibrary(require('../../assets/models/environment/disks/Disks.mtl'));
        await OBJ.downloadMtlTextures(mat,
            window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/assets/models/environment/disks/');
        return mat;
    }

    public static async loadWorldData(): Promise<string> {
        return require('../../assets/worlds/maps/Basic.txt');
    }

}