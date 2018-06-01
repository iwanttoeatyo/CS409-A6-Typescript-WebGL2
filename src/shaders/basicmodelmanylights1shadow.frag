#version 300 es
precision highp  float;

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
uniform sampler2D shadow_map;

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
in vec4 shadow_coord;

out vec4 FragColor;


vec2 poissonDisk[16] = vec2[]( 
   vec2( -0.94201624, -0.39906216 ), 
   vec2( 0.94558609, -0.76890725 ), 
   vec2( -0.094184101, -0.92938870 ), 
   vec2( 0.34495938, 0.29387760 ), 
   vec2( -0.91588581, 0.45771432 ), 
   vec2( -0.81544232, -0.87912464 ), 
   vec2( -0.38277543, 0.27676845 ), 
   vec2( 0.97484398, 0.75648379 ), 
   vec2( 0.44323325, -0.97511554 ), 
   vec2( 0.53742981, -0.47373420 ), 
   vec2( -0.26496911, -0.41893023 ), 
   vec2( 0.79197514, 0.19090188 ), 
   vec2( -0.24188840, 0.99706507 ), 
   vec2( -0.81409955, 0.91437590 ), 
   vec2( 0.19984126, 0.78641367 ), 
   vec2( 0.14383161, -0.14100790 ) 
);

// Returns a random number based on a vec3 and an int.
float random(vec3 seed, int i){
	vec4 seed4 = vec4(seed,i);
	float dot_product = dot(seed4, vec4(12.9898,78.233,45.164,94.673));
	return fract(sin(dot_product) * 43758.5453);
}

void main()
{
	vec3 normalized_normal    = normalize(normal);
	vec3 normalized_to_camera = normalize(to_camera);

	//Objects not in show have full light
	float light_factor = 1.0;

	// Sample the shadow map up to 16 times
	// TODO - Should implement early bailing
	for (int i=0;i<16;i++){
		// use either :
		//  - Always the same samples.
		//    Gives a fixed pattern in the shadow, but no noise
		//int index = i;
		//  - A random sample, based on the pixel's screen location. 
		//    No banding, but the shadow moves with the camera, which looks weird.
		//int index = int(16.0*random(gl_FragCoord.xyy, i))%16;
		//  - A random sample, based on the pixel's position in world space.
		//    The position is rounded to the millimeter to avoid too much aliasing
		int index = int(16.0*random(floor(position.xyz*1000.0), i))%16;
		
		//A light fully in the shadow will have the light_factor reduced by 0.8
		//Multiple by shadow_coord.w to fade shadows in and out, and vertexes not in the shadow map will have full light.
		//Use poissonDisk to remove hard edges on shadow
		//subtract by bias to remove shadow acne and z-fighting		

		//NOTE: Use this for Sampler2DShadow textures
		//light_factor -= (shadow_coord.w) * (1.0/16.0)*(1.0-texture( shadow_map, vec3(shadow_coord.xy + poissonDisk[index]/3000.0,  (shadow_coord.z)) ));
//		float vis = 1.0 - texture(shadow_map, vec3(shadow_coord.xy + poissonDisk[index]/3000.0,  (shadow_coord.z)));
//			light_factor -= shadow_coord.w * vis * (1.0/16.0);

		//NOTE: Use this for Sampler2D textures

		if ( texture( shadow_map, shadow_coord.xy + poissonDisk[index]/4096.0).x  <  (shadow_coord.z) ){
			light_factor -= ((shadow_coord.w) * (1.0/32.0));
		}
	}


    float sum = 0.0;
    float x,y;
    for(y = -1.5; y <= 1.5; y += 1.0){    
        for(x = -1.5; x <= 1.5; x += 1.0) {
            if ( texture( shadow_map, shadow_coord.xy + vec2(x/5096.0,y/5096.0) ).x  <  (shadow_coord.z) ){
               light_factor -= ((shadow_coord.w) * (1.0/32.0));
            }
        }
    }
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
			float  diffuse_intensity = light_factor * attenuation *     max(0.0, dot(normalized_normal, light_direction_from));
			float specular_intensity = light_factor * attenuation * pow(max(0.0, dot(normalized_normal, half_angle_direction)), shininess2);

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
