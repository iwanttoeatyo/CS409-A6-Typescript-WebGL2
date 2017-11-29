#version 300 es
precision mediump  float;
out vec4 FragColor;

in vec2 TexCoord;
in vec4 Color;

uniform sampler2D texture1;

void main()
{
    FragColor = texture(texture1, TexCoord) * Color;
    //FragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0
}