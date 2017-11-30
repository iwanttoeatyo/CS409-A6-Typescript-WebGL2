import {glMatrix, mat4} from "gl-matrix";
import {vec3} from "gl-matrix";

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

export class Camera {
    position: vec3;
    front: vec3;
    up: vec3;
    right: vec3;
    worldUp: vec3;

    yaw: number;
    pitch: number;

    movementSpeed: number;
    mouseSensitivity: number;
    zoom: number;

    constructor(pos: vec3 = vec3.fromValues(0, 0, 0), up: vec3 = vec3.fromValues(0, 1, 0), yaw: number = YAW, pitch: number = PITCH) {
        this.position = pos;
        this.front = vec3.fromValues(0, 0, -1);
        this.worldUp = up;
        this.movementSpeed = SPEED;
        this.mouseSensitivity = SENSITIVITY;
        this.zoom = ZOOM;
        this.yaw = yaw;
        this.pitch = pitch;

        this.updateCameraVectors();
    }

    getViewMatrix() {
        let forward = vec3.create();
        vec3.add(forward, this.position, this.front);
        
        let look = mat4.create();
        mat4.lookAt(look, this.position, forward, this.up);
        return look;
    }
    
    getInverseViewMatrix(){
        let forward = vec3.create();
        vec3.add(forward, this.position, this.front);

        let look = mat4.create();
        mat4.lookAt(look, this.position, forward, this.up);
        mat4.invert(look,look);
        return look;
    }

    processKeyboard(direction: Camera_Movement, deltaTime: number) {
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

    processMouseMovement(forward:vec3,pos:vec3, xOffset: number, yOffset: number, constrainPitch: boolean = true) {
        xOffset *= this.mouseSensitivity;
        yOffset *= this.mouseSensitivity;

        this.yaw += xOffset;
        this.pitch += yOffset;
        
        
        //Makes Camera lock behind player
        let a = Math.atan2(forward[0], forward[2]);
        a += Math.PI;
        a *= 360/(2*Math.PI);
        a = 360 - a - 90;
        if (constrainPitch) {
            if (this.pitch > 20) this.pitch = 20;
            if (this.pitch < -20) this.pitch = -20;
            if(this.yaw > a+ 20) this.yaw = a + 20;
            if(this.yaw < a - 20) this.yaw = a - 20;
        }

        this.updateCameraVectors();
    }

    private updateCameraVectors() {
   
        let x  = Math.cos(glMatrix.toRadian(this.yaw)) * Math.cos(glMatrix.toRadian(this.pitch));
        let y = Math.sin(glMatrix.toRadian(this.pitch));
        let z = Math.sin(glMatrix.toRadian(this.yaw)) * Math.cos(glMatrix.toRadian(this.pitch));
        let newFront: vec3 = vec3.fromValues(x,y,z);
        vec3.normalize(newFront, newFront);
        this.front = newFront;
  
        let cross: vec3 = vec3.create();
        vec3.normalize(cross, vec3.cross(cross, this.front, this.worldUp));
        this.right = cross;
        let cross2: vec3 = vec3.create();
        vec3.normalize(cross2, vec3.cross(cross2, this.right, this.front));
        this.up = cross2;
    }
    
    
}

