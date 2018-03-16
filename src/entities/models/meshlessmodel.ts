import {vec3} from "gl-matrix";




export class MeshlessModel {
    VAO: WebGLVertexArrayObject;
    data: Float32Array;
    indices: Uint16Array;
    buffer: WebGLBuffer;
    index_buffer: WebGLBuffer;
    initialized:Boolean;
    texture: WebGLTexture;
    stride: number;
    
    constructor(data:Float32Array, indices:Uint16Array) {
        this.data = data;
        this.indices = indices;
        this.stride = 8;
    }

    init(gl: WebGL2RenderingContext) {
        this.VAO = gl.createVertexArray();
        this.buffer = gl.createBuffer();
        this.index_buffer = gl.createBuffer();
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, true, this.stride*4, 0);
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, true, this.stride*4, 12);
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 2, gl.FLOAT, true, this.stride*4, 24);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
        
        let grey = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, grey);
        const pixel = new Uint8Array([220, 220, 220, 255]);  // opaque blue
        gl.texImage2D(gl.TEXTURE_2D, 0,  gl.RGB,1, 1, 0,  gl.RGB, gl.UNSIGNED_BYTE, pixel);
     
        this.texture =  grey;
     
        this.initialized = true;
    }

 
    
    generateArrayBuffer(gl: WebGL2RenderingContext,data:Float32Array, type:GLint, itemsize:number) {
        let buffer:any = <any> gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, type);
        buffer.itemSize = itemsize;
        buffer.numItems = data.length / itemsize;
        return buffer;
    }

    setTexture(texture:WebGLTexture){
        this.texture = texture;
    }
    
    draw(gl:WebGL2RenderingContext){
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT,0);

        gl.bindVertexArray(null);
    }

}