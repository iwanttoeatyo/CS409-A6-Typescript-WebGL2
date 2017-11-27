#version 300 es
precision mediump  float;
out vec4 FragColor;

in vec2 TexCoord;

uniform sampler2D texture1;


void main()
{


    FragColor = texture(texture1, TexCoord);
    //FragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0
}