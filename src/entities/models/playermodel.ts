import {BasicModel} from "./basicmodel";
import {Mesh} from "../../lib/OBJ/index.js";

export class PlayerModel extends BasicModel {

    constructor(mesh: Mesh) {
        super(mesh, 0.25,0.8);
    }

    init(gl: WebGL2RenderingContext) {
        super.init(gl);

        //this.initAllTextures(gl);
        // if (!this.initTexture(gl, 0)) {
        //     console.warn("Player model texture 0 wasn't downloaded")
        // }
    }

}