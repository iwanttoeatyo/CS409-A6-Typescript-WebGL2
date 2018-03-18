import {BasicModel} from "./entities/models/basicmodel";
import {Material} from './lib/OBJ/index.js';
import {Mesh} from './lib/OBJ/index.js';
import {Entity, Model_Type} from "./entities/entity";
import {mat4, vec3} from "gl-matrix";
import {BasicModelShader} from "./basicmodelshader";
import {MeshlessModel} from "./entities/models/meshlessmodel";
import {World} from "./entities/world";

export class Renderer {
    models: Map<string, BasicModel>;
    meshless_models: Map<string, MeshlessModel>;
    materials: Map<string, Material>;
    basicModelShader: BasicModelShader;
    entities: Map<string, Entity>;

    constructor() {
        this.models = new Map<string, BasicModel>();
        this.materials = new Map<string, Material>();
        this.entities = new Map<string, Entity>();
        this.meshless_models = new Map<string, MeshlessModel>();
    }

    init(shader: BasicModelShader) {
        this.basicModelShader = shader;


    }

    addBasicModel(model: BasicModel) {
        if (this.models.get(model.mesh.name) === undefined) {
            this.models.set(model.mesh.name, model);
        }

        for (var key in model.mesh.materialNames) {
            if (this.materials.get(model.mesh.materialNames[key]) === undefined) {
                this.materials.set(model.mesh.materialNames[key], model.mesh.materialsByIndex[key]);
            }
        }
    }

    addMeshlessModel(model: MeshlessModel) {
        if (this.meshless_models.get(model.name) === undefined) {
            this.meshless_models.set(model.name, model);
        }

        if (this.materials.get(model.material.name) === undefined) {
            this.materials.set(model.material.name, model.material);
        }

    }

    addEntityToRenderList(entity: Entity) {
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


    prepareBasicModelShader(gl: WebGL2RenderingContext) {
        this.basicModelShader.use();
        gl.enable(gl.DEPTH_TEST);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE3);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE4);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE5);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.emptyTexture);

        this.basicModelShader.setBool(this.basicModelShader.uniforms.tween_enabled, false);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_transparency_texture, 0);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_emission_texture, 1);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_ambient_texture, 2);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_diffuse_texture, 3);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_specular_texture, 4);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_shininess_texture, 5);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_transparency_channel, 0);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_shininess_channel, 0);
    }

    render(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {
        //sort entities
        this.prepareBasicModelShader(gl);

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
                        model.activateMaterial(gl);
                        activated = true;
                    }

                    for (let i = 0; i < entities_to_draw.length; i++) {//
                        let model_matrix = mat4.create();
                        //Move player model to its position
                        mat4.translate(model_matrix, model_matrix, entities_to_draw[i].position);
                        //Rotate model to face away from camera
                        mat4.rotateY(model_matrix, model_matrix, Math.atan2(entities_to_draw[i].forward[0] + model.rotation_offset[0], entities_to_draw[i].forward[2]) + model.rotation_offset[2]);
                        //Scale
                        mat4.scale(model_matrix, model_matrix, entities_to_draw[i].scalar);
                        //Set matrices in shader
                        BasicModel.setMVPMatrices(model_matrix, view_matrix, projection_matrix);
                        model.drawActivatedMaterial(gl);
             

                    }
                }
            }
        }
    }

    private renderBasicModels(gl: WebGL2RenderingContext, view_matrix: mat4, projection_matrix: mat4) {

        let mat_list = [];
        for (const [key, model] of this.models.entries()) {
            for (const i in model.mesh.materialNames) {
                if (mat_list.indexOf(model.mesh.materialsByIndex[i].name) < 0) {
                    mat_list.push(model.mesh.materialsByIndex[i].name);
                }
            }
        }
        for (let j = 0; j < mat_list.length; j++) {
             for (const [key, model] of this.models.entries()) {
                let skip = true;
                let mat_id = 0;
                 for (const i in model.mesh.materialNames) {
                    if (model.mesh.materialsByIndex[i] && model.mesh.materialsByIndex[i].name == mat_list[j]) {
                        model.activateMaterial(gl, Number(i));
                        mat_id = Number(i);
                        skip = false;
                        break;
                    }
                }
                if (skip) continue;

                let entities_to_draw = [];
                for (const [key, entity] of this.entities.entries()) {
                    if (entity.model_type == Model_Type.BASIC && model.mesh.name == entity.mesh_name) {
                        entities_to_draw.push(entity);
                    }
                }
                if (entities_to_draw.length > 0) {
                    model.activateBuffers(gl);
                    
                    for (let i = 0; i < entities_to_draw.length; i++) {
                        let model_matrix = mat4.create();
                        //Move player model to its position
                        mat4.translate(model_matrix, model_matrix, entities_to_draw[i].position);
                        //Rotate model to face away from camera
                        mat4.rotateY(model_matrix, model_matrix, Math.atan2(entities_to_draw[i].forward[0] + model.rotation_offset[0], entities_to_draw[i].forward[2]) + model.rotation_offset[2]);
                        //Scale
                        mat4.scale(model_matrix, model_matrix, entities_to_draw[i].scalar);
                        //Set matrices in shader
                        BasicModel.setMVPMatrices(model_matrix, view_matrix, projection_matrix);
                        //Draw triangle list
                        model.drawActivatedMaterial(gl, mat_id);
                   
                    }
                }

            }


        }


       
    }

}