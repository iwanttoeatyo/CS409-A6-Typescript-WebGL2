#version 300 es
precision mediump float;
out vec4 FragColor;

in vec3 ourColor;

void main()
{
    FragColor = vec4(ourColor, 1.0f);
    //fragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0
}