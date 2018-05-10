import {BasicModel} from "./models/basicmodel";

let OBJ = require('../lib/OBJ/index.js');
import {Mesh} from "../lib/OBJ/index.js";
import {SkyboxModel} from "./models/skyboxmodel";

export class Skybox {
    static model: SkyboxModel;

    constructor(gl: WebGL2RenderingContext) {
        Skybox.model.init(gl);
    }
    
    public draw(gl:WebGL2RenderingContext){
        Skybox.model.draw(gl);
    }


}