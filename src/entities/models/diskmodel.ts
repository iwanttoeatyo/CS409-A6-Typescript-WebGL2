import {BasicModel} from "./basicmodel";
import {Mesh} from "../../lib/OBJ/index.js";

export class DiskModel extends BasicModel {

    constructor(mesh: Mesh) {
        super(mesh);
    }

    init(gl: WebGL2RenderingContext) {
        super.init(gl);

        //Initialize the textures: side tex, side black, top tex
        //this.initAllTextures(gl);

        let blackTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, blackTexture);
        const pixel = new Uint8Array([0, 0, 0, 255]);  // opaque black
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);
        this.setTexture(blackTexture, 1);


   
    }
    
}