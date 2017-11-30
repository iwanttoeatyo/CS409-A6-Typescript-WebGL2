#version 300 es
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aTexCoord;
layout (location = 2) in vec3 aInstancedOffset;
layout (location = 3) in vec4 aColor;
layout (location = 4) in vec3 aScale;

out vec2 TexCoord;
out vec4 Color;

uniform mat4 model;
uniform mat4 view;
uniform mat4 viewProjection;

void main()
{
    vec4 vertexPos = vec4(aPos, 1);

    vertexPos.x *= aScale.x;
    vertexPos.y *= aScale.y;
    vertexPos.z *= aScale.z;
        vertexPos.xyz += aInstancedOffset;
    TexCoord = aTexCoord;
    Color = aColor;
    gl_Position = viewProjection * model *  vertexPos;
// gl_Position = u_Persp * u_ModelView * vec4(Position, 1.0);
//    gl_Position = projection * view * model * vec4(Position, 1.0f);
}   