import {BasicModel} from "./models/basicmodel";

let OBJ = require('../lib/OBJ/index.js');
import {Mesh} from "../lib/OBJ/index.js";
import {SkyboxModel} from "./models/skyboxmodel";

export class Skybox {
    model: SkyboxModel;

    constructor(gl: WebGL2RenderingContext, mesh: Mesh) {
        this.model = new SkyboxModel(mesh);
        this.model.init(gl)
    }


    draw(gl: WebGL2RenderingContext) {
        this.model.draw(gl);


        
    }



    
    static async load(): Promise<Object> {
        return OBJ.downloadModels([
            {
                name: 'Skybox',
                obj: "/assets/models/environment/skybox/Skybox.obj",
                mtl: "/assets/models/environment/skybox/Skybox.mtl"
            }
        ]);
    }
}