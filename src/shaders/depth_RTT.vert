#version 300 es

// Input vertex data, different for all executions of this shader.
layout(location = 0) in vec3 a_vertex;
layout(location = 3) in vec3 a_vertex1;
// Values that stay constant for the whole mesh.
uniform mat4 model_view_projection_matrix;
uniform float tween_factor;
uniform bool tween_enabled;

void main()
{
    vec3 new_vertex = a_vertex;
	if(tween_enabled)
        new_vertex =  mix(a_vertex, a_vertex1, tween_factor);

	gl_Position =  model_view_projection_matrix * vec4(new_vertex, 1.0);
}


