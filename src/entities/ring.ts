import {Entity, Model_Type} from "./entity";
import {World} from "./world";
import {vec3} from "gl-matrix";
import {BasicModel} from "./models/basicmodel";
import {Collision} from "../helpers/collision";

export class Ring extends Entity {
    private index: number;
    private world: World;

    static readonly point_value: number = 1;
    static readonly speed: number = 2.5;
    static readonly rotation_speed: number = 1.3;
    static readonly radius: number = 0.7;
    static readonly half_height: number = 0.1;

    public picked_up: boolean = false;
    public target_position: vec3;

    //public path: Array<number>;
    //public curr_node_id: number;
    //public target_node_id: number;

    constructor(index: number, world: World, model: BasicModel, position: vec3) {
        super(model.mesh.name, Model_Type.BASIC, position);
        this.target_position = position;
        this.world = world;
    }

    public update(delta_time_ms: number) {
        let direction: vec3 = vec3.create();
        vec3.sub(direction, this.target_position, this.position);
        vec3.normalize(direction, direction);

        let speed_factor = this.world.getSpeedFactorAtPosition(this.position[0], this.position[2]) / 1000;
        let distance = Ring.speed * delta_time_ms * speed_factor;

        vec3.scaleAndAdd(this.position, this.position, direction, distance);

        //Rotate ring based on distance moved
        let rot = Ring.rotation_speed * distance;
        vec3.rotateY(this.forward, this.forward, vec3.create(), rot);

        this.position[1] = this.world.getHeightAtCirclePosition(this.position[0], this.position[2], Ring.radius) + 2 * Ring.half_height;

        //If on center of disk get new target
        if (Collision.pointCircleIntersection(this.target_position[0], this.target_position[2], this.position[0], this.position[2], Ring.radius)) {
            this.target_position = this.world.getRandomDiskPosition();
        }
    }

}