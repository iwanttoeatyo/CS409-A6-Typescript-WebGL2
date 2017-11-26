#version 300 es
precision mediump float;
out vec4 FragColor;

in vec2 TexCoord;

uniform float mixValue;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
    FragColor =  mix(texture(texture1, TexCoord), texture(texture2, TexCoord), 0.2f);
    //fragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0
}