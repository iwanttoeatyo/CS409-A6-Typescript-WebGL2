/**
 * Represents the 3D cuboidal area of the world in which objects will cast
 * shadows (basically represents the orthographic projection area for the shadow
 * render pass). It is updated each frame to optimise the area, making it as
 * small as possible (to allow for optimal shadow map resolution) while not
 * being too small to avoid objects not having shadows when they should.
 * Everything inside the cuboidal area represented by this object will be
 * rendered to the shadow map in the shadow render pass. Everything outside the
 * area won't be.
 *
 * @author Karl
 * Site: https://www.dropbox.com/sh/g9vnfiubdglojuh/AACpq1KDpdmB8ZInYxhsKj2Ma/shadows?dl=0
 * Youtube tutorial:
 *        https://www.youtube.com/watch?v=o6zDfDkOFIc
 *        https://www.youtube.com/watch?v=9sEHkT7N7RM
 *
 * Modified by Chris Boyd
 * Date Jan 27,2018
 *
 */
import {glMatrix, mat4, vec3, vec4} from "gl-matrix";
import {Camera} from "../camera";
import {Pointer} from "../helpers/pointer";
import {global} from "globals";

export class ShadowBox {
    private SHADOW_DISTANCE: number = global.SHADOW_DISTANCE || 45.0;
    private readonly FOV = global.FOV || 80.0;
    private readonly OFFSET = 7.0;
    private readonly CLIP_NEAR = 1.0;
    private readonly CLIP_FAR = 96.0;
    private readonly TRANSITION_DISTANCE = 5.0;

    private min_x: number;
    private max_x: number;
    private min_y: number;
    private max_y: number;
    private min_z: number;
    private max_z: number;
    private readonly light_view_matrix: mat4;
    private readonly camera: Readonly<Pointer<Camera>>;

    private far_height: number;
    private far_width: number;
    private near_height: number;
    private near_width: number;

    /**
     * Creates a new shadow box and calculates some initial values relating to
     * the camera's view frustum, namely the width and height of the near plane
     * and (possibly adjusted) far plane.
     * @param gl
     *
     * @param light_view_matrix
     *            - basically the "view matrix" of the light. Can be used to
     *            transform a point from world space into "light" space (i.e.
     *            changes a point's coordinates from being in relation to the
     *            world's axis to being in terms of the light's local axis).
     * @param camera
     *            - pointer to the pointer of the in-game camera. So it can be swapped.
     * @param shadow_distance
     *             - The edge of the shadow box, how far we want to see shadows.
     *             a higher value will have lower quality shadows.
     */
    constructor(
        gl: WebGL2RenderingContext,
        light_view_matrix: mat4,
        camera: Readonly<Pointer<Camera>>,
        shadow_distance: number = global.SHADOW_DISTANCE
    ) {
        this.SHADOW_DISTANCE = shadow_distance;
        this.light_view_matrix = light_view_matrix;
        this.camera = camera;
        this.calculateWidthsAndHeights(gl);
    }

    /**
     * Updates the bounds of the shadow box based on the light direction and the
     * camera's view frustum, to make sure that the box covers the smallest area
     * possible while still ensuring that everything inside the camera's view
     * (within a certain range) will cast shadows.
     */
    public update() {

        let forward_vector: vec3 = vec3.clone(this.camera.value.front);
        let up_vector: vec3 = vec3.clone(this.camera.value.up);
        let to_far: vec3 = vec3.scale(vec3.create(), forward_vector, this.SHADOW_DISTANCE);
        let to_near: vec3 = vec3.scale(vec3.create(), forward_vector, this.CLIP_NEAR);
        let center_near: vec3 = vec3.add(vec3.create(), to_near, this.camera.value.position);
        let center_far: vec3 = vec3.add(vec3.create(), to_far, this.camera.value.position);

        let points: vec4[] = this.calculateFrustumVertices(up_vector, forward_vector, center_near, center_far);

        let first = true;
        for (let i = 0; i < 8; i++) {
            if (first) {
                this.min_x = points[i][0];
                this.max_x = points[i][0];
                this.min_y = points[i][1];
                this.max_y = points[i][1];
                this.min_z = points[i][2];
                this.max_z = points[i][2];
                first = false;
                continue;
            }
            if (points[i][0] > this.max_x) {
                this.max_x = points[i][0];
            } else if (points[i][0] < this.min_x) {
                this.min_x = points[i][0];
            }
            if (points[i][1] > this.max_y) {
                this.max_y = points[i][1];
            } else if (points[i][1] < this.min_y) {
                this.min_y = points[i][1];
            }
            if (points[i][2] > this.max_z) {
                this.max_z = points[i][2];
            } else if (points[i][2] < this.min_z) {
                this.min_z = points[i][2];
            }
        }
        this.max_z += this.OFFSET;
    }

    /**
     * Calculates the center of the "view cuboid" in light space first, and then
     * converts this to world space using the inverse light's view matrix.
     *
     * @return The center of the "view cuboid" in world space.
     */
    public getCenter(): vec3 {
        const x = (this.min_x + this.max_x) / 2.0;
        const y = (this.min_y + this.max_y) / 2.0;
        const z = (this.min_z + this.max_z) / 2.0;
        const cen: vec3 = vec3.fromValues(x, y, z);

        const inverted_light: mat4 = mat4.invert(mat4.create(), this.light_view_matrix);
        let result = vec3.transformMat4(vec3.create(), cen, inverted_light);

        return result;
    }

    /**
     * @return The width of the "view cuboid" (orthographic projection area).
     */
    public getWidth(): number {
        return this.max_x - this.min_x;
    }

    /**
     * @return The height of the "view cuboid" (orthographic projection area).
     */
    public getHeight(): number {
        return this.max_y - this.min_y;
    }

    /**
     * @return The length of the "view cuboid" (orthographic projection area).
     */
    public getLength(): number {
        return this.max_z - this.min_z;
    }

    /**
     * Calculates the position of the vertex at each corner of the view frustum
     * in light space (8 vertices in total, so this returns 8 positions).
     *
     * @param rotation
     *            - camera's rotation.
     * @param forward_vector
     *            - the direction that the camera is aiming, and thus the
     *            direction of the frustum.
     * @param center_near
     *            - the center point of the frustum's near plane.
     * @param center_far
     *            - the center point of the frustum's (possibly adjusted) far
     *            plane.
     * @return The positions of the vertices of the frustum in light space.
     */
    public calculateFrustumVertices(
        up_vector: vec3,
        forward_vector: vec3,
        center_near: vec3,
        center_far: vec3
    ): vec4[] {
        const right_vector: vec3 = vec3.cross(vec3.create(), forward_vector, up_vector);
        const down_vector: vec3 = vec3.negate(vec3.create(), up_vector);
        const left_vector: vec3 = vec3.negate(vec3.create(), right_vector);
        const far_top: vec3 = vec3.scaleAndAdd(vec3.create(), center_far, up_vector, this.far_height);
        const far_bottom: vec3 = vec3.scaleAndAdd(vec3.create(), center_far, down_vector, this.far_height);
        const near_top: vec3 = vec3.scaleAndAdd(vec3.create(), center_near, up_vector, this.near_height);
        const near_bottom: vec3 = vec3.scaleAndAdd(vec3.create(), center_near, down_vector, this.near_height);

        let points: vec4[] = Array<vec4>(8);
        points[0] = this.calculateLightSpaceFrustumCorner(far_top, right_vector, this.far_width);
        points[1] = this.calculateLightSpaceFrustumCorner(far_top, left_vector, this.far_width);
        points[2] = this.calculateLightSpaceFrustumCorner(far_bottom, right_vector, this.far_width);
        points[3] = this.calculateLightSpaceFrustumCorner(far_bottom, left_vector, this.far_width);
        points[4] = this.calculateLightSpaceFrustumCorner(near_top, right_vector, this.near_width);
        points[5] = this.calculateLightSpaceFrustumCorner(near_top, left_vector, this.near_width);
        points[6] = this.calculateLightSpaceFrustumCorner(near_bottom, right_vector, this.near_width);
        points[7] = this.calculateLightSpaceFrustumCorner(near_bottom, left_vector, this.near_width);
        return points;
    }

    /**
     * Calculates one of the corner vertices of the view frustum in world space
     * and converts it to light space.
     *
     * @param start_point
     *            - the starting center point on the view frustum.
     * @param direction
     *            - the direction of the corner from the start point.
     * @param width
     *            - the distance of the corner from the start point.
     * @return - The relevant corner vertex of the view frustum in light space.
     */
    public calculateLightSpaceFrustumCorner(start_point: vec3, direction: vec3, width: number): vec4 {
        const point: vec3 = vec3.add(
            vec3.create(),
            start_point,
            vec3.fromValues(direction[0] * width, direction[1] * width, direction[2] * width)
        );
        let point4f: vec4 = vec4.fromValues(point[0], point[1], point[2], 1.0);
        point4f = vec4.transformMat4(point4f, point4f, this.light_view_matrix);
        return point4f;
    }

    /**
     * Calculates the width and height of the near and far planes of the
     * camera's view frustum. However, this doesn't have to use the "actual" far
     * plane of the view frustum. It can use a shortened view frustum if desired
     * by bringing the far-plane closer, which would increase shadow resolution
     * but means that distant objects wouldn't cast shadows.
     */
    public calculateWidthsAndHeights(gl: WebGL2RenderingContext): void {
        this.far_width = this.SHADOW_DISTANCE * Math.tan(glMatrix.toRadian(this.FOV));
        this.near_width = this.CLIP_NEAR * Math.tan(glMatrix.toRadian(this.FOV));
        this.far_height = this.far_width / (gl.drawingBufferWidth / gl.drawingBufferHeight);
        this.near_height = this.near_width / (gl.drawingBufferWidth / gl.drawingBufferHeight);
    }

    public setShadowDistance(distance: number): void {
        this.SHADOW_DISTANCE = distance;
    }

    public getShadowDistance(): number {
        return this.SHADOW_DISTANCE;
    }

    public getShadowFadeDistance(): number {
        return this.SHADOW_DISTANCE * 2 + this.TRANSITION_DISTANCE;
    }
}
