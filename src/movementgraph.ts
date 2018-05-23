import {Collision} from "./helpers/collision";
import {Disk} from "./entities/disk";
import {vec3} from "gl-matrix";
import * as assert from "assert";
import Collections = require('typescript-collections');

const HIGH_VALUE = Number.MAX_VALUE;
const NO_VERTEX_FOUND = -1;

//The acquired search data per node when a search algorithm is run
class SearchData {
    visited: boolean;
    path_node: number;
    given_cost: number;
    heuristic: number;
    priority: number;

    constructor() {
        this.init();
    }

    public init(): void {
        this.visited = false;
        this.path_node = NO_VERTEX_FOUND;
        this.given_cost = HIGH_VALUE;
        this.heuristic = 0;
        this.priority = HIGH_VALUE;
    }
}

//The search data for both directions of MM search
class NodeSearchData {
    constructor(public start:SearchData = new SearchData(),
                public end:SearchData = new SearchData()) {
    };
}


//The data of each node in the movement graph
class Node {
    node_links: NodeLink[];

    constructor(public node_id: number,
                public disk_id: number,
                public pos: vec3) {
        this.node_links = [];
    }
};

//The data in the priority queue
class QueueNode {
    constructor(public id: number,
                public priority: number) {
    }
}

function compare(a: QueueNode, b: QueueNode) {
    if (a.priority < b.priority) return 1;
    if (a.priority > b.priority) return -1;
    return 0;
}

//The data of each edge between nodes in the movement graph
class NodeLink {
    constructor(public source_node_id: number,
                public dest_node_id: number,
                public disk_id: number,
                public weight: number) {
    };
}

//A Graph of nodes between the disk of the world.
//Can perform pathfinding algorithms between nodes and return optimal paths
export class MovementGraph {

//Offset for collision checking to include disks almost touching
    private readonly collision_offset = 0.1;
    private readonly node_offset = 0.7;

//The search data used for pathfinding
    private search_data: NodeSearchData[] = [];

//Counters to see how each algorithm performs
    private a_star_visits: number = 0;
    private dijkstra_visits: number = 0;
    private mm_visits: number = 0;

    private node_link_count: number = 0;

//The data after a search memorization is called
    private memorized_search_data: NodeSearchData[] = [];
    private memorized_a_star_visits: number = 0;
    private memorized_dijkstra_visits: number = 0;
    private memorized_mm_visits: number = 0;

//The node ids organized per disk
    private readonly disk_node_list: number[][] = [];

//The list of nodes of the graph
    private readonly node_list: Node[] = [];


//Initilize the Node and Node Links of the movement graph using the disks data
    constructor(disks: Disk[]) {
        let size = disks.length;
        assert(size > 0);

        this.node_list = [];
        this.disk_node_list = Array(...Array(size)).map(()=> Array(0));


        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < size; j++) {
                let disk_i: Disk = disks[i];
                let disk_j: Disk = disks[j];
                //No collision
                if (!Collision.circleIntersection(
                    (disk_i.position[0]), (disk_i.position[2]), disk_i.radius + this.collision_offset,
                    (disk_j.position[0]), (disk_j.position[2]), disk_j.radius + this.collision_offset))
                    continue;

                let position_i = this.calculateNodePosition(disk_i, disk_j);
                let position_j = this.calculateNodePosition(disk_j, disk_i);

                let node_id_i = this.addNode(position_i, i);
                let node_id_j = this.addNode(position_j, j);

                const weight_ij = this.calculateWeightBetweenDisks(disks, node_id_i, node_id_j);
                this.addLink(i, node_id_i, j, node_id_j, weight_ij);

                for (let node_id_k of this.disk_node_list[i]) {
                    const weight_ik = this.calculateWeightSameDisk(disks, node_id_i, node_id_k);
                    this.addLink(i, node_id_i, this.node_list[node_id_k].disk_id, node_id_k, weight_ik);
                }
                for (let node_id_k of this.disk_node_list[j]) {
                    const weight_jk = this.calculateWeightSameDisk(disks, node_id_j, node_id_k);
                    this.addLink(j, node_id_j, this.node_list[node_id_k].disk_id, node_id_k, weight_jk);
                }

                this.disk_node_list[i].push(node_id_i);
                this.disk_node_list[j].push(node_id_j);
            }
        }
        this.resetSearchData();

    };

//Performs dijstra's search algorithm to find optimal path between 2 nodes
    public dijkstraSearch(node_start_id: number, node_end_id: number): number[] {
        this.resetSearchData();

        this.dijkstra_visits = 0;
        let queue_start = new Collections.PriorityQueue<QueueNode>(compare);

        this.search_data[node_start_id].start.path_node = node_start_id;
        this.search_data[node_start_id].start.given_cost = 0;
        this.search_data[node_start_id].start.priority = this.search_data[node_start_id].start.given_cost +
            this.search_data[node_start_id].start.heuristic;
        queue_start.enqueue(new QueueNode(node_start_id, this.search_data[node_start_id].start.priority));


        while (!queue_start.isEmpty()) {
            //Current node we are at
            const curr = queue_start.dequeue().id;

            //already visited
            if (this.search_data[curr].start.visited) continue;

            //Goal Found, return path
            if (curr == node_end_id) break;

            this.search_data[curr].start.visited = true;
            this.dijkstra_visits++;

            //Look through all linked nodes and update if path is shorter
            for (let link of this.node_list[curr].node_links) {
                //If in closed set ignore because already evaluated
                if (this.search_data[link.dest_node_id].start.visited) continue;

                const g_score = this.search_data[curr].start.given_cost + link.weight;

                if (g_score < this.search_data[link.dest_node_id].start.given_cost) {
                    //f = g + h
                    //update g
                    this.search_data[link.dest_node_id].start.given_cost = g_score;
                    //update priority f = g + h
                    this.search_data[link.dest_node_id].start.priority = g_score + this.search_data[link.dest_node_id].start.heuristic;
                    //Mark the node we came from
                    this.search_data[link.dest_node_id].start.path_node = curr;
                    //Update open list with priority (f = g + h)
                    queue_start.enqueue(new QueueNode(link.dest_node_id, this.search_data[link.dest_node_id].start.priority));
                }
            }
        }
        return this.getPath(node_start_id, node_end_id);
    };

//Performs A* search algorithm to find optimal path between 2 nodes
//Uses the 3D distance between the nodes as the heuristic
    public aStarSearch(node_start_id, node_end_id: number): number[] {
        this.resetSearchDataWithHeuristics(node_start_id, node_end_id);

        this.a_star_visits = 0;
        let queue_start = new Collections.PriorityQueue<QueueNode>(compare);

        this.search_data[node_start_id].start.path_node = node_start_id;
        this.search_data[node_start_id].start.given_cost = 0;
        this.search_data[node_start_id].start.priority = this.search_data[node_start_id].start.given_cost + this.search_data[node_start_id]
            .start.heuristic;
        queue_start.enqueue(new QueueNode(node_start_id, this.search_data[node_start_id].start.priority));


        while (!queue_start.isEmpty()) {
            //Current node we are at
            const curr = queue_start.dequeue().id;

            //already visited
            if (this.search_data[curr].start.visited) continue;

            //Goal Found, return path
            if (curr == node_end_id) break;

            this.search_data[curr].start.visited = true;
            this.a_star_visits++;

            //Look through all linked nodes and update if path is shorter
            for (let link of this.node_list[curr].node_links) {
                //If in closed set ignore because already evaluated
                if (this.search_data[link.dest_node_id].start.visited) continue;

                const g_score = this.search_data[curr].start.given_cost + link.weight;

                if (g_score < this.search_data[link.dest_node_id].start.given_cost) {
                    //f = g + h
                    //update g
                    this.search_data[link.dest_node_id].start.given_cost = g_score;
                    //update priority f = g + h
                    this.search_data[link.dest_node_id].start.priority = g_score + this.search_data[link.dest_node_id].start.heuristic;
                    //Mark the node we came from
                    this.search_data[link.dest_node_id].start.path_node = curr;
                    //Update open list with priority (f = g + h)
                    queue_start.enqueue(new QueueNode(link.dest_node_id, this.search_data[link.dest_node_id].start.priority));
                }
            }
        }
        return this.getPath(node_start_id, node_end_id);
    };


//Performs double ended A* search algorithm to find optimal path between 2 nodes
//Uses the 3D distance between the nodes as the heuristic
    public mmSearch(node_start_id, node_end_id: number): number[] {
        //Clear search data and fill heuristics
        this.resetSearchDataWithHeuristics(node_start_id, node_end_id);
        this.mm_visits = 0;
        //Open List 1
        let queue_start = new Collections.PriorityQueue<QueueNode>(compare);
        //Open List 2
        let queue_end = new Collections.PriorityQueue<QueueNode>(compare);
        //Current Node index
        let curr = NO_VERTEX_FOUND;

        this.search_data[node_start_id].start.path_node = node_start_id;
        this.search_data[node_start_id].start.given_cost = 0;
        this.search_data[node_start_id].start.priority = this.search_data[node_start_id].start.given_cost +
            this.search_data[node_start_id].start.heuristic;
        queue_start.enqueue(new QueueNode(node_start_id, this.search_data[node_start_id].start.priority));

        this.search_data[node_end_id].end.path_node = node_end_id;
        this.search_data[node_end_id].end.given_cost = 0;
        this.search_data[node_end_id].end.priority = this.search_data[node_end_id].end.given_cost +
            this.search_data[node_end_id].end.heuristic;
        queue_end.enqueue(new QueueNode(node_end_id, this.search_data[node_end_id].end.priority));


        while (!queue_start.isEmpty() && !queue_end.isEmpty()) {
            let p1 = HIGH_VALUE;
            let p2 = HIGH_VALUE;

            if (!queue_start.isEmpty())
                p1 = queue_start.peek().priority;
            if (!queue_end.isEmpty())
                p2 = queue_end.peek().priority;

            let popped_from_start_queue: boolean;
            let curr_node_search_data: SearchData;

            if (p1 <= p2) {
                curr = queue_start.dequeue().id;
                //We already visited this node
                if (this.search_data[curr].start.visited) continue;
                //Goal found if node is on opposite closed list
                if (this.search_data[curr].end.visited) break;

                curr_node_search_data = this.search_data[curr].start;
                popped_from_start_queue = true;
            } else {
                curr = queue_end.dequeue().id;
                //We already visited this node
                if (this.search_data[curr].end.visited) continue;
                //Goal found if node is on opposite closed list
                if (this.search_data[curr].start.visited) break;

                curr_node_search_data = this.search_data[curr].end;
                popped_from_start_queue = false;
            }

            //Mark this node as visited
            //Put it on the closed list
            curr_node_search_data.visited = true;
            this.mm_visits++;

            //Look through all linked nodes and update if path is shorter
            for (let link of this.node_list[curr].node_links) {
                //Get the correct search data based on whether we are searching from start or end currently
                let linked_node_search_data: SearchData = popped_from_start_queue ?
                    this.search_data[link.dest_node_id].start : this.search_data[link.dest_node_id].end;

                //If in closed set ignore because already evaluated
                if (linked_node_search_data.visited) continue;

                const g_score = curr_node_search_data.given_cost + link.weight;

                //If this path is a more optimal path
                if (g_score < linked_node_search_data.given_cost) {
                    //f = g + h
                    //update g
                    linked_node_search_data.given_cost = g_score;
                    //update priority f = g + h
                    linked_node_search_data.priority = g_score + linked_node_search_data.heuristic;
                    //Mark the node we came from
                    linked_node_search_data.path_node = curr;

                    //Update open list with priority (f = g + h)
                    if (popped_from_start_queue)
                        queue_start.enqueue(new QueueNode(link.dest_node_id, linked_node_search_data.priority));
                    else
                        queue_end.enqueue(new QueueNode(link.dest_node_id, linked_node_search_data.priority));
                }
            }
        }
        //The current node is the meet in the middle node
        //Mark that it has visited from both direction
        //It is on both Closed List 1 and 2
        this.search_data[curr].end.visited = true;
        this.search_data[curr].start.visited = true;

        return this.getmmPath(node_start_id, curr, node_end_id);
    };

//Returns the total cost given a path that was the result of a search
    public getPathCost(path: number[]): number {
        let cost = 0;
        for (let i = 0; i < path.length - 1; i++) {
            //find link
            for (let j of this.node_list[path[i]].node_links) {
                if (j.dest_node_id == path[i + 1])
                    cost += j.weight;
            }
        }
        return cost;
    };

//Memorizes the search data of the last search that was completed
    public memorizeLastSearch(): void {
        this.memorized_a_star_visits = this.a_star_visits;
        this.memorized_dijkstra_visits = this.dijkstra_visits;
        this.memorized_mm_visits = this.mm_visits;

        //This points to search data and should keep it alive
        this.memorized_search_data = this.search_data;
    };

//Returns the search data of the last search that was completed
    public getMemorizedSearchData(): NodeSearchData[] {
        return this.memorized_search_data;
    };

//Returns the number of nodes that were visited (put on closed list) for each of the
//search algorithms after they have been memorized
    public getMemorized_a_star_visits(): number {
        return this.memorized_a_star_visits;
    }

    public getMemorizedDijsktraVisits(): number {
        return this.memorized_dijkstra_visits;
    };

    public getMemorizedmmVisits(): number {
        return this.memorized_mm_visits;
    };

//Returns the node list
    public getNodeList(): ReadonlyArray<Node> {
        return this.node_list;
    };

//Returns number of nodes (vertices) in the graph
    public getNodeCount(): number {
        return this.node_list.length;
    };

//Returns number of node links (edges) in the graph 
    public getNodeLinkCount(): number {
        return this.node_link_count;
    };

//Helpers for Search functions
//Builds and returns the path after a search has been performed

    private getPath(node_start_id: number, node_end_id: number): number[] {
        let path = [];

        while (node_end_id != node_start_id) {
            path.unshift(node_end_id);
            node_end_id = this.search_data[node_end_id].start.path_node;
        }
        return path;
    };

    private getmmPath(node_start_id: number, node_meeting_id: number, node_end_id: number): number[] {
        let path = [];

        //Start at middle and go to start for path
        let curr_node = node_meeting_id;

        //Note: This won't push the start node because it is not part of the path
        while (curr_node != node_start_id) {
            path.unshift(curr_node);
            curr_node = this.search_data[curr_node].start.path_node;
        }

        //Start at middle and go to end for path
        curr_node = node_meeting_id;

        //Skip the meeting node here so we dont push it on the queue twice
        if (curr_node != node_end_id)
            curr_node = this.search_data[curr_node].end.path_node;

        while (curr_node != node_end_id) {
            path.push(curr_node);
            curr_node = this.search_data[curr_node].end.path_node;
        }
        //Push the end node
        path.push(node_end_id);

        return path;
    }

//Clears the search data
    private resetSearchData(): void {
        //Assign new array to not destroy the memorized search data
        this.search_data = Array.from({length:this.node_list.length}, u => (new NodeSearchData()));
    };

//Clears the search data and updates all of the nodes with their heuristic data
//based on the start and end nodes
    private resetSearchDataWithHeuristics(node_start_id: number, node_end_id: number): void {
        //Assign new array to not destroy the memorized search data
        this.resetSearchData();

        for (let [index, data] of this.search_data.entries()) {
            data.start.priority = data.start.heuristic = this.heuristicCostEstimate(index, node_end_id);
            data.end.priority = data.end.heuristic = this.heuristicCostEstimate(index, node_start_id);
        }
    };

//Returns the heurisitic cost which 3D distance between the nodes
    private heuristicCostEstimate(link_node_id: number, node_end_id: number): number {
        return vec3.distance(this.node_list[link_node_id].pos, this.node_list[node_end_id].pos);
    };


//Helpers to initialized Movement graph
//Adds a node at a position for a disk
    private addNode(position: vec3, disk_index: number): number {
        let id = this.node_list.length;
        let data = {} as Node;
        data.pos = vec3.clone(position);
        data.node_id = id;
        data.disk_id = disk_index;
        data.node_links = [];
        this.node_list.push(data);
        return id;
    };

//Adds the link between two nodes with a given weight
//A link is added on both nodes to the other node
    private addLink(disk_id_i: number, node_id_i: number, disk_id_j: number, node_id_j: number, weight: number): void {

        this.node_list[node_id_i].node_links.push(new NodeLink(node_id_i, node_id_j, disk_id_j, weight));
        this.node_list[node_id_j].node_links.push(new NodeLink(node_id_j, node_id_i, disk_id_i, weight));


        this.node_link_count++;
    };

//Returns the cost factor based on the disk type
    static getCostFactor(disk: Disk): number {
        return 1.0 / disk.getSpeedFactor();
    };

//Returns the 3D position a node should have on disk_i if it is adjacent to disk_j
//Will be at the disk_i radius - 0.7 in the direction of disk_j
    private calculateNodePosition(disk_i: Disk, disk_j: Disk): vec3 {
        let dir = vec3.sub(vec3.create(), disk_j.position, disk_i.position);
        vec3.normalize(dir, dir);
        let pos = vec3.scaleAndAdd(vec3.create(), disk_i.position, dir, (disk_i.radius - this.node_offset));
        return pos;
    };

//Returns the weight calculated between two nodes on different disks
    private calculateWeightBetweenDisks(disks: Disk[], node_id_i: number, node_id_j: number): number {
        let disk_i = disks[this.node_list[node_id_i].disk_id];
        let disk_j = disks[this.node_list[node_id_j].disk_id];

        let distance = vec3.distance(this.node_list[node_id_i].pos, this.node_list[node_id_j].pos);

        let weight = distance * ((MovementGraph.getCostFactor(disk_i) + MovementGraph.getCostFactor(disk_j)) / 2.0);
        return weight;
    };

//Returns the weight calculated between to nodes on different disks
    private calculateWeightSameDisk(disks: Disk[], node_id_i: number, node_id_j: number): number {
        let disk = disks[this.node_list[node_id_i].disk_id];

        let node_i = this.node_list[node_id_i];
        let node_j = this.node_list[node_id_j];

        assert(node_i.disk_id === node_j.disk_id);

        let center = vec3.clone(disk.position);
        let di = vec3.sub(vec3.create(), node_i.pos, center);
        let dj = vec3.sub(vec3.create(), node_j.pos, center);

        let angle = vec3.angle(di, dj);

        let arc_length = angle * (disk.radius - this.node_offset);
        let weight = arc_length * MovementGraph.getCostFactor(disk);
        return weight;
    };
}
