#version 300 es
precision mediump  float;

const int LIGHT_COUNT = 8;

struct Material {

    //Textures
    bool is_texture_active[6];
    sampler2D transparency_texture;
    sampler2D emission_texture;
    sampler2D ambient_texture;
    sampler2D diffuse_texture;
    sampler2D specular_texture;
    sampler2D shininess_texture;
            
    //Colors
    float transparency;
    vec3 emission_colour;
    vec3 ambient_colour;
    vec3 diffuse_colour;
    vec3 specular_colour;
    float shininess;
    int transparency_channel;
    int shininess_channel;

}; 
uniform Material material;


struct Light{
    bool is_enabled;
    vec4 position;
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    vec3 attenuation;
};

uniform Light lights[LIGHT_COUNT];

in vec3 position;
in vec2 tex_coord;
in vec3 normal;
in vec3 to_camera;

out vec4 FragColor;

void main()
{


	vec3 normalized_normal    = normalize(normal);
	vec3 normalized_to_camera = normalize(to_camera);

	float transparency_on_texture = texture(material.transparency_texture, tex_coord)[material.transparency_channel];
	vec3      emission_on_texture = texture(    material.emission_texture, tex_coord).rgb;
	vec3       ambient_on_texture = texture(     material.ambient_texture, tex_coord).rgb;
	vec3       diffuse_on_texture = texture(     material.diffuse_texture, tex_coord).rgb;
	vec3      specular_on_texture = texture(    material.specular_texture, tex_coord).rgb;
	float    shininess_on_texture = texture(   material.shininess_texture, tex_coord)[material.shininess_channel];

	float transparency2    = material.transparency;
	vec3  emission_surface = material.emission_colour;
	vec3   ambient_surface =  material.ambient_colour;
	vec3   diffuse_surface =  material.diffuse_colour;
	vec3  specular_surface = material.specular_colour;
	float shininess2       = material.shininess;

	if(material.is_texture_active[0]) transparency2    *= transparency_on_texture;
	if(material.is_texture_active[1]) emission_surface *=     emission_on_texture;
	if(material.is_texture_active[2])  ambient_surface *=      ambient_on_texture;
	if(material.is_texture_active[3])  diffuse_surface *=      diffuse_on_texture;
	if(material.is_texture_active[4]) specular_surface *=     specular_on_texture;
	if(material.is_texture_active[5]) shininess2       *=    shininess_on_texture;

	vec3 basic_colour      = emission_surface;
	vec4 separate_specular = vec4(0.0, 0.0, 0.0, 0.0);

	// calculate the effects of each light

	for(int i = 0; i < LIGHT_COUNT; i++)
		if(lights[i].is_enabled)
		{
			vec3 light_direction_from;
			float attenuation = 1.0;
			if(lights[i].position.w == 0.0)
				light_direction_from = normalize(lights[i].position.xyz);
			else
			{
				vec3 offset_position = lights[i].position.xyz - position;
				light_direction_from = normalize(offset_position);
				float light_distance = length(offset_position);
				attenuation = 1.0 / (lights[i].attenuation.x +
				                     lights[i].attenuation.y * light_distance +
				                     lights[i].attenuation.z * light_distance * light_distance);
			}

			//  Phong-Blinn shading

			vec3 half_angle_direction = normalize(normalized_to_camera + light_direction_from);
            
            float ambient_intensity = attenuation;
			float  diffuse_intensity = attenuation *     max(0.0, dot(normalized_normal, light_direction_from));
			float specular_intensity = attenuation * pow(max(0.0, dot(normalized_normal, half_angle_direction)), shininess2);

			basic_colour += ambient_surface * lights[i].ambient * ambient_intensity +
			                diffuse_surface * lights[i].diffuse * diffuse_intensity + 
                            specular_surface * lights[i].specular * specular_intensity;
		}

	// calculate the final colour

	if(separate_specular.a > 1.0)
		separate_specular.a = 1.0;

	float basic_transparency = transparency2 * (1.0 - separate_specular.a);

	if(basic_transparency + separate_specular.a <= 0.0)
		discard;

	FragColor = vec4(basic_colour, basic_transparency) + separate_specular;
}
