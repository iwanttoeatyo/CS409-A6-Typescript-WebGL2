import {BasicModel} from "./basicmodel";
import {Mesh} from "../lib/OBJ/index.js";




export class SkyboxModel extends BasicModel {


    constructor(mesh: Mesh) {
        super(mesh);
    }

    init(gl: WebGL2RenderingContext) {
        super.init(gl);

        //Initialize the textures: side tex, side black, top tex
        if (!this.initTexture(gl, 0, true)) {
            console.warn("Disk model texture 0 wasn't downloaded")
        }
    }


}