import { Entity, Model_Type } from "./entity";
import { World } from "./world";
import { vec3 } from "gl-matrix";
import { BasicModel } from "./models/basicmodel";
import { Collision } from "../helpers/collision";
import { MovementGraph } from "../movementgraph";
import { Random } from "../helpers/random";

export class Ring extends Entity {
    private readonly index: number;
    private readonly world: World;
    private readonly world_graph: MovementGraph;

    static readonly point_value: number = 1;
    static readonly speed: number = 2.5;
    static readonly rotation_speed: number = 1.3;
    public readonly radius: number = 0.7;
    public readonly half_height: number = 0.1;

    public picked_up: boolean = false;
    public target_position: vec3;

    public path: Array<number>;
    public curr_node_id: number;
    public target_node_id: number;

    constructor(index: number, world: World, world_graph: MovementGraph, model: BasicModel) {
        super(model.mesh.name, Model_Type.BASIC);
        this.index = index;
        this.world = world;
        this.world_graph = world_graph;
        this.curr_node_id = Random.randi(this.world_graph.getNodeList().length - 1);
        this.target_node_id = this.curr_node_id;
        this.target_position = vec3.clone(this.world_graph.getNodeList()[this.target_node_id].pos);
        this.position = vec3.clone(this.target_position);
        this.path = [];
        this.radius = model.radius;
        this.half_height = model.half_height;
    }

    public update(delta_time_ms: number) {
        let direction: vec3 = vec3.create();
        vec3.sub(direction, this.target_position, this.position);
        vec3.normalize(direction, direction);

        let speed_factor = this.world.getSpeedFactorAtPosition(this.position[0], this.position[2]) / 1000;
        let distance = Ring.speed * delta_time_ms * speed_factor;

        let node_list = this.world_graph.getNodeList();

        if (node_list[this.curr_node_id].disk_id === node_list[this.target_node_id].disk_id) {
            //Same disk -- Arc rotate around disk

            let old_dist = vec3.distance(this.position, this.target_position);
            let old_pos = vec3.clone(this.position);

            //center of disk
            let center = vec3.clone(this.world.disks[node_list[this.curr_node_id].disk_id].position);

            //vector from center of disk to ring position
            let center_to_ring = vec3.sub(vec3.create(), this.position, center);

            //direction vector from ring position to ring target position
            let dir_pos_to_target = vec3.sub(vec3.create(), this.target_position, this.position);

            //Tangent vector of vector from center of disk to ring position
            //Required to determine which direction is shortest around disk
            let tangent_center_to_ring = vec3.rotateY(
                vec3.create(),
                center_to_ring,
                vec3.fromValues(0, 1, 0),
                Math.PI / 2
            );
            let tangent_angle = vec3.angle(tangent_center_to_ring, dir_pos_to_target);

            //The radius to rotate around the disk is radius - 0.7
            let radius = this.world.disks[node_list[this.curr_node_id].disk_id].radius - 0.7;

            //The angle to rotate using arc length formula
            let angle = distance / radius;

            //Rotate around the disk in the shorter direction
            if (tangent_angle < Math.PI / 2)
                vec3.rotateY(center_to_ring, center_to_ring, vec3.fromValues(0, 1, 0), angle);
            else vec3.rotateY(center_to_ring, center_to_ring, vec3.fromValues(0, 1, 0), -angle);

            //vec3.add(this.position, center, center_to_ring);

            //To Make sure we don't drift off the radius
            vec3.scaleAndAdd(this.position, center, vec3.normalize(center_to_ring, center_to_ring), radius);
        } else {
            //Move directly to another disk

            vec3.scaleAndAdd(this.position, this.position, direction, distance);
        }

        //Rotate the ring's forward based on how much we moved
        let rot = Ring.rotation_speed * distance;
        vec3.rotateY(this.forward, this.forward, vec3.create(), rot);

        //Set the rings height based on the world height at that position
        this.position[1] =
            this.world.getHeightAtCirclePosition(this.position[0], this.position[2], this.radius) + this.half_height;

        //If on center of disk get new target
        if (
            Collision.pointCircleIntersection(
                this.target_position[0],
                this.target_position[2],
                this.position[0],
                this.position[2],
                0.2
            )
        ) {
            this.curr_node_id = this.target_node_id;

            if (this.path.length == 0) {
                //Get a random node that is not this same node
                let rand = Random.randi(node_list.length - 1);
                while (rand == this.curr_node_id) {
                    rand = Random.randi(node_list.length - 1);
                }
                //Remember Ring Zeros search data for display later
                if (this.index === 0) {
                    //Perform all the searches so we can record the visits required

                    this.path = this.world_graph.dijkstraSearch(this.curr_node_id, rand);
                    this.path = this.world_graph.aStarSearch(this.curr_node_id, rand);
                    this.path = this.world_graph.mmSearch(this.curr_node_id, rand);
                    this.world_graph.memorizeLastSearch();
                } else {
                    //Get the path between these two nodes
                    this.path = this.world_graph.mmSearch(this.curr_node_id, rand);
                }
            }
            //Pop the node off the front and set it as the target
            this.target_node_id = this.path.shift();
            this.target_position = vec3.clone(node_list[this.target_node_id].pos);
        }
    }
}
