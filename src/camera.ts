import {glMatrix, mat4, vec3} from "gl-matrix";

const YAW: number = 90.0;
const PITCH: number = 0.0;
const SPEED: number = 20.0;
const SENSITIVITY: number = 0.1;
const ZOOM: number = 65.0;

export enum Camera_Movement {
    FORWARD,
    BACKWARD,
    LEFT,
    RIGHT
}

let forward = vec3.create();

export class Camera {
    public position: vec3;
    public front: vec3;
    public up: vec3;
    private right: vec3;
    private worldUp: vec3;

    private yaw: number;
    private pitch: number;

    private movementSpeed: number;
    private mouseSensitivity: number;
    private zoom: number;

    constructor(
        pos: vec3 = vec3.fromValues(0, 0, 0),
        up: vec3 = vec3.fromValues(0, 1, 0),
        yaw: number = YAW,
        pitch: number = PITCH
    ) {
        this.position = pos;
        this.front = vec3.fromValues(0, 0, -1);
        this.worldUp = up;
        this.right = vec3.create();
        this.up = vec3.create();
        this.movementSpeed = SPEED;
        this.mouseSensitivity = SENSITIVITY;
        this.zoom = ZOOM;
        this.yaw = yaw;
        this.pitch = pitch;

        this.updateCameraVectors();
    }

    public getViewMatrix(out: mat4): mat4 {
        vec3.add(forward, this.position, this.front);
        mat4.lookAt(out, this.position, forward, this.up);
        return out;
    }

    public lookAt(pos: vec3): void {
        vec3.subtract(this.front, pos, this.position);
        vec3.normalize(this.front, this.front);
    }

    public getInverseViewMatrix(out: mat4): mat4 {
        vec3.add(forward, this.position, this.front);
        mat4.lookAt(out, this.position, forward, this.up);
        mat4.invert(out, out);
        return out;
    }

    public processKeyboard(direction: Camera_Movement, deltaTime: number): void {
        let velocity: number = this.movementSpeed * deltaTime;
        let a = this.front;
        let b = this.right;

        if (direction == Camera_Movement.FORWARD) {
            let offset: vec3 = vec3.create();
            vec3.scale(offset, a, velocity);
            vec3.add(this.position, this.position, offset);
        }
        if (direction == Camera_Movement.BACKWARD) {
            let offset: vec3 = vec3.create();
            vec3.scale(offset, a, -velocity);
            vec3.add(this.position, this.position, offset);
        }
        if (direction == Camera_Movement.LEFT) {
            let offset: vec3 = vec3.create();
            vec3.scale(offset, b, -velocity);
            vec3.add(this.position, this.position, offset);
        }
        if (direction == Camera_Movement.RIGHT) {
            let offset: vec3 = vec3.create();
            vec3.scale(offset, b, velocity);
            vec3.add(this.position, this.position, offset);
        }
    }

    //TODO Change calculation to move camera position up and down and keep same target on player
    public processMouseMovement(
        forward: vec3,
        pos: vec3,
        xOffset: number,
        yOffset: number,
        constrainPitch: boolean = true
    ): void {
        xOffset *= this.mouseSensitivity;
        yOffset *= this.mouseSensitivity;

        //this.yaw += xOffset;
        this.pitch += yOffset;

        let yawConstrainAmount = 0;

        //Makes Camera lock behind player
        let a = Math.atan2(forward[0], forward[2]);
        a += Math.PI;
        a *= 360 / (2 * Math.PI);
        a = 360 - a - 90;
        if (constrainPitch) {
            if (this.pitch > 20) this.pitch = 20;
            if (this.pitch < -20) this.pitch = -20;
            if (this.yaw > a + yawConstrainAmount) this.yaw = a + yawConstrainAmount;
            if (this.yaw < a - yawConstrainAmount) this.yaw = a - yawConstrainAmount;
        }

        this.updateCameraVectors();
    }

    private updateCameraVectors(): void {
        let x = Math.cos(glMatrix.toRadian(this.yaw)) * Math.cos(glMatrix.toRadian(this.pitch));
        let y = Math.sin(glMatrix.toRadian(this.pitch));
        let z = Math.sin(glMatrix.toRadian(this.yaw)) * Math.cos(glMatrix.toRadian(this.pitch));

        vec3.normalize(this.front, vec3.set(this.front, x, y, z));
        vec3.normalize(this.right, vec3.cross(this.right, this.front, this.worldUp));
        vec3.normalize(this.up, vec3.cross(this.up, this.right, this.front));
    }
}
