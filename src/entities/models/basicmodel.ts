import { Shader } from "../../shader";
import { Material, Mesh } from "../../lib/OBJ/index.js";
import { global } from "globals";

let OBJ = require("../../lib/OBJ/index.js");

export class BasicModel {
    VAO: WebGLVertexArrayObject;
    mesh: Mesh;
    initialized: Boolean;
    rotation_offset: number;

    public readonly radius: number;
    public readonly half_height: number;

    constructor(mesh: Mesh, radius: number = 0, half_height: number = 0) {
        this.mesh = mesh;
        this.radius = radius;
        this.half_height = half_height;
        this.initialized = false;
        this.rotation_offset = 0;
    }

    init(gl: WebGL2RenderingContext) {
        this.VAO = gl.createVertexArray();
        OBJ.initMeshBuffers(gl, this.mesh);
        gl.bindVertexArray(this.VAO);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.vertexBuffer);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        gl.enableVertexAttribArray(1);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.textureBuffer);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, 0, 0);

        gl.enableVertexAttribArray(2);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.normalBuffer);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
        //
        // gl.disableVertexAttribArray(3);
        // gl.disableVertexAttribArray(4);

        //this.textures = [];

        this.initAllTextures(gl);
        this.initialized = true;
    }

    initTexture(gl: WebGL2RenderingContext, material_texture: any) {
        if (material_texture.image && !material_texture.image.failed && !material_texture.texture) {
            if (material_texture.image.complete) {
                material_texture.texture = this.createTexture(gl, material_texture.image);
            } else {
                //Set to empty texture first because sometimes textures load slow
                material_texture.texture = global.EMPTY_TEXTURE;
                // prettier-ignore
                material_texture.image.addEventListener("load", () => {
                    material_texture.texture = this.createTexture(gl, material_texture.image);
                    delete material_texture.image;
                }, {once: true});
            }
        } else {
            material_texture.texture = global.EMPTY_TEXTURE;
        }
    }

    initAllTextures(gl: WebGL2RenderingContext) {
        for (let i in this.mesh.materialsByIndex) {
            let material = this.mesh.materialsByIndex[i];
            if (material.texturesInitialized) continue;
            if (material.mapDiffuse) this.initTexture(gl, material.mapDiffuse);
            if (material.mapAmbient) this.initTexture(gl, material.mapAmbient);
            if (material.mapEmissive) this.initTexture(gl, material.mapEmissive);
            if (material.mapTransparency) this.initTexture(gl, material.mapTransparency);
            if (material.mapSpecular) this.initTexture(gl, material.mapSpecular);
            if (material.mapSpecularExponent) this.initTexture(gl, material.mapSpecularExponent);
            material.texturesInitialized = true;
        }
    }

    draw(gl: WebGL2RenderingContext, shader: Shader) {
        this.activateBuffers(gl);

        for (let s in this.mesh.materialsByIndex) {
            let i = parseInt(s);
            let item_size = this.mesh.vertexBuffer.itemSize;
            let submesh = this.mesh.submesh[i];
            const BYTE_SIZE = 2;

            this.activateMaterial(shader, i);
            gl.drawElements(
                gl.TRIANGLES,
                item_size * submesh.numItems,
                gl.UNSIGNED_SHORT,
                submesh.offset * item_size * BYTE_SIZE
            );
        }
        gl.bindVertexArray(null);
    }

    activateBuffers(gl: WebGL2RenderingContext) {
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    }

    drawActivatedMaterial(gl: WebGL2RenderingContext, index: number) {
        let is = this.mesh.vertexBuffer.itemSize;
        let submesh = this.mesh.submesh[index];
        let byteSize = 2;
        gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
    }

    public activateMaterial(shader: Shader, index: number): void {
        let material: Material = this.mesh.materialsByIndex[index];
        shader.activateMaterial(material);
    }

    private createTexture(gl: WebGL2RenderingContext, image: HTMLImageElement, flip: boolean = true) {
        let texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if (flip) gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        return texture;
    }
}
