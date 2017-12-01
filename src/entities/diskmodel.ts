import {BasicModel} from "./basicmodel";
import {Mesh} from "../lib/OBJ/index.js";

export class DiskModel extends BasicModel {

    constructor(mesh: Mesh) {
        super(mesh);
    }

    init(gl: WebGL2RenderingContext) {
        super.init(gl);
   
        if (!this.initTexture(gl, 0)) {
            console.warn("Disk model texture 0 wasn't downloaded")
        }

        if (!this.initTexture(gl,  2)) {
            console.warn("Disk model texture 2 wasn't downloaded")
        }

        let blackTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, blackTexture);
        const pixel = new Uint8Array([0, 0, 0, 255]);  // opaque blue
        gl.texImage2D(gl.TEXTURE_2D, 0,  gl.RGB,1, 1, 0,  gl.RGB, gl.UNSIGNED_BYTE, pixel);
        this.setTexture(blackTexture,1);
    }


}