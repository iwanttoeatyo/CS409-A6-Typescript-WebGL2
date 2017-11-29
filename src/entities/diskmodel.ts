import {BasicModel} from "./basicmodel";
import {Mesh} from "../lib/OBJ/index.js";

export class DiskModel extends BasicModel {
    texture_side: WebGLTexture;

    constructor(mesh: Mesh) {
        super(mesh);
    }

    init(gl: WebGL2RenderingContext) {
        super.init(gl);
        this.texture = gl.createTexture();
        this.texture_side = gl.createTexture();

        if (!this.initTexture(gl, this.texture, 0)) {
            console.warn("Disk model texture 0 wasn't downloaded")
        }

        if (!this.initTexture(gl, this.texture_side, 2)) {
            console.warn("Disk model texture 2 wasn't downloaded")
        }
    }

    initTexture(gl: WebGL2RenderingContext, texture: WebGLTexture, texture_num: number) {
        if (!this.mesh.materialsByIndex[texture_num]) return false;
        if (this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.complete) {
            this.loadTexture(gl, texture, texture_num);
        } else {
            this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.addEventListener('load',  () => {
                this.loadTexture(gl, texture, texture_num);
            });
        }
        return true
    }

    
    
    loadTexture(gl: WebGL2RenderingContext, texture: WebGLTexture, texture_num: number) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.mesh.materialsByIndex[texture_num].mapDiffuse.texture);
        gl.generateMipmap(gl.TEXTURE_2D);
    }
}