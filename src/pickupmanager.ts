import {BasicModel} from "./entities/models/basicmodel";
import {Ring} from "./entities/ring";
import {Rod} from "./entities/rod";
import {World} from "./entities/world";
import {vec3} from "gl-matrix";
import {Collision} from "./collision";
import {Renderer} from "./Renderer";

export class PickupManager {
    private rod_model: BasicModel;
    private ring_model: BasicModel;

    public rings: Array<Ring>;
    public rods: Array<Rod>;

    private world: World;

    private score: number;

    public constructor(w: World, rod: BasicModel, ring: BasicModel) {
        this.world = w;
        this.rod_model = rod;
        this.ring_model = ring;
        this.init();
    };

    public init(): void {
        this.score = 0;
        this.rings = [];
        this.rods = [];
        
        this.world.disks.forEach( disk =>{
            let pos:vec3 = vec3.clone(disk.position);
            pos[1] = this.world.getHeightAtPointPosition(pos[0],pos[2]);
            this.addRod(pos,disk.type + 1);
            this.addRing(pos);
        })
    }

    public update(delta_time_ms: number): void {
        this.rings.forEach(ring => {
            if (!ring.picked_up)
                ring.update(delta_time_ms);
        })
    }

    public checkForPickupsCylinderIntersection(position: vec3, radius: number, half_height: number, renderer:Renderer): void {
        this.rings.forEach(ring => {
            if (!ring.picked_up)
                if (Collision.cylinderIntersection(position, radius, half_height, ring.position, Ring.radius, Ring.half_height)) {
                    ring.picked_up = true;
                    this.score += Ring.point_value;
                    renderer.removeEntity(ring);
                }
        });
        
        this.rods.forEach(rod=>{
            if(!rod.picked_up)
                if (Collision.cylinderIntersection(position, radius, half_height, rod.position, Rod.radius, Rod.half_height)) {
                    rod.picked_up = true;
                    this.score += rod.point_value;
                    renderer.removeEntity(rod);
                }
        });
    }

    public addRod(position: vec3, value: number): void {
        this.rods.push(new Rod(this.rod_model,position,value));
    }

    public addRing(position: vec3): void {
        this.rings.push(new Ring(this.rings.length,this.world,this.ring_model,position));
    }
    
    public getScore():number{
        return this.score;
    }
    
}