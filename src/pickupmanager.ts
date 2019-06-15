import {BasicModel} from "./entities/models/basicmodel";
import {Ring} from "./entities/ring";
import {Rod} from "./entities/rod";
import {World} from "./entities/world";
import {vec3} from "gl-matrix";
import {Collision} from "./helpers/collision";
import {Renderer} from "./renderers/renderer";
import {MovementGraph} from "./movementgraph";

export class PickupManager {
    private readonly rod_model: BasicModel;
    private readonly ring_model: BasicModel;

    public rings: Array<Ring>;
    public rods: Array<Rod>;

    private score: number;

    public constructor(world: World, world_graph: MovementGraph, rod: BasicModel, ring: BasicModel) {
        this.rod_model = rod;
        this.ring_model = ring;
        this.init(world, world_graph);
    }

    public init(world: World, world_graph: MovementGraph): void {
        this.score = 0;
        this.rings = [];
        this.rods = [];

        for (let disk of world.disks) {
            let pos: vec3 = vec3.clone(disk.position);
            pos[1] = world.getHeightAtPointPosition(pos[0], pos[2]);
            this.addRod(pos, disk.type + 1);
            this.addRing(world, world_graph);
        }
    }

    public update(delta_time_ms: number): void {
        for (let ring of this.rings) {
            if (!ring.picked_up) ring.update(delta_time_ms);
        }
    }

    public checkForPickupsCylinderIntersection(
        position: vec3,
        radius: number,
        half_height: number,
        renderer: Renderer
    ): void {
        for (let ring of this.rings) {
            if (!ring.picked_up)
                if (
                    Collision.cylinderIntersection(
                        position,
                        radius,
                        half_height,
                        ring.position,
                        ring.radius,
                        ring.half_height
                    )
                ) {
                    ring.picked_up = true;
                    this.score += Ring.point_value;
                    renderer.removeEntity(ring);
                }
        }

        for (let rod of this.rods) {
            if (!rod.picked_up)
                if (
                    Collision.cylinderIntersection(
                        position,
                        radius,
                        half_height,
                        rod.position,
                        rod.radius,
                        rod.half_height
                    )
                ) {
                    rod.picked_up = true;
                    this.score += rod.point_value;
                    renderer.removeEntity(rod);
                }
        }
    }

    public addRod(position: vec3, value: number): void {
        this.rods.push(new Rod(this.rod_model, position, value));
    }

    public addRing(world: World, world_graph: MovementGraph): void {
        this.rings.push(new Ring(this.rings.length, world, world_graph, this.ring_model));
    }

    public getScore(): number {
        return this.score;
    }
}
