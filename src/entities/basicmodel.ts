import {vec3} from "gl-matrix";

let OBJ = require('../lib/OBJ/index.js');
import {Mesh} from '../lib/OBJ/index.js'


export class BasicModel {
    VAO: WebGLVertexArrayObject;
    mesh: Mesh;
    initialized:Boolean;
    instanceCount: number;
    instancingOffsets: any;
    instancingColors: any;
    instancingScales: any;
    textures: Array<WebGLTexture>;
    
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
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.normalBuffer);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, true, 0, 0);
        
        gl.enableVertexAttribArray(2);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.textureBuffer);
        gl.vertexAttribPointer(2, 2, gl.FLOAT, true, 0, 0);


        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
        let grey = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, grey);
        const pixel = new Uint8Array([220, 220, 220, 255]);  // opaque blue
        gl.texImage2D(gl.TEXTURE_2D, 0,  gl.RGB,1, 1, 0,  gl.RGB, gl.UNSIGNED_BYTE, pixel);
     
        this.textures = [];
        this.textures.push(grey);
     
        this.initialized = true;
    }

    generateRandomInstancingBuffers(gl: WebGL2RenderingContext, dimensionCount, offset) {
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

        this.instancingScales = this.generateArrayBuffer(gl, new Float32Array(scales), gl.STATIC_DRAW, 3);
        
        this.doBinds(gl);

    }

    generateInstancingOffsetScale (gl:WebGL2RenderingContext, offsets, scales){
        let colors = [];
        let count = offsets.length/3;
        this.instanceCount = count;
        
        for(let i =0; i < count; i++){
            colors.push(1,1,1,1);
        }

        // Setup instancing buffers for position offsets and color
        this.instancingOffsets = this.generateArrayBuffer(gl, new Float32Array(offsets), gl.STATIC_DRAW, 3);

        this.instancingScales = this.generateArrayBuffer(gl, new Float32Array(scales), gl.STATIC_DRAW, 3);
       
        this.doBinds(gl);
    }   
    
    generateArrayBuffer(gl: WebGL2RenderingContext,data:Float32Array, type:GLint, itemsize:number) {
        let buffer:any = <any> gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, type);
        buffer.itemSize = itemsize;
        buffer.numItems = data.length / itemsize;
        return buffer;
    }
    
    doBinds(gl: WebGL2RenderingContext){
        gl.bindVertexArray(this.VAO);
        
        gl.enableVertexAttribArray(3);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instancingOffsets);
        gl.vertexAttribPointer(3, 3, gl.FLOAT, false, 0, 0);
        gl.vertexAttribDivisor(3, 1);

        gl.enableVertexAttribArray(4);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instancingScales);
        gl.vertexAttribPointer(4, 3, gl.FLOAT, true, 0, 0);
        gl.vertexAttribDivisor(4, 1);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
    }

    initTexture(gl: WebGL2RenderingContext,  texture_num: number, flip:boolean = true) {
        if (!this.mesh.materialsByIndex[texture_num]) return false;
        if (this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.complete) {
            this.loadTexture(gl, texture_num, flip);
        } else {
            this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.addEventListener('load',  () => {
                this.loadTexture(gl, texture_num, flip);
            });
        }
        return true
    }


    loadTexture(gl: WebGL2RenderingContext, texture_num: number, flip: boolean = true) {
        let texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if(flip)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.mesh.materialsByIndex[texture_num].mapDiffuse.texture);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        this.textures[texture_num] = texture;
 

    }

    setTexture(texture:WebGLTexture, texture_num: number){
        this.textures[texture_num] = texture;
    }
    
    draw(gl:WebGL2RenderingContext){
        gl.bindVertexArray(this.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);


        this.textures.forEach((texture,index) =>{
            let is = this.mesh.vertexBuffer.itemSize;
            let material = this.mesh.materials[index];
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.drawElements(gl.TRIANGLES, is* material.numItems, gl.UNSIGNED_SHORT,material.offset * is * byteSize);
        });

        gl.bindVertexArray(null);
    }
    
    drawInstanced(gl:WebGL2RenderingContext){
        gl.bindVertexArray(this.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);

     
        this.mesh.materials.forEach((material,index) =>{
            let is = this.mesh.vertexBuffer.itemSize;
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, this.textures[index]);
            gl.drawElementsInstanced(gl.TRIANGLES, is* material.numItems, gl.UNSIGNED_SHORT,material.offset * is * byteSize , this.instanceCount);
        });


    }
}