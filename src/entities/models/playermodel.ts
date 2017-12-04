import {BasicModel} from "./basicmodel";
import {Mesh} from "../../lib/OBJ/index.js";

export class PlayerModel extends BasicModel {

    constructor(mesh: Mesh) {
        super(mesh);
    }

    init(gl: WebGL2RenderingContext) {
        super.init(gl);

        if (!this.initTexture(gl, 0)) {
            console.warn("Player model texture 0 wasn't downloaded")
        }
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

}