import {BasicModel} from "./basicmodel";

let OBJ = require('../lib/OBJ/index.js');
import {Mesh} from "../lib/OBJ/index.js";
import {SkyboxModel} from "./skyboxModel";

export class Skybox {
    model: SkyboxModel;

    constructor(gl: WebGL2RenderingContext, mesh: Mesh) {
        this.model = new SkyboxModel(mesh);
        this.model.init(gl)
    }


    draw(gl: WebGL2RenderingContext) {
     //   this.model.draw(gl);

        gl.bindVertexArray(this.model.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.model.mesh.indexBuffer);


        this.model.textures.forEach((texture,index) =>{
            let is = this.model.mesh.vertexBuffer.itemSize;
            let material = this.model.mesh.materials[index];
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.drawElements(gl.TRIANGLES, this.model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT,material.offset * is * byteSize);
        });

        gl.bindVertexArray(null);
        
    }


    static load(): Promise<Object> {
        return OBJ.downloadModels([
            {
                name: 'Skybox',
                obj: "/assets/models/environment/skybox/Skybox.obj",
                mtl: "/assets/models/environment/skybox/Skybox.mtl"
            }
        ]);
    }
}