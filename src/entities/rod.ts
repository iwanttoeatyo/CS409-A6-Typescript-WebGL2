import {Entity, Model_Type} from "./entity";
import {BasicModel} from "./models/basicmodel";
import {vec3} from "gl-matrix";

export class Rod extends Entity {
    public readonly point_value: number;
    public picked_up: boolean = false;
    public readonly radius: number = 0.1;
    public readonly half_height: number = 1.0;

    public constructor(model: BasicModel, position: vec3, value: number) {
        super(model.mesh.name, Model_Type.BASIC, position);
        this.position = position;
        this.point_value = value;
        this.radius = model.radius;
        this.half_height = model.half_height;
    }

    public update(delta_time_ms: number): void {
        //does nothing
    }
}
