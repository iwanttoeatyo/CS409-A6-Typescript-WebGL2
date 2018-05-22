import {BasicModel} from "../entities/models/basicmodel";
import {Material} from '../lib/OBJ/index.js';
import {Entity, Model_Type} from "../entities/entity";
import {mat4, quat, vec3} from "gl-matrix";
import {Shader} from "../shader";
import {MeshlessModel} from "../entities/models/meshlessmodel";
import {global} from "../globals";
import * as assert from "assert";

let gl: WebGL2RenderingContext;


export class Renderer {
    private models: Map<string, BasicModel>;
    private meshless_models: Map<string, MeshlessModel>;
    private materials: Map<string, Material>;
    public shader: Shader;
    private entities: Map<string, Entity>;


    constructor(shader: Shader) {
        this.models = new Map<string, BasicModel>();
        this.materials = new Map<string, Material>();
        this.entities = new Map<string, Entity>();
        this.meshless_models = new Map<string, MeshlessModel>();

        gl = global.gl;
        assert(gl);
        this.shader = shader;
    }

    public setShader(shader: Shader): void {
        this.shader = shader;
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
        if (this.entities.get(entity.id) === undefined) {
            this.entities.set(entity.id, entity);
        }

        if (entity.model_type == Model_Type.BASIC) {
            if (this.models.get(entity.mesh_name) === undefined) {
                console.log("Basic Model Missing: " + entity.mesh_name);
            }
        } else if (entity.model_type == Model_Type.MESHLESS) {
            if (this.meshless_models.get(entity.mesh_name) === undefined) {
                console.log("Meshless Model Missing: " + entity.mesh_name)
            }
        }

    }

    public removeEntity(entity: Entity) {
        this.entities.delete(entity.id);
    }

    public removeAllEntities(): void {
        this.entities = new Map<string, Entity>();
    }

    prepareShader(gl: WebGL2RenderingContext) {
        this.shader.prepare(gl);
    }


    public setMVPMatrices(model: mat4, view: mat4, projection: mat4, camera_pos: vec3 = vec3.fromValues(0, 0, 0)): void {
        this.shader.setMVPMatrices(model, view, projection, camera_pos);
    }

    render(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {
        //sort entities
        this.prepareShader(gl);

        this.renderMeshlessModels(gl, view_matrix, projection_matrix);
        this.renderBasicModels(gl, view_matrix, projection_matrix);

    }

    private renderMeshlessModels(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {
        let mat_list = [];
        for (const [key, model] of this.meshless_models.entries()) {
            if (mat_list.indexOf(model.material.name) < 0) {
                mat_list.push(model.material.name);
            }
        }

        for (let j = 0; j < mat_list.length; j++) {
            //activate mat first
            let activated = false;

            //Loop over all models
            for (const [key, model] of this.meshless_models.entries()) {
                if (model.material.name !== mat_list[j]) continue;

                //Find all the things we want to draw with this model
                let entities_to_draw = [];
                for (const [key, entity] of this.entities.entries()) {
                    if (entity.model_type == Model_Type.MESHLESS && model.name == entity.mesh_name) {
                        entities_to_draw.push(entity);
                    }
                }
                //If things to draw
                if (entities_to_draw.length > 0) {
                    //Activate this model
                    model.activateBuffers(gl);
                    //Activate the material
                    if (!activated) {
                        this.shader.activateMaterial(gl, model.material);
                        activated = true;
                    }

                    for (let i = 0; i < entities_to_draw.length; i++) {//
                        let model_matrix = mat4.create();
                        let q = quat.create();
                        quat.rotateY(q, q, Math.atan2(entities_to_draw[i].forward[0], entities_to_draw[i].forward[2]) + model.rotation_offset);
                        mat4.fromRotationTranslationScale(model_matrix, q, entities_to_draw[i].position, entities_to_draw[i].scalar);
                        //Set matrices in shader
                        this.shader.setMVPMatrices(model_matrix, view_matrix, projection_matrix);
                        model.drawActivatedMaterial(gl);


                    }
                }
            }
        }
    }

    private renderBasicModels(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {

        //Find list of materials that have meshes to draw
        let mat_list = [];
        for (const [key, model] of this.models.entries()) {
            for (const i in model.mesh.materialNames) {
                if (mat_list.indexOf(model.mesh.materialsByIndex[i].name) < 0) {
                    mat_list.push(model.mesh.materialsByIndex[i].name);
                }
            }
        }

        //For each material draw all of the meshes that use it
        for (let j = 0; j < mat_list.length; j++) {
            let activated = false;
            for (const [key, model] of this.models.entries()) {

                //This model doesn't have this material
                if (model.mesh.materialIndices[mat_list[j]] === undefined) continue;

                let entities_to_draw = [];
                for (const [key, entity] of this.entities.entries()) {
                    if (entity.model_type == Model_Type.BASIC && model.mesh.name == entity.mesh_name) {
                        entities_to_draw.push(entity);
                    }
                }
                if (entities_to_draw.length == 0) continue;

                //Find the correct material and activate it
                let mat_id = model.mesh.materialIndices[mat_list[j]];

                if (!activated) {
                    this.shader.activateMaterial(gl, model.mesh.materialsByIndex[mat_id]);
                    activated = true;
                }
                model.activateBuffers(gl);

                for (let i = 0; i < entities_to_draw.length; i++) {
                    let model_matrix = mat4.create();
                    let q = quat.create();
                    quat.rotateY(q, q, Math.atan2(entities_to_draw[i].forward[0], entities_to_draw[i].forward[2]) + model.rotation_offset);
                    mat4.fromRotationTranslationScale(model_matrix, q, vec3.add(vec3.create(), entities_to_draw[i].position, vec3.fromValues(0, model.half_height, 0)), entities_to_draw[i].scalar);
                    //Set matrices in shader
                    this.shader.setMVPMatrices(model_matrix, view_matrix, projection_matrix);
                    //Draw triangle list
                    model.drawActivatedMaterial(gl, mat_id);

                }


            }


        }


    }

}