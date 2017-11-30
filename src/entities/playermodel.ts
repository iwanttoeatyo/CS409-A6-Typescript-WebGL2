import {BasicModel} from "./basicmodel";
import {Mesh} from "../lib/OBJ/index.js";

export class PlayerModel extends BasicModel {

    constructor(mesh: Mesh) {
        super(mesh);
    }

    init(gl: WebGL2RenderingContext) {
        super.init(gl);

        if (!this.initTexture(gl, 0)) {
            console.warn("Disk model texture 0 wasn't downloaded")
        }
    }


}