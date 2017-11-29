let OBJ = require('../lib/OBJ/index.js');
import {Mesh} from '../lib/OBJ/index.js'


export class BasicModel {
    VAO: WebGLVertexArrayObject;
    mesh: Mesh;
    texture: WebGLTexture;
    initialized:Boolean;
    instanceCount: number;
    instancingOffsets: any;
    instancingColors: any;
    instancingScales: any;
    
    constructor(mesh:Mesh) {
        this.mesh = mesh;
        this.initialized = false;
    }

    init(gl: WebGL2RenderingContext) {
        this.VAO = gl.createVertexArray();
        OBJ.initMeshBuffers(gl, this.mesh);
        gl.bindVertexArray(this.VAO);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.vertexBuffer);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(1);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.textureBuffer);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, 0, 0);


        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);

     
        this.initialized = true;
    }

    generateInstancingBuffers(gl: WebGL2RenderingContext, dimensionCount, offset) {
        var offsets = [];
        var colors = [];
        var scales = [];

        // Generate a three dmensional grid for our instanced positions
        var dim = dimensionCount;
        this.instanceCount = 0;
        for (var x = 0; x < dim; x++) {
                for (var z = 0; z < dim; z++) {
                    let v = z;
                    if(v%2) v =-v;
                    let w = x;
                    if(w%2) w = -w
                    offsets.push(w*offset, Math.random()*3000 -6000 , v * offset);
                    colors.push(0.75 + Math.random()*0.25, 0.75 + Math.random()*0.25, 0.75 + Math.random()*0.25, 1.0);
                    let rand = Math.random();
                    scales.push(rand*5 + 1,  0.001, rand * 5 + 1);
                    this.instanceCount++;
                }
            
        }

        // Setup instancing buffers for position offsets and color
        this.instancingOffsets = this.generateArrayBuffer(gl, new Float32Array(offsets), gl.STATIC_DRAW, 3);
        this.instancingColors = this.generateArrayBuffer(gl, new Float32Array(colors), gl.STATIC_DRAW, 4);
        this.instancingScales = this.generateArrayBuffer(gl, new Float32Array(scales), gl.STATIC_DRAW, 3);


        gl.bindVertexArray(this.VAO);
        
        gl.enableVertexAttribArray(2);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instancingOffsets);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
        gl.vertexAttribDivisor(2, 1);
        
        gl.enableVertexAttribArray(3);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instancingColors);
        gl.vertexAttribPointer(3, 4, gl.FLOAT, true, 0, 0);
        gl.vertexAttribDivisor(3, 1);

        gl.enableVertexAttribArray(4);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instancingScales);
        gl.vertexAttribPointer(4, 3, gl.FLOAT, true, 0, 0);
        gl.vertexAttribDivisor(4, 1);
        
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
    }

    generateArrayBuffer(gl: WebGL2RenderingContext,data:Float32Array, type:GLint, itemsize:number) {
        let buffer:any = <any> gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, type);
        buffer.itemSize = itemsize;
        buffer.numItems = data.length / itemsize;
        return buffer;
    }
}