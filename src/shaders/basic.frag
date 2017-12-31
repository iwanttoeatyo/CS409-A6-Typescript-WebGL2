#version 300 es
precision mediump  float;
out vec4 FragColor;

in vec2 TexCoord;

uniform sampler2D texture1;
uniform float ambient;

void main()
{
    FragColor = vec4(ambient * texture(texture1, TexCoord).xyz,1.0);

    //FragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0
}