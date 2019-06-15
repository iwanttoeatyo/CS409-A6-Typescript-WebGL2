import {Shader} from "./shader";
import {mat4, vec3} from "gl-matrix";

export class DepthShader extends Shader {
    constructor(gl: WebGL2RenderingContext) {
        super(gl, require("shaders/depth_RTT.vert").default, require("shaders/depth_RTT.frag").default);
    }

    public setMVPMatrices(
        model: mat4,
        view: mat4,
        projection: mat4,
        camera_pos: vec3 = vec3.fromValues(0, 0, 0)
    ): void {
        mat4.identity(this.mvp_matrix);
        mat4.mul(this.mvp_matrix, view, model);
        mat4.mul(this.mvp_matrix, projection, this.mvp_matrix);
        //  BasicModel.shader.setMat4(BasicModel.uniforms.view_matrix, view);
        this.setMat4(this.uniforms.model_view_projection_matrix, this.mvp_matrix);
    }
}
