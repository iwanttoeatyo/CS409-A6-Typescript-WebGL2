#version 300 es

uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 model_view_projection_matrix;
uniform vec3 camera_pos;

uniform bool tween_enabled;
uniform float tween_factor;

layout (location = 0) in vec3 a_vertex;
layout (location = 1) in vec2 a_tex_coord;
layout (location = 2) in vec3 a_normal;
layout (location = 3) in vec3 a_vertex1;
layout (location = 4) in vec3 a_normal1;

out vec3 position;
out vec2 tex_coord;
out vec3 normal;
out vec3 to_camera;

void main()
{
    vec3 new_normal = a_normal;
    vec3 new_vertex = a_vertex;
    if(tween_enabled)
	{
		new_normal = mix(a_normal,a_normal1,tween_factor);      
        new_vertex = mix(a_vertex,a_vertex1,tween_factor);
        
    }
	
	vec4 world_position = model_matrix * vec4(new_vertex, 1.0);

	position   = world_position.xyz;
	tex_coord = a_tex_coord;
	normal    = mat3(transpose(inverse(model_matrix))) * new_normal;
	to_camera  = normalize(camera_pos - world_position.xyz);

	gl_Position = model_view_projection_matrix * vec4(new_vertex, 1.0);
}
