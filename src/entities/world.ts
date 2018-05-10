import {Disk, Terrain} from "./disk";
import {DiskModel} from "./models/diskmodel";

let OBJ = require("../lib/OBJ/index.js");
import {Mesh} from "../lib/OBJ/index.js";
import {MaterialLibrary} from "../lib/OBJ/index.js";

import {mat4, vec3} from "gl-matrix";
import {Collision} from "../collision";
import {Random} from "../random";

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
    static world_meshes: WorldMeshes;
    static world_mat_lib: MaterialLibrary;
    static loaded: boolean;

    public readonly diskAModel: DiskModel;
    public readonly diskBModel: DiskModel;
    public readonly diskCModel: DiskModel;
    public readonly diskDModel: DiskModel;
    public readonly diskEModel: DiskModel;
    public readonly rod_model: BasicModel;
    public readonly ring_model: BasicModel;

    private world_radius: number;

    public disks: Array<Disk> = [];

    public constructor(gl: WebGL2RenderingContext, worldData: string) {
        if (!World.loaded) throw "World loadAssets must be called before constructor.";

        World.world_meshes.DiskA.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskB.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskC.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskD.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskE.addMaterialLibrary(World.world_mat_lib);

        this.diskAModel = new DiskModel(World.world_meshes.DiskA);
        this.diskBModel = new DiskModel(World.world_meshes.DiskB);
        this.diskCModel = new DiskModel(World.world_meshes.DiskC);
        this.diskDModel = new DiskModel(World.world_meshes.DiskD);
        this.diskEModel = new DiskModel(World.world_meshes.DiskE);


        this.diskAModel.init(gl);
        this.diskBModel.init(gl);
        this.diskCModel.init(gl);
        this.diskDModel.init(gl);
        this.diskEModel.init(gl);

        this.init(gl, worldData);
    }

    public init(gl: WebGL2RenderingContext, world_data: string): void {
        const lines = world_data.split('\n');

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
        });
    }

    public destroy():void{
        delete this.disks;
        
    }
    
    public update(delta_time_ms: number): void {
 
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
            if (Collision.circleIntersection(x, z, r, this.disks[i].position[0], this.disks[i].position[2], this.disks[i].radius)) {
                return this.disks[i].getHeightAtPosition(x, z);
            }

        }
        //No collision with a disk
        return 0.0;
    }

    
    
    public static async loadAssets(): Promise<void> {
        this.world_meshes =  await this.loadWorldMeshes();
        this.world_mat_lib = await this.loadWorldMat();
        this.loaded = true; 
        return;
    }


    private static async loadWorldMeshes(): Promise<WorldMeshes> {
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

    private static async loadWorldMat(): Promise<MaterialLibrary> {
        let mat = new MaterialLibrary(require('../../assets/models/environment/disks/Disks.mtl'));
        await OBJ.downloadMtlTextures(mat,
            window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/assets/models/environment/disks/');
        return mat;
    }


}