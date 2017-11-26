#version 300 es
precision mediump float;
out vec4 FragColor;

in vec3 ourColor;
in vec2 TexCoord;

uniform float mixValue;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
    FragColor =  mix(texture(texture1, TexCoord), texture(texture2, TexCoord), mixValue);
    FragColor = vec4(FragColor.x * ourColor.x , FragColor.y * ourColor.y, FragColor.z * ourColor.z, FragColor.w);
    //fragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0
}