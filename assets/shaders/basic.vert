#version 300 es
layout (location = 0) in vec3 Position;

//uniform mat4 u_ModelView;
//uniform mat4 u_Persp;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{

gl_Position = projection *  view* model * vec4(Position,1.0f);
// gl_Position = u_Persp * u_ModelView * vec4(Position, 1.0);
//    gl_Position = projection * view * model * vec4(Position, 1.0f);
}   