import {DiskModel} from "./diskmodel";
import {Disk} from "./disk";


export class DiskReader {



    static createDisksArray(gl:WebGL2RenderingContext, worldData: string, model: DiskModel): Disk[] {
        const lines = worldData.split('\n');
        let disks: Disk [] = [];
        
        if (lines[0] !== "DISK version 1") alert("Can't read Disk World File");
        let count = parseInt(lines[2]);
        lines.splice(0, 2);
        for (let i = 0; i < count; i++) {
            let element = lines[i];
            element.split(" ");
            disks.push(new Disk(model, parseFloat(element[2]), parseFloat(element[0]), 0, parseFloat(element[1])));
        }
        return disks;
    }

    static createDisksInstanced(gl:WebGL2RenderingContext, worldData: string, model: DiskModel): void {
        const lines = worldData.split('\n');

        let offsets = [];
        let scales = [];
        
        if (lines[0].indexOf("version 1") == -1) console.warn("Can't read Disk World File");
        
        let count = parseInt(lines[2]);
        lines.splice(0, 3);
        for (let i = 0; i < count; i++) {
            let elements = lines[i].split("\t");
            offsets.push(parseFloat(elements[0]), 0, parseFloat(elements[1]));
            scales.push(parseFloat(elements[2]), 1, parseFloat(elements[2]));
        }

        model.generateInstancingOffsetScale(gl,offsets, scales);
    }
    
    static getWorldRadius(worldData:string){
        const lines = worldData.split('\n');
       return parseFloat(lines[1]);
    }
}