//Determines if there is an intersetion between a circle of radius r1 at
//	position x1,y2 and a circle with radius r2 at position x2,r2
import {vec3} from "gl-matrix";

export namespace Collision {
    export function circleIntersection(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
        let dx: number = x1 - x2;
        let dy: number = y1 - y2;
        return (dx * dx + dy * dy) <= (r1 + r2) * (r1 + r2);
    }

//Determines if there is an intersetion between a circle of radius r1 at
//	position x1,y2 and a circle with radius r2 at position x2,r2
    export function pointCircleIntersection(x1: number, y1: number, x2: number, y2: number, r2: number): boolean {
        return circleIntersection(x1, y1, 0, x2, y2, r2);
    }

//Determines if there is an intersection between two cylinders of radius r1 at position p1 with a height of h1
//against a cylinder of radius r2 at position p2 with a height of h2
    export function cylinderIntersection(p1: vec3, r1: number, half_height1: number, p2: vec3, r2: number, half_height2: number): boolean {
        let h1 = half_height1;
        let h2 = half_height2;
        //Check for height collision first
        //Top of p1 doesn't reach bottom of p2
        //Or bottom of p1 doesn't reach  top of p2
        if (p1[1] + h1 < p2[1] - h2 || p1[1] - h1 > p2[1] + h2)
            return false;

        //Check for circle collision second
        return circleIntersection(p1[0], p1[2], r1, p2[0], p2[2], r2);

    }
}