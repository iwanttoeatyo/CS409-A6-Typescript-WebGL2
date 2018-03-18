#version 300 es
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aTexCoord;
layout (location = 2) in vec3 aNormal;
layout (location = 3) in vec3 aInstancedOffset;
layout (location = 4) in vec3 aScale;


out vec3 FragPos;
out vec3 Normal;
out vec2 TexCoord;

uniform mat4 model;
uniform mat4 viewProjection;

void main()
{
    vec4 vertexPos = vec4(aPos, 1);

    if(aScale.x > 0.0 && aScale.z > 0.0){
        vertexPos.x *= aScale.x;
        vertexPos.y *= aScale.y;
        vertexPos.z *= aScale.z;
    }

    vertexPos.xyz += aInstancedOffset.xyz;
    TexCoord = aTexCoord;
    gl_Position = viewProjection * model *  vertexPos;
    Normal = mat3(transpose(inverse(model))) * normalize(aNormal);
    FragPos = vec3(model * vertexPos);
}   