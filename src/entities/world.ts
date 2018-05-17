import {Disk, Terrain} from "./disk";

let OBJ = require("../lib/OBJ/index.js");
import {Mesh} from "../lib/OBJ/index.js";
import {MaterialLibrary} from "../lib/OBJ/index.js";

import {mat4, vec3} from "gl-matrix";
import {Collision} from "../collision";
import {Random} from "../random";

import {BasicModel} from "./models/basicmodel";


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

    public readonly diskA_model: BasicModel;
    public readonly diskB_model: BasicModel;
    public readonly diskC_model: BasicModel;
    public readonly diskD_model: BasicModel;
    public readonly diskE_model: BasicModel;


    private world_radius: number;

    public disks: Array<Disk> = [];

    public constructor(gl: WebGL2RenderingContext, worldData: string) {
        if (!World.loaded) throw "World loadAssets must be called before constructor.";

        World.world_meshes.DiskA.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskB.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskC.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskD.addMaterialLibrary(World.world_mat_lib);
        World.world_meshes.DiskE.addMaterialLibrary(World.world_mat_lib);

        this.diskA_model = new BasicModel(World.world_meshes.DiskA);
        this.diskB_model = new BasicModel(World.world_meshes.DiskB);
        this.diskC_model = new BasicModel(World.world_meshes.DiskC);
        this.diskD_model = new BasicModel(World.world_meshes.DiskD);
        this.diskE_model = new BasicModel(World.world_meshes.DiskE);

        this.diskA_model.init(gl);
        this.diskB_model.init(gl);
        this.diskC_model.init(gl);
        this.diskD_model.init(gl);
        this.diskE_model.init(gl);

        this.init(gl, worldData);
    }

    public init(gl: WebGL2RenderingContext, world_data: string): void {
        let w = Date.now();
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
            let model: BasicModel = null;
            let terrain: Terrain = null;

            switch (true) {
                case (radius < 8):
                    model = this.diskA_model;
                    terrain = Terrain.RED_ROCK;
                    break;
                case (radius <= 12):
                    model = this.diskB_model;
                    terrain = Terrain.LEAFY;
                    break;
                case(radius <= 20):
                    model = this.diskC_model;
                    terrain = Terrain.ICY;
                    break;
                case (radius <= 30):
                    model = this.diskD_model;
                    terrain = Terrain.SANDY;
                    break;
                case(radius > 30):
                    model = this.diskE_model;
                    terrain = Terrain.GREY_ROCK;
                    break;
            }
            if (!model) throw "No Disk Model found for radius: " + radius;
            let d = new Disk(model, terrain, radius, x, 0, z);
            d.init(gl);
            this.disks.push(d);
        }
        console.log("world gen time: " + (Date.now() - w) / 1000 + "s");
    }

    public destroy(): void {
        this.disks = [];

    }

    public update(delta_time_ms: number): void {

    }

    // public draw(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4): void {
    //     this.disks.forEach(disk => {
    //         disk.draw(gl, view_matrix, projection_matrix);
    //     })
    // }

    public getSpeedFactorAtPosition(x: number, z: number, radius: number = 0): number {
        for (let i = 0; i < this.disks.length; i++) {
            if (Collision.circleIntersection(x, z, radius, this.disks[i].position[0], this.disks[i].position[2], this.disks[i].radius))
                return this.disks[i].getSpeedFactor();
        }

        //No collision with a disk
        return 1.0;
    }

    public getAccelFactorAtPosition(x: number, z: number, radius: number = 0): number {
        for (let i = 0; i < this.disks.length; i++) {
            if (Collision.circleIntersection(x, z, radius, this.disks[i].position[0], this.disks[i].position[2], this.disks[i].radius))
                return this.disks[i].getAccelFactor();
        }

        //No collision with a disk
        return 1.0;
    }

    public getRandomDiskPosition(): vec3 {
        if (this.disks.length === 0) throw "There are no disks???";
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

    public getSlopeFactorAtPosition(x: number, z: number): number {
        for (let disk of this.disks) {
            if (Collision.circleIntersection(x, z, 0, disk.position[0], disk.position[2], disk.radius))
                return disk.getSlopeFactor();
        }
        return 0.0001;
    }

    public getFrictionAtPosition(x: number, z: number): number {
        for (let disk of this.disks) {
            if (Collision.circleIntersection(x, z, 0, disk.position[0], disk.position[2], disk.radius))
                return disk.getFriction();
        }
        return 0.0001;
    }

    public isOnDisk(x: number, z: number, r: number = 0): boolean {
        for (let disk of this.disks) {
            if (Collision.circleIntersection(x, z, r, disk.position[0], disk.position[2], disk.radius))
                return true;
        }
    }

    public isCylinderCollisionWithDisk(pos: vec3, r: number, half_height: number): boolean {
        for (let disk of this.disks) {
            if (Collision.circleIntersection(pos[0], pos[2], r, disk.position[0], disk.position[2], disk.radius)) {
                let height = this.getHeightAtPointPosition(pos[0], pos[2]);

                //If position is below heightmap it is inside
                if (pos[1] - half_height <= height) {
                    return true;
                }
            }
        }
        return false;
    }


    public static async loadAssets(): Promise<void> {
        this.world_meshes = await this.loadWorldMeshes();
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