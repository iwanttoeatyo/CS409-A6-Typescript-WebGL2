import {vec2, vec3} from "gl-matrix";

export namespace MathHelper {

    export function barycentric(p: vec2, a: vec2, b: vec2, c: vec2): vec3 {
        let v0 = vec2.create();
        let v1 = vec2.create();
        let v2 = vec2.create();
        vec2.sub(v0, b, a);
        vec2.sub(v1, c, a);
        vec2.sub(v2, p, a);

        let d00 = vec2.dot(v0, v0);
        let d01 = vec2.dot(v0, v1);
        let d11 = vec2.dot(v1, v1);
        let d20 = vec2.dot(v2, v0);
        let d21 = vec2.dot(v2, v1);

        let inv_denom = 1 / (d00 * d11 - d01 * d01);

        let result = vec3.create();
        result[1] = (d11 * d20 - d01 * d21) * inv_denom;
        result[2] = (d00 * d21 - d01 * d20) * inv_denom;
        result[0] = 1.0 - result[1] - result[2];
        return result;
    }

    export function vec2_rotate(out: vec2, a: vec2, rad: number): vec2 {
        let cos_angle = Math.cos(rad);
        let sin_angle = Math.sin(rad);
        out[0] = cos_angle * a[0] - sin_angle * a[1];
        out[1] = sin_angle * a[0] + cos_angle * a[1];
        return out;
    }
}

