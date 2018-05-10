import {BasicModel} from "./basicmodel";
import {Mesh} from "../../lib/OBJ/index.js";

export class SkyboxModel extends BasicModel {
    
    constructor(mesh: Mesh) {
        super(mesh);
    }

    // init(gl: WebGL2RenderingContext) {
    //     super.init(gl);
    //
    // 
    //     //Initialize the textures: side tex, side black, top tex
    //     if (!this.initTexture(gl, 0, true)) {
    //         console.warn("Skybox model texture 0 wasn't downloaded")
    //     }
    // }

    
    draw(gl:WebGL2RenderingContext){
        gl.bindVertexArray(this.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);


        this.textures.forEach((texture,index) =>{
            let is = this.mesh.vertexBuffer.itemSize;
            let submesh = this.mesh.submesh[index];
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.drawElements(gl.TRIANGLES, this.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT,submesh.offset * is * byteSize);
        });

        gl.bindVertexArray(null);
    }

}