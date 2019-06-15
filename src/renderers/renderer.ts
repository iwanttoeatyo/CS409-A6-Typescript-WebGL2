import {BasicModel} from "entities/models/basicmodel";
import {Material} from "lib/OBJ/index.js";
import {Entity, Model_Type} from "entities/entity";
import {mat4, quat, vec2, vec3, vec4} from "gl-matrix";
import {Shader} from "shader";
import {MeshlessModel} from "entities/models/meshlessmodel";
import {DepthTexture} from "./depthtexture";
import {ShadowBox} from "./shadowbox";
import {Camera} from "../camera";
import {Pointer} from "../helpers/pointer";
import {BasicModelShader, BasicModelShaderShadow} from "../basicmodelshader";
import {global} from "globals";
import {Collision} from "../helpers/collision";

let BIAS_MATRIX = mat4.fromValues(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0.5, 0.5, 0.5, 1);
let depth_vp: mat4 = mat4.create();
let model_matrix = mat4.create();
let q = quat.create();

export class Renderer {
    private readonly gl: WebGL2RenderingContext;
    private models: Map<string, BasicModel>;
    private meshless_models: Map<string, MeshlessModel>;
    private materials: Map<string, Material>;
    public active_shader: Shader;
    public basic_model_shader: BasicModelShader;
    public basic_model_shader_shadow: BasicModelShaderShadow;
    private entities: Entity[];

    public shadow_enabled: boolean;
    public depth_texture: DepthTexture;
    private shadow_box: ShadowBox;
    private light_view_matrix: mat4;
    private light_direction: vec4;
    private shadow_map_space_matrix: mat4;

    constructor(gl: WebGL2RenderingContext) {
        this.gl = gl;

        this.models = new Map<string, BasicModel>();
        this.materials = new Map<string, Material>();
        this.entities = [];
        this.meshless_models = new Map<string, MeshlessModel>();

        this.basic_model_shader = new BasicModelShader(this.gl);
        this.basic_model_shader_shadow = new BasicModelShaderShadow(this.gl);
        this.active_shader = this.basic_model_shader;
        this.shadow_enabled = true;
    }

    initShadows(light_direction: vec4, camera_pointer: Pointer<Camera>): void {
        this.shadow_map_space_matrix = mat4.create();
        this.light_view_matrix = mat4.create();
        this.light_direction = vec4.normalize(vec4.create(), light_direction);
        this.shadow_box = new ShadowBox(this.gl, this.light_view_matrix, camera_pointer);
        this.depth_texture = new DepthTexture(this.gl);
    }

    enableShadows(): void {
        this.shadow_enabled = true;
    }

    disableShadows(): void {
        this.shadow_enabled = false;
    }

    toggleShadows(): void {
        this.shadow_enabled = !this.shadow_enabled;
    }

    public addBasicModel(model: BasicModel): void {
        if (this.models.get(model.mesh.name) === undefined) {
            this.models.set(model.mesh.name, model);
        }

        for (let key in model.mesh.materialNames) {
            if (model.mesh.materialNames.hasOwnProperty(key))
                if (this.materials.get(model.mesh.materialNames[key]) === undefined) {
                    if (model.mesh.materialsByIndex[key] === undefined) throw "Missing material on model";
                    this.materials.set(model.mesh.materialNames[key], model.mesh.materialsByIndex[key]);
                }
        }
    }

    public addMeshlessModel(model: MeshlessModel): void {
        if (this.meshless_models.get(model.name) === undefined) {
            this.meshless_models.set(model.name, model);
        }

        if (this.materials.get(model.material.name) === undefined) {
            this.materials.set(model.material.name, model.material);
        }
    }

    public addEntityToRenderList(entity: Entity): void {
        let exists = false;
        for (let i = 0; i < this.entities.length; i++) {
            if (entity.id == this.entities[i].id) exists = true;
        }
        if (!exists) this.entities.push(entity);

        if (entity.model_type == Model_Type.BASIC) {
            if (this.models.get(entity.mesh_name) === undefined) {
                console.log("Basic Model Missing: " + entity.mesh_name);
            }
        } else if (entity.model_type == Model_Type.MESHLESS) {
            if (this.meshless_models.get(entity.mesh_name) === undefined) {
                console.log("Meshless Model Missing: " + entity.mesh_name);
            }
        }
    }

    public removeEntity(entity: Entity) {
        for (let i = 0; i < this.entities.length; i++) {
            if (entity.id == this.entities[i].id) this.entities.splice(i, 1);
        }
    }

    public removeAllEntities(): void {
        this.entities = [];
    }

    public removeAllModels(): void {
        this.meshless_models = new Map<string, MeshlessModel>();
        this.models = new Map<string, BasicModel>();
    }

    public beginRender(): void {
        let gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

        if (this.shadow_enabled) {
            this.active_shader = this.basic_model_shader_shadow;
            this.active_shader.prepare();
            this.basic_model_shader_shadow.setMat4(
                this.basic_model_shader_shadow.uniforms.shadow_map_space_matrix,
                this.shadow_map_space_matrix
            );
            this.basic_model_shader_shadow.setShadowMap(this.depth_texture.getTexture());
            this.basic_model_shader_shadow.setFloat(
                this.basic_model_shader_shadow.uniforms.shadow_map_size,
                this.depth_texture.texture_size
            );
        } else {
            this.active_shader = this.basic_model_shader;
            this.active_shader.prepare();
        }
    }

    public beginRenderDepth(): void {
        let gl = this.gl;
        this.depth_texture.startRenderToDepthTexture();
        this.active_shader = this.depth_texture.depth_shader;

        gl.disable(gl.CULL_FACE);
        gl.enable(gl.POLYGON_OFFSET_FILL);
        gl.polygonOffset(global.shadow_factor, global.shadow_offset);
    }

    public endRenderDepth(light_view_matrix: mat4, depth_proj_matrix: mat4): void {
        let gl = this.gl;

        mat4.mul(depth_vp, depth_proj_matrix, light_view_matrix);
        this.shadow_map_space_matrix = mat4.mul(this.shadow_map_space_matrix, BIAS_MATRIX, depth_vp);

        gl.disable(gl.POLYGON_OFFSET_FILL);
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);
    }

    public getDepthProjMatrix(out: mat4): mat4 {
        this.shadow_box.update();

        mat4.identity(out);
        out[0] = 2.0 / this.shadow_box.getWidth();
        out[5] = 2.0 / this.shadow_box.getHeight();
        out[10] = -2.0 / this.shadow_box.getLength();
        out[15] = 1;
        return out;
    }

    public getLightViewMatrix(out: mat4): mat4 {
        this.shadow_box.update();
        let center = this.shadow_box.getCenter();
        vec3.negate(center, center);

        let light_inverse_dir = vec3.fromValues(
            -this.light_direction[0],
            -this.light_direction[1],
            -this.light_direction[2]
        );

        mat4.identity(this.light_view_matrix);
        let pitch = Math.acos(vec2.length([light_inverse_dir[0], light_inverse_dir[2]]));

        mat4.rotateX(this.light_view_matrix, this.light_view_matrix, pitch);

        let yaw = Math.atan2(light_inverse_dir[2], light_inverse_dir[0]);

        yaw = light_inverse_dir[2] > 0 ? yaw - Math.PI : yaw;

        mat4.rotateY(this.light_view_matrix, this.light_view_matrix, yaw + Math.PI / 2);
        mat4.translate(this.light_view_matrix, this.light_view_matrix, center);
        mat4.copy(out, this.light_view_matrix);
        return out;
    }

    public render(view_matrix: mat4, projection_matrix: mat4, camera_position: vec3): void {
        this.renderModels(this.entities, view_matrix, projection_matrix, camera_position);
    }

    public renderCull(
        view_matrix: mat4,
        projection_matrix: mat4,
        camera_position: vec3,
        distance_from_camera: number
    ): void {
        let entities = [];
        for (let entity of this.entities) {
            if (
                Collision.circleIntersection(
                    entity.position[0],
                    entity.position[2],
                    0,
                    camera_position[0],
                    camera_position[2],
                    distance_from_camera
                )
            )
                entities.push(entity);
        }
        this.renderModels(entities, view_matrix, projection_matrix, camera_position);
    }

    private renderModels(entities: Entity[], view_matrix: mat4, projection_matrix: mat4, camera_position: vec3) {
        //For each material draw all of the meshes that use it
        let material_act = 0;
        let buffer_act = 0;
        let draw_calls = 0;
        let entities_to_draw = [];
        for (const material_key of this.materials.keys()) {
            let material = this.materials.get(material_key);
            let activated = false;

            //Loop over models
            for (const model_key of this.models.keys()) {
                let model = this.models.get(model_key);
                //This model doesn't have this material
                if (model.mesh.materialIndices[material_key] === undefined) continue;

                entities_to_draw.length = 0;
                for (let entity of entities) {
                    if (entity.model_type == Model_Type.BASIC && model.mesh.name == entity.mesh_name) {
                        entities_to_draw.push(entity);
                    }
                }

                if (entities_to_draw.length == 0) continue;

                //Find the correct material and activate it
                let mat_id = model.mesh.materialIndices[material_key];

                if (!activated) {
                    this.active_shader.activateMaterial(material);
                    activated = true;
                    material_act++;
                }
                model.activateBuffers(this.gl);
                buffer_act++;

                for (let entity of entities_to_draw) {
                    mat4.identity(model_matrix);
                    quat.identity(q);
                    quat.rotateY(q, q, Math.atan2(entity.forward[0], entity.forward[2]) + model.rotation_offset);
                    mat4.fromRotationTranslationScale(model_matrix, q, entity.position, entity.scalar);
                    this.active_shader.setMVPMatrices(model_matrix, view_matrix, projection_matrix, camera_position);
                    model.drawActivatedMaterial(this.gl, mat_id);
                    draw_calls++;
                }
            }

            //Loop over meshless models
            for (const model_key of this.meshless_models.keys()) {
                let model = this.meshless_models.get(model_key);
                if (model.material.name !== material.name) continue;

                //Find all the things we want to draw with this model
                entities_to_draw.length = 0;
                for (let entity of entities) {
                    if (entity.model_type == Model_Type.MESHLESS && model.name == entity.mesh_name) {
                        entities_to_draw.push(entity);
                    }
                }
                //If things to draw
                if (entities_to_draw.length > 0) {
                    //Activate this model
                    model.activateBuffers(this.gl);
                    buffer_act++;
                    //Activate the material
                    if (!activated) {
                        this.active_shader.activateMaterial(material);
                        activated = true;
                        material_act++;
                    }

                    for (let entity of entities_to_draw) {
                        mat4.identity(model_matrix);
                        quat.identity(q);
                        quat.rotateY(q, q, Math.atan2(entity.forward[0], entity.forward[2]) + model.rotation_offset);
                        mat4.fromRotationTranslationScale(model_matrix, q, entity.position, entity.scalar);
                        this.active_shader.setMVPMatrices(
                            model_matrix,
                            view_matrix,
                            projection_matrix,
                            camera_position
                        );
                        model.drawActivatedMaterial(this.gl);
                        draw_calls++;
                    }
                }
            }
        }
        // console.log("material activations: " + material_act);
        // console.log("buffer activations: " + buffer_act);
        // console.log("draw calls: " + draw_calls);
    }
}
