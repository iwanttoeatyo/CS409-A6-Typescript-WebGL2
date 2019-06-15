import {Shader, Uniforms} from "./shader";
import {Material} from "./lib/OBJ/";
import {global} from "./globals";

interface Light {
    is_enabled: WebGLUniformLocation;
    position: WebGLUniformLocation;
    ambient: WebGLUniformLocation;
    diffuse: WebGLUniformLocation;
    specular: WebGLUniformLocation;
    attenuation: WebGLUniformLocation;
}

class BasicModelUniforms extends Uniforms {
    tween_enabled: WebGLUniformLocation;
    tween_factor: WebGLUniformLocation;
    material_transparency_texture: WebGLUniformLocation;
    material_emission_texture: WebGLUniformLocation;
    material_ambient_texture: WebGLUniformLocation;
    material_diffuse_texture: WebGLUniformLocation;
    material_specular_texture: WebGLUniformLocation;
    material_shininess_texture: WebGLUniformLocation;
    material_transparency_channel: WebGLUniformLocation;
    material_shininess_channel: WebGLUniformLocation;
    material_transparency: WebGLUniformLocation;
    material_ambient_colour: WebGLUniformLocation;
    material_diffuse_colour: WebGLUniformLocation;
    material_specular_colour: WebGLUniformLocation;
    material_emissive_colour: WebGLUniformLocation;
    material_shininess: WebGLUniformLocation;
    material_is_texture_active: WebGLUniformLocation;

    lights: Light[] = new Array<Light>(8).fill({} as Light);
}

class BasicModelShadowUniforms extends BasicModelUniforms {
    shadow_map: WebGLUniformLocation;
    shadow_map_space_matrix: WebGLUniformLocation;
    shadow_distance: WebGLUniformLocation;
    shadow_map_size: WebGLUniformLocation;
}

export class BasicModelShader extends Shader {
    public uniforms: BasicModelUniforms;

    constructor(
        gl: WebGL2RenderingContext,
        vertexSourceCode: string = require("shaders/basicmodel.vert").default,
        fragmentSourceCode: string = require("shaders/basicmodelmanylights.frag").default
    ) {
        super(gl, vertexSourceCode, fragmentSourceCode);
        this.gl.useProgram(this.ID);

        this.uniforms = new BasicModelShadowUniforms();
        this.uniforms.model_matrix = this.getUniformLocation("model_matrix");
        this.uniforms.view_matrix = this.getUniformLocation("view_matrix");
        this.uniforms.model_view_projection_matrix = this.getUniformLocation("model_view_projection_matrix");
        this.uniforms.camera_pos = this.getUniformLocation("camera_pos");
        this.uniforms.tween_enabled = this.getUniformLocation("tween_enabled");
        this.uniforms.tween_factor = this.getUniformLocation("tween_factor");
        this.uniforms.material_transparency_texture = this.getUniformLocation("material.transparency_texture");
        this.uniforms.material_emission_texture = this.getUniformLocation("material.emission_texture");
        this.uniforms.material_ambient_texture = this.getUniformLocation("material.ambient_texture");
        this.uniforms.material_diffuse_texture = this.getUniformLocation("material.diffuse_texture");
        this.uniforms.material_specular_texture = this.getUniformLocation("material.specular_texture");
        this.uniforms.material_shininess_texture = this.getUniformLocation("material.shininess_texture");
        this.uniforms.material_transparency_channel = this.getUniformLocation("material.transparency_channel");
        this.uniforms.material_shininess_channel = this.getUniformLocation("material.shininess_channel");
        this.uniforms.material_transparency = this.getUniformLocation("material.transparency");
        this.uniforms.material_ambient_colour = this.getUniformLocation("material.ambient_colour");
        this.uniforms.material_diffuse_colour = this.getUniformLocation("material.diffuse_colour");
        this.uniforms.material_specular_colour = this.getUniformLocation("material.specular_colour");
        this.uniforms.material_emissive_colour = this.getUniformLocation("material.emission_colour");
        this.uniforms.material_shininess = this.getUniformLocation("material.shininess");
        this.uniforms.material_is_texture_active = this.getUniformLocation("material.is_texture_active");

        for (let i = 0; i < this.uniforms.lights.length; i++) {
            this.uniforms.lights[i].is_enabled = this.getUniformLocation(`lights[${i}].is_enabled`);
            this.uniforms.lights[i].position = this.getUniformLocation(`lights[${i}].position`);
            this.uniforms.lights[i].ambient = this.getUniformLocation(`lights[${i}].ambient`);
            this.uniforms.lights[i].diffuse = this.getUniformLocation(`lights[${i}].diffuse`);
            this.uniforms.lights[i].specular = this.getUniformLocation(`lights[${i}].specular`);
            this.uniforms.lights[i].attenuation = this.getUniformLocation(`lights[${i}].attenuation`);
        }

        gl.bindAttribLocation(this.ID, 0, "a_vertex");
        gl.bindAttribLocation(this.ID, 1, "a_tex_coord");
        gl.bindAttribLocation(this.ID, 2, "a_normal");
        gl.bindAttribLocation(this.ID, 3, "a_vertex1");
        gl.bindAttribLocation(this.ID, 4, "a_normal1");

        this.setInt(this.uniforms.material_transparency_texture, 0);
        this.setInt(this.uniforms.material_emission_texture, 1);
        this.setInt(this.uniforms.material_ambient_texture, 2);
        this.setInt(this.uniforms.material_diffuse_texture, 3);
        this.setInt(this.uniforms.material_specular_texture, 4);
        this.setInt(this.uniforms.material_shininess_texture, 5);
    }

    prepare(): void {
        this.gl.useProgram(this.ID);
        let gl = this.gl;
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE3);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE4);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        gl.activeTexture(gl.TEXTURE5);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
    }

    activateMaterial(material: Material): void {
        let gl = this.gl;
        if (material.isTextureActive[0]) {
            gl.activeTexture(gl.TEXTURE0); // transparency
            gl.bindTexture(gl.TEXTURE_2D, material.mapTransparency.texture);
        }
        if (material.isTextureActive[1]) {
            gl.activeTexture(gl.TEXTURE1); // emission
            gl.bindTexture(gl.TEXTURE_2D, material.mapEmissive.texture);
        }
        if (material.isTextureActive[2]) {
            gl.activeTexture(gl.TEXTURE2); // ambient
            gl.bindTexture(gl.TEXTURE_2D, material.mapAmbient.texture);
        }
        if (material.isTextureActive[3]) {
            gl.activeTexture(gl.TEXTURE3); // diffuse
            gl.bindTexture(gl.TEXTURE_2D, material.mapDiffuse.texture);
        }
        if (material.isTextureActive[4]) {
            gl.activeTexture(gl.TEXTURE4); // specular
            gl.bindTexture(gl.TEXTURE_2D, material.mapSpecular.texture);
        }
        if (material.isTextureActive[5]) {
            gl.activeTexture(gl.TEXTURE5); // shininess
            gl.bindTexture(gl.TEXTURE_2D, material.mapSpecularExponent.texture);
        }

        this.setFloat(this.uniforms.material_transparency, material.transparency);
        this.setVec3(this.uniforms.material_ambient_colour, material.ambient);
        this.setVec3(this.uniforms.material_diffuse_colour, material.diffuse);
        this.setVec3(this.uniforms.material_specular_colour, material.specular);
        this.setVec3(this.uniforms.material_emissive_colour, material.emissive);
        this.setInt(this.uniforms.material_transparency_channel, 0);
        this.setInt(this.uniforms.material_shininess_channel, 0);
        this.setFloat(this.uniforms.material_shininess, material.specularExponent);
        this.setIntV(this.uniforms.material_is_texture_active, material.isTextureActive);
    }
}

export class BasicModelShaderShadow extends BasicModelShader {
    public uniforms: BasicModelShadowUniforms;

    constructor(gl: WebGL2RenderingContext) {
        super(gl, require("shaders/basicmodelshadow.vert").default, require("shaders/basicmodelmanylights1shadow.frag").default);

        this.uniforms.shadow_map = this.getUniformLocation("shadow_map");
        this.uniforms.shadow_distance = this.getUniformLocation("shadow_distance");
        this.uniforms.shadow_map_size = this.getUniformLocation("shadow_map_size");
        this.uniforms.shadow_map_space_matrix = this.getUniformLocation("shadow_map_space_matrix");
    }

    public setShadowMap(shadow_map: WebGLTexture): void {
        let gl = this.gl;
        gl.activeTexture(gl.TEXTURE6); // shadow_map
        gl.bindTexture(gl.TEXTURE_2D, shadow_map);
    }

    public prepare(): void {
        super.prepare();
        let gl = this.gl;
        gl.activeTexture(gl.TEXTURE6);
        gl.bindTexture(gl.TEXTURE_2D, global.EMPTY_TEXTURE);
        this.setInt(this.uniforms.shadow_map, 6);
        this.setFloat(this.uniforms.shadow_distance, global.SHADOW_DISTANCE);
    }
}
