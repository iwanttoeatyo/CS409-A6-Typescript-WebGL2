#version 300 es
precision highp  float;

const int LIGHT_COUNT = 8;

layout (location = 0) in vec3 a_vertex;
layout (location = 1) in vec2 a_tex_coord;
layout (location = 2) in vec3 a_normal;
layout (location = 3) in vec3 a_vertex1;
layout (location = 4) in vec3 a_normal1;

uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 model_view_projection_matrix;
uniform mat4 shadow_map_space_matrix;
uniform vec3 camera_pos;
uniform float shadow_distance;

uniform bool tween_enabled;
uniform float tween_factor;

struct Light{
    bool is_enabled;
    vec4 position;
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    vec3 attenuation;
};

uniform Light lights[LIGHT_COUNT];

out vec3 position;
out vec2 tex_coord;
out vec3 normal;
out vec3 to_camera;
out vec4 shadow_coord;

const float transition_distance = 5.0;

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
	normal    = normalize(mat3(transpose(inverse(model_matrix))) * new_normal);
	to_camera  = normalize(camera_pos - world_position.xyz);

	gl_Position = model_view_projection_matrix * vec4(new_vertex, 1.0);
	
    //(OUT) Calculate world space coords that map this vertex to the shadow_map
    //The vertex may not appear in the shadow_map and will have no shadow

    vec3 toLight = normalize(lights[0].position.xyz);
    float cos_light_angle = dot(toLight, normal);
    float slope_scale = clamp(1.0 - cos_light_angle, 0.0, 1.0);
    float normal_offset_scale =  slope_scale * 0.3;
    
    vec4 shadow_offset = vec4(normal*normal_offset_scale,0.0);
    
    shadow_coord = shadow_map_space_matrix * (world_position + shadow_offset);
    vec4 shadow_coord_xy = shadow_map_space_matrix * (world_position + shadow_offset);

    //shadow_coord.xy = shadow_coord_xy.xy;
    	
    //Shaodw_coord.w will be used to fade in and out shadows softly when they are far from camera
    vec4 to_camera_view_space = view_matrix * world_position;
    float distance1 = length(to_camera_view_space.xyz);

    distance1 = distance1 - (shadow_distance - transition_distance);
    distance1 = distance1 / transition_distance;
    shadow_coord.w = clamp(1.0 - distance1, 0.0, 1.0);

}
