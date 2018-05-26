import * as assert from "assert";
import { global } from "globals";
import { mat4, vec3, vec4 } from "gl-matrix";
import { BasicModel } from "entities/models/basicmodel";

let OBJ = require("lib/OBJ");
import { Material } from "lib/OBJ";

let gl = global.gl;

export class SphereRenderer {
    private loaded: boolean;
    private sphere: BasicModel;
    private mat: Material;

    constructor() {
        gl = global.gl;
        assert(gl);

        this.mat = new Material();
    }

    public draw(color: vec4, model_matrix: mat4, view_matrix: mat4, projection_matrix: mat4): void {
        assert(this.loaded);
        assert(global.renderer);

        this.mat.emissive = [color[0], color[1], color[2]];
        this.mat.ambient = [0, 0, 0];
        this.mat.diffuse = [0, 0, 0];
        this.mat.transparency = [color[3]];

        global.renderer.prepareShader(gl);
        global.renderer.basic_model_shader.setMVPMatrices(model_matrix, view_matrix, projection_matrix);

        this.sphere.activateBuffers(gl);
        global.renderer.basic_model_shader.activateMaterial(gl, this.mat);

        this.sphere.drawActivatedMaterial(gl, 0);
    }

    public async load(): Promise<void> {
        let m = await OBJ.downloadModels([
            {
                name: "sphere",
                obj: "/assets/models/other/sphere.obj",
                downloadMtlTextures: false
            }
        ]);
        this.sphere = new BasicModel(m.sphere);
        this.sphere.init(gl);
        gl.disableVertexAttribArray(1);

        this.loaded = true;
        return;
    }
}
