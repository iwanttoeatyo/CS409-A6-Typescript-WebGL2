import {DiskModel} from "./models/diskmodel";
import {mat4, vec3} from "gl-matrix";
import {BasicModel} from "./models/basicmodel";
import {Shader} from "../shader";
import {MeshlessModel} from "./models/meshlessmodel";
import * as Random from "../random";
import {Noisefield} from "../noisefield";
import {version} from "punycode";
import {Entity, Model_Type} from "./entity";

export enum Terrain {
    RED_ROCK = 0,
    LEAFY = 1,
    ICY = 2,
    SANDY = 3,
    GREY_ROCK = 4
}



export class Disk extends Entity{
    initialized : boolean;
    diskModel: DiskModel;
    heightMapModel: MeshlessModel;
    heightMapEntity:Entity;
    heightMap: number[][];
    radius: number;
    type: Terrain;
    heightMapSize: number;
    static height_map_model_gen_count = 0;
    
    constructor(diskModel: DiskModel, type: Terrain, radius: number, x: number, y: number, z: number) {
        super(vec3.fromValues(x,y,z),vec3.fromValues(radius,1,radius), vec3.fromValues(0,0,0), diskModel.mesh.name, Model_Type.BASIC);
        if (!diskModel.initialized) throw "DiskModel was not initialized";
        this.diskModel = diskModel;
        this.radius = radius;
        this.type = type;
        this.initialized = false;
 
    }

    init(gl: WebGL2RenderingContext) {
        this.generateHeightMapModels(gl);
        this.heightMapModel.init(gl);
        let corner = this.radius * Math.SQRT2 / 2;
        let scale =vec3.fromValues(corner * 2 / this.heightMapSize,1,corner * 2 / this.heightMapSize);
        let position = vec3.fromValues(this.position[0], this.position[1] + 0.0001, this.position[2]);
        this.heightMapEntity = new Entity(position, scale,this.forward,this.heightMapModel.name,Model_Type.MESHLESS);
        Disk.height_map_model_gen_count++;
        this.initialized = true;
    }

   
    private generateHeightMapModels(gl: WebGL2RenderingContext) {
        switch (this.type) {
            case Terrain.RED_ROCK:
                this.heightMapSize = 16;
                this.initRedRockHeightMap();
                break;
            case Terrain.LEAFY:
                this.heightMapSize = 32;
                this.initLeafyHeightMap();
                break;
            case Terrain.ICY:
                this.heightMapSize = 48;
                this.initIcyHeightMap();
                break;
            case Terrain.SANDY:
                this.heightMapSize = 64;
                this.initSandyHeightMap();
                break;
            case Terrain.GREY_ROCK:
                this.heightMapSize = 80;
                this.initGreyRockHeightMap();
                break;
        }
        this.generateHeightMapModel(gl);
    }


    private generateHeightMapModel(gl: WebGL2RenderingContext) {
        let vert_buffer_size = (this.heightMapSize + 1) * (this.heightMapSize + 1);
        let verts: Float32Array = new Float32Array(vert_buffer_size * 8);
        let count = 0;
        for (let x = 0; x < this.heightMapSize + 1; x++) {
            for (let z = 0; z < this.heightMapSize + 1; z++) {
                //Position
                verts[count++] = x - (this.heightMapSize / 2);
                verts[count++] = this.heightMap[x][z];
                verts[count++] = z - (this.heightMapSize / 2);

                //Texture coords
                verts[count++] = x / 16.0;
                verts[count++] = z / 16.0;
                //Normals
                verts[count++] = 0;
                verts[count++] = 0;
                verts[count++] = 0;
               

            }
        }

        let index_buffer_size = this.heightMapSize * (this.heightMapSize) * 6;
        let indices = new Uint16Array(index_buffer_size);
        count = 0;
        //Create triangles using indices which reference vertices in the triangle strip
        for (let i = 0; i < vert_buffer_size - (this.heightMapSize + 1); i += (this.heightMapSize + 1)) {
            for (let j = 0; j < this.heightMapSize; j++) {
                const v = i + j;

                //0,1,2
                indices[count++] = v + (this.heightMapSize + 1);
                indices[count++] = v;
                indices[count++] = v + (this.heightMapSize + 1) + 1;

                //2,1,3
                indices[count++] = v + (this.heightMapSize + 1) + 1;
                indices[count++] = v;
                indices[count++] = v + 1;
            }

        }

        //Calculate the normals. For each faces normal we add it to the normals of the vertices used.
        //Normals will be normalized in fragment shader
        for (let i = 0; i < index_buffer_size - 2; i += 3) {
            const i1 = indices[i] * 8;
            const i2 = indices[i + 1] * 8;
            const i3 = indices[i + 2] * 8;

            //Find normal using cross product
            // // (v2 - v1) cross (v3 - v1)
            let norm = new Array(3);

            const ax = verts[i2] - verts[i1],
                ay = verts[i2 + 1] - verts[i1 + 1],
                az = verts[i2 + 2] - verts[i1 + 2];
            const bx = verts[i3] - verts[i1],
                by = verts[i3 + 1] - verts[i1 + 1],
                bz = verts[i3 + 2] - verts[i1 + 2];

            norm[0] = ay * bz - az * by;
            norm[1] = az * bx - ax * bz;
            norm[2] = ax * by - ay * bx;

            //Add to the existing normals
            verts[i1 + 5] += norm[0];
            verts[i1 + 6] += norm[1];
            verts[i1 + 7] += norm[2];
            verts[i2 + 5] += norm[0];
            verts[i2 + 6] += norm[1];
            verts[i2 + 7] += norm[2];
            verts[i3 + 5] += norm[0];
            verts[i3 + 6] += norm[1];
            verts[i3 + 7] += norm[2];
        }

        this.heightMapModel = new MeshlessModel(verts, indices, this.diskModel.mesh.materialsByIndex[2]);

 
    }

    private initRedRockHeightMap() {
        this.heightMap = [];
        let heights = [];
        heights.push(0, 0);
        for (let i = 2; i <= this.heightMapSize / 2; i++) {
            let a = heights[i - 1];
            heights.push(Math.round((a + Math.random() * (3) - 1) * 1e1) / 1e1);
        }

        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = [];
            let max = x > this.heightMapSize / 2 ? this.heightMapSize - x : x;
            for (let z = 0; z <= this.heightMapSize; z++) {
                if (z > this.heightMapSize - max) max--;
                let a = z;
                if (a > max) a = max;
                this.heightMap[x].push(heights[a]);
            }
        }
    }

    private initSandyHeightMap() {
        this.heightMap = [];

        let ns = new Noisefield(16, 8, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF),
            Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF));

        let xz_6 = new Array(this.heightMapSize + 1);
        let pow_divisor = (1.0 - Math.pow(0.5, 6));

        for (let x = 0; x <= this.heightMapSize; x++) {
            let ux = x / this.heightMapSize;
            xz_6[x] = Math.max(Math.pow(ux, 6), Math.pow(1.0 - ux, 6));
        }

        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = [];

            for (let z = 0; z <= this.heightMapSize; z++) {
                let h = ns.perlineNoise(z, x);
                let f = (1 - Math.max(xz_6[x], xz_6[z])) / pow_divisor;
                this.heightMap[x].push(h * f);
            }
        }
    }

    private initGreyRockHeightMap() {
        this.heightMap = [];

        let ns = [
            new Noisefield(32, 1.0, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF),
                Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new Noisefield(16, 7.0, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF),
                Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new Noisefield(8, 5.0, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF),
                Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new Noisefield(4, 3.5, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF),
                Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new Noisefield(2, 2.5, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF),
                Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
        ];

        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = [];

            for (let z = 0; z <= this.heightMapSize; z++) {
                let h = ns[0].perlineNoise(z, x)
                    + ns[1].perlineNoise(z, x)
                    + ns[2].perlineNoise(z, x)
                    + ns[3].perlineNoise(z, x)
                    + ns[4].perlineNoise(z, x);

                let ux = x / this.heightMapSize;
                let uy = z / this.heightMapSize;
                let f = (1 - Math.max(Math.max(Math.pow(ux, 6), Math.pow(1.0 - ux, 6)), Math.max(Math.pow(uy, 6), Math.pow(1.0 - uy, 6)))) / (1.0 - Math.pow(0.5, 6));
                this.heightMap[x].push(h * f);
            }
        }
    }


    private initIcyHeightMap() {
        let points = [];

        let h = this.heightMapSize / 2;
        for (let i = 0; i < 200; i++) {
            let d1 = Math.random() * h;
            let d2 = Math.random() * h;
            let d3 = Math.random() * h;
            let d4 = Math.random() * h;
            let d = Math.max(d1, d2, d3, d4);
            let a = Math.random() * Math.PI * 2;
            let x = (h + Math.cos(a) * d);
            let z = (h + Math.sin(a) * d);
            let m = (h - d) * 0.7;
            let y = Math.random() * (m + m) - m;
            points.push([x, y, z]);
        }
        this.heightMap = new Array(this.heightMapSize + 1);
        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = new Array(this.heightMapSize + 1);
            for (let z = 0; z <= this.heightMapSize; z++) {
                let min = 0, max = 0;
                for (let i = 0; i < points.length; i++) {
                    let x2 = (points[i][0] - x) * (points[i][0] - x);
                    let z2 = (points[i][2] - z) * (points[i][2] - z);
                    let distance = Math.sqrt(x2 + z2);
                    max = Math.max(max, points[i][1] - distance);
                    min = Math.min(min, points[i][1] + distance);
                }
                this.heightMap[x][z] = max + min;
            }
        }
    }

    private initLeafyHeightMap() {
        //Math.random() * (max - min) + min;
        let LL = Math.random() * (2) - 1;
        let LC = Math.random() * (2) - 1;
        let LR = Math.random() * (2) - 1;
        let RI = Math.random() * (2) - 1;
        let RM = Math.random() * (2) - 1;
        let RO = Math.random() * (2) - 1;


        let a1 = Random.randi(7);
        let a2 = Random.randi(7);
        let ARM_COUNT = a1 < a2 ? a1 : a2;
        let ARM_RADIANS = Math.random() * (Math.PI * 2);

        let AI = Math.random();
        let AM = Math.random();
        let AO = Math.random();
        if (Math.random() > 0.5) {
            AI = -AI;
            AM = -AM;
            AO = -AO;
        }


        this.heightMap = new Array(this.heightMapSize + 1);

        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = new Array(this.heightMapSize + 1);
            for (let z = 0; z <= this.heightMapSize; z++) {
                let ux = x / this.heightMapSize;
                let uy = z / this.heightMapSize;
                let x2 = ux * 2 - 1;
                let y2 = uy * 2 - 1;
                let dist = Math.min(Math.sqrt(x2 * x2 + y2 * y2), 1);
                let radians = Math.atan2(y2, x2);

                let ll = Math.pow(ux, 4) * (1 - ux) * 12;
                let lc = (Math.cos(Math.PI * x2) + 1) * 0.5;
                let lr = Math.pow((1 - ux), 4) * ux * 12;
                let lsum = ll * LL + lc * LC + lr * LR;

                let ri = Math.pow(Math.max(1 - dist, 0), 2);
                let rm = Math.sin(Math.PI * Math.min(Math.pow(dist, 0.8) * (4 / 3), 1));
                let ro = Math.max(Math.sin(Math.PI * Math.pow(dist, 1.6)), 0);
                let rsum = ri * RI + rm * RM + ro * RO;

                let ai = (Math.sqrt(dist) - dist) * 4;
                let am = Math.pow(dist, 2) * Math.pow((1 - dist), 2) * 16;
                let ao = (Math.sqrt(1 - dist) - (1 - dist)) * 4;
                let asum = ai * AI + am * AM + ao * AO;

                let non_arm_height = lsum * rsum;
                let arm_radians = radians * ARM_COUNT + ARM_RADIANS;
                let arm_magnitude = (Math.sin(arm_radians) + 1.0) * 0.5;
                let arm_height = arm_magnitude * asum;
                this.heightMap[x][z] = non_arm_height * 5 + arm_height * 3;

            }
        }
    }


    draw(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {
        this.drawDiskModel(gl, view_matrix, projection_matrix);
        this.drawHeightMapModel(gl, view_matrix, projection_matrix);
    }

    drawDiskModel(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {
        let model = mat4.create();
        //Center the squares in the disk
        let pos = vec3.fromValues(this.position[0], this.position[1], this.position[2]);
        mat4.translate(model, model, pos);
        mat4.scale(model, model, vec3.fromValues(this.radius, 1, this.radius));
        BasicModel.setMVPMatrices(model,view_matrix, projection_matrix);
        this.diskModel.draw(gl);
    }

    drawHeightMapModel(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {

        let model = mat4.create();
        //Center the squares in the disk
        let pos = vec3.fromValues(this.position[0], this.position[1], this.position[2]);
        let corner = this.radius * Math.SQRT2 / 2;
        pos[1] += 0.00001;
        mat4.translate(model, model, pos);
        mat4.scale(model, model, vec3.fromValues(corner * 2 / this.heightMapSize, 1, corner * 2 / this.heightMapSize));
        BasicModel.setMVPMatrices(model,view_matrix, projection_matrix);
        this.heightMapModel.draw(gl);
    }
}