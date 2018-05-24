import {Game} from "./game";
import {global} from "./globals";
import {BasicModelShader} from "./basicmodelshader";
import {Renderer} from "./renderers/renderer";
import {LineRenderer} from "./renderers/linerenderer";
import keys = global.keys;
import {SphereRenderer} from "./renderers/sphererenderer";

let MainLoop = require('./lib/MainLoop/mainloop.js');


let is_mobile;
let document = window.document;
let gl: WebGL2RenderingContext = global.gl;

let fps_element = document.getElementById('fpscounter');
let ups_element = document.getElementById('upscounter');
let score_element = document.getElementById('score');


export class Main {
    game: Game;


    constructor() {
        global.canvas = <HTMLCanvasElement> document.getElementById("canvas");
        this.initGL();

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            is_mobile = true;
        }

        this.init();
    }

    public async init(): Promise<void> {

        let shader = new BasicModelShader(gl, require('shaders/basicmodel.vert'), require("shaders/basicmodelmanylights.frag"));
        global.renderer = new Renderer(shader);
        global.line_renderer = new LineRenderer();
        
        global.sphere_renderer = new SphereRenderer();
        await global.sphere_renderer.load();

        this.game = new Game();
        await this.game.init();

        let loading = document.getElementById("loading-container");
        loading.remove();

        //Done loading
        this.initPointerLock();

        MainLoop.setSimulationTimestep(1000 / 60);
        MainLoop.setMaxAllowedFPS(1000);
        MainLoop.setBegin(this.begin.bind(this))
            .setUpdate(this.update.bind(this))
            .setDraw(this.draw.bind(this))
            .setEnd(this.end.bind(this))
            .start();

    }

    private initGL() {
        try {
            global.gl = <WebGL2RenderingContext> global.canvas.getContext("webgl2");
            gl = global.gl;
        } catch (e) {
            throw "GL init error:\n" + e;
        }
        if (!gl) {
            alert("WebGL is not available on your browser.")
        }
        gl.enable(gl.SAMPLE_COVERAGE);
        gl.sampleCoverage(1, false);
        //Set the background color before we load any assets
        gl.clearColor(0.2, 0.3, 0.3, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);


        this.resize();
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }


    /**
     * @param {Number} delta_ms
     *   The amount of time since the last update, in milliseconds.
     */
    private update(delta_ms: number) {
        if (is_mobile)
            this.doDemo(delta_ms);
        this.game.update(delta_ms);
    }

    /**
     * @param {number} delta_ms: The amount of time since last begin call
     * Called as fast as possible based on max allowed fps
     */
    private begin(timestamp: number, delta_ms: number): void {
        MainLoop.setTimeScale(global.TIME_SCALES[global.time_scale_id]);
        this.game.updateAnimations(delta_ms);

    }


    /**
     * @param {Number} interpolationPercentage
     *   How much to interpolate between frames.
     */
    private draw(interpolationPercentage): void {
        this.game.draw();
        this.resize();
    }

    private end(fps, ups, panic): void {
        fps_element.textContent = Math.round(fps) + ' FPS';
        ups_element.textContent = Math.round(ups) + ' UPS';
        score_element.textContent = 'Score: ' + this.game.getScore();
        if (panic) {
            let discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
    }

    public static keyboard(key: number, is_down: boolean) {

        if (is_down)
            switch (key) {
                case 107: {
                    if (!keys[107]) {
                        global.time_scale_id--;
                        if (global.time_scale_id < 0) global.time_scale_id = 0;
                    }
                    break;
                }
                case 109: {
                    if (!keys[109]) {
                        global.time_scale_id++;
                        if (global.time_scale_id > global.TIME_SCALE_COUNT) global.time_scale_id = global.TIME_SCALE_COUNT;
                    }
                    break;
                }
            }
        keys[key] = is_down;
    }

    private doDemo(delta_ms: number): void {
        this.game.doDemo(delta_ms);
    }

    private resize(): void {
        global.canvas.width = window.innerWidth;
        global.canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }

    private initPointerLock(): void {
        let _canvas: any = global.canvas;
        // Start by going fullscreen with the element.  Current implementations
        // require the element to be in fullscreen before requesting pointer
        // lock--something that will likely change in the future.
        _canvas.requestFullscreen = _canvas.requestFullscreen ||
            _canvas.mozRequestFullscreen ||
            _canvas.mozRequestFullScreen || // Older API upper case 'S'.
            _canvas.webkitRequestFullscreen;
        _canvas.addEventListener('click', _canvas.requestFullscreen, false);

        document.addEventListener('fullscreenchange', this.fullscreenChange, false);
        document.addEventListener('mozfullscreenchange', this.fullscreenChange, false);
        document.addEventListener('webkitfullscreenchange', this.fullscreenChange, false);

        document.addEventListener('pointerlockchange', this.pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', this.pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', this.pointerLockChange, false);
    }

    private fullscreenChange = (e) => {
        let document: any = window.document;
        let _canvas: any = global.canvas;
        if (document.webkitFullscreenElement === _canvas ||
            document.mozFullscreenElement === _canvas ||
            document.mozFullScreenElement === _canvas ||
            document.fullscreenElement === _canvas) { // Older API upper case 'S'.
            // Element is fullscreen, now we can request pointer lock
            _canvas.requestPointerLock = _canvas.requestPointerLock ||
                _canvas.mozRequestPointerLock ||
                _canvas.webkitRequestPointerLock;
            _canvas.requestPointerLock();
        }
    };

    private pointerLockChange = (e) => {

        let document: any = window.document;
        if (document.pointerLockElement === global.canvas ||
            document.mozPointerLockElement === global.canvas ||
            document.webkitPointerLockElement === global.canvas) {
            document.addEventListener("mousemove", this.moveCallback, false);
        }
        else {
            document.removeEventListener("mousemove", this.moveCallback, false);
        }
    };

    private moveCallback = (e) => {
        let movementX = e.movementX ||
            e.mozMovementX ||
            e.webkitMovementX ||
            0;
        let movementY = e.movementY ||
            e.mozMovementY ||
            e.webkitMovementY ||
            0;
        global.mouse_x_total += movementX;
        global.mouse_y_total += movementY;

    }


}

window.onkeydown = function (e) {
    Main.keyboard(e.which || e.keyCode || 0, true);
}

window.onkeyup = function (e) {
    Main.keyboard(e.which || e.keyCode || 0, false);
};

window.onmousedown = function (e) {
    global.mouse_keys[e.which] = true;
};

window.onmouseup = function (e) {
    global.mouse_keys[e.which] = false;
};


new Main();

