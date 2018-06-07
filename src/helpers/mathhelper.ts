import { vec2, vec3 } from "gl-matrix";

export namespace MathHelper {
    let empty = vec2.create();
    let v0 = vec2.create(),v1 = vec2.create(),v2 = vec2.create();
    
    export function barycentric(out:vec3, p: vec2, a: vec2, b: vec2, c: vec2): vec3 {
        vec2.copy(v0,empty);
        vec2.copy(v1,empty);
        vec2.copy(v2,empty);
        vec2.sub(v0, b, a);
        vec2.sub(v1, c, a);
        vec2.sub(v2, p, a);

        let d00 = vec2.dot(v0, v0);
        let d01 = vec2.dot(v0, v1);
        let d11 = vec2.dot(v1, v1);
        let d20 = vec2.dot(v2, v0);
        let d21 = vec2.dot(v2, v1);

        let inv_denom = 1 / (d00 * d11 - d01 * d01);

        out[1] = (d11 * d20 - d01 * d21) * inv_denom;
        out[2] = (d00 * d21 - d01 * d20) * inv_denom;
        out[0] = 1.0 - out[1] - out[2];
        return out;
    }

    export function vec2_rotate(out: vec2, a: vec2, rad: number): vec2 {
        let cos_angle = Math.cos(rad);
        let sin_angle = Math.sin(rad);
        out[0] = cos_angle * a[0] - sin_angle * a[1];
        out[1] = sin_angle * a[0] + cos_angle * a[1];
        return out;
    }

    export function vec3_truncate(out: vec3, a: vec3, max: number): vec3 {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        if (vec3.length(a) > max) {
            vec3.normalize(out, out);
            out[0] *= max;
            out[1] *= max;
            out[2] *= max;
        }
        return out;
    }
}
