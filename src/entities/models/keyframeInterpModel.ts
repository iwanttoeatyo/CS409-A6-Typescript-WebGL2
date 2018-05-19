import {BasicModel} from "./basicmodel";
import {Mesh} from '../../lib/OBJ/index.js'
import * as assert from "assert";
import {Shader} from "../../shader";

let OBJ = require('../../lib/OBJ/index.js');


export class KeyframeInterpModel extends BasicModel {
    mesh2: Mesh;

    constructor(mesh1: Mesh, mesh2: Mesh, radius: number = 0, half_height: number = 0) {
        assert(mesh1.vertices.size == mesh2.vertices.size, "Meshes must have same order of vertices.");
        super(mesh1, radius, half_height);
        this.mesh2 = mesh2;
    }

    public init(gl: WebGL2RenderingContext) {
        super.init(gl);
        OBJ.initMeshBuffers(gl, this.mesh2);

        gl.enableVertexAttribArray(3);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh2.vertexBuffer);
        gl.vertexAttribPointer(3, 3, gl.FLOAT, false, 0, 0);

        gl.enableVertexAttribArray(4);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh2.normalBuffer);
        gl.vertexAttribPointer(4, 3, gl.FLOAT, false, 0, 0);
    }


    public draw(gl: WebGL2RenderingContext, shader: Shader, tween: number = 0) {
        this.activateBuffers(gl);

        for (let s in this.mesh.materialsByIndex) {
            let i = parseInt(s);

            let is = this.mesh.vertexBuffer.itemSize;
            let submesh = this.mesh.submesh[i];
            this.activateMaterial(gl, shader, i);
            this.setTweenFactor(shader, tween);
            let byteSize = 2;
            gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
        }

        gl.bindVertexArray(null);
    }

    public setTweenFactor(shader: Shader, tween: number): void {
        tween = Math.max(0, Math.min(tween, 1));
        shader.setBoolByName("tween_enabled", true);
        shader.setFloatByName("tween_factor", tween);
    }


}