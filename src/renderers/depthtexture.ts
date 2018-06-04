import { Shader } from "../shader";
import { DepthShader } from "../depthshader";

export class DepthTexture {
    private readonly gl: WebGL2RenderingContext;
    public depth_shader: Shader;
    private quad_shader: Shader;

    private readonly depth_frame_buffer: WebGLFramebuffer;
    private readonly depth_texture: WebGLTexture;
    private readonly quad_VAO: WebGLVertexArrayObject;
    private readonly quad_VBO: WebGLBuffer;

    public readonly texture_size: number = 4096;

    // prettier-ignore
    private quad_vertex_buffer_data = [
		-1.0, -1.0, 0.0,
		 1.0, -1.0, 0.0,
		-1.0,  1.0, 0.0,
		-1.0,  1.0, 0.0,
		 1.0, -1.0, 0.0,
		 1.0,  1.0, 0.0
	];

    constructor(gl: WebGL2RenderingContext, texture_size?: number) {
        this.gl = gl;

        this.texture_size = texture_size || this.texture_size;

        //Depth program is used to render anything to a depth texture for shadow mapping
        this.depth_shader = new DepthShader(gl);

        // Quad program is used to render a texture to the screen
        this.quad_shader = new Shader(gl, require("shaders/quad.vert"), require("shaders/quad.frag"));

        //Set up a frame buffer and texture for depth texture renduring for shadow mapping
        this.depth_frame_buffer = gl.createFramebuffer();

        // The framebuffer, which regroups 0, 1, or more textures, and 0 or 1 depth buffer.
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.depth_frame_buffer);

        // The texture we're going to render to
        this.depth_texture = gl.createTexture();

        // "Bind" the newly created texture : all future texture functions will modify this texture
        gl.bindTexture(gl.TEXTURE_2D, this.depth_texture);

        // Give an empty image to OpenGL ( the last "0" )
        // prettier-ignore
        gl.texImage2D(gl.TEXTURE_2D,0,gl.DEPTH_COMPONENT16, this.texture_size,
			this.texture_size,0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);

        //Set "renderedTexture" as our color attachment #0
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depth_texture, 0);

        //Completed
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE)
            throw "depth texture frame buffer error";

        //Setup for render to quad
        this.quad_VAO = gl.createVertexArray();
        this.quad_VBO = gl.createBuffer();

        gl.bindVertexArray(this.quad_VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quad_VBO);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.quad_vertex_buffer_data), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
    }

    public startRenderToDepthTexture(): void {
        let gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.depth_frame_buffer);
        gl.viewport(0, 0, this.texture_size, this.texture_size);
        gl.clear(gl.DEPTH_BUFFER_BIT);

        this.depth_shader.use();
    }

    public renderDepthTextureToQuad(offset_x: number, offset_y: number, width: number, height: number) {
        let gl = this.gl;
        gl.viewport(offset_x, offset_y, width, height);

        this.quad_shader.use();
        gl.bindVertexArray(this.quad_VAO);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.depth_texture);
        this.quad_shader.setIntByName("texture1", 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.quad_VBO);

        //Draw the 2 triangles
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        gl.bindVertexArray(null);
    }

    public getTexture(): WebGLTexture {
        return this.depth_texture;
    }
}
