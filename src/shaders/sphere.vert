#version 300
layout (location = 0) in vec4 a_vertex;
layout (location = 1) in vec4 a_color;

uniform mat4 model_view_projection_matrix;

out vec4 color;

void main() {
    color = a_color;
	gl_Position = model_view_projection_matrix * vec4(a_vert , 1);
}
