import {Game} from "./game";

let MainLoop = require('./lib/MainLoop/mainloop.js');

let is_mobile;
let document = window.document;

export var gl:WebGL2RenderingContext;
export var canvas:HTMLCanvasElement;
export var keys:boolean[];
export var mouseKeys:boolean[];
export var mouseXTotal:number;
export var mouseYTotal:number;

let fpsCounter = document.getElementById('fpscounter');
let score_element = document.getElementById('score');

export class Main {
    game: Game;


    constructor() {
        canvas = <HTMLCanvasElement> document.getElementById("canvas");
        this.initGL();
        keys  = [];
        mouseKeys = [];
        mouseXTotal  = 0;
        mouseYTotal  = 0;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            is_mobile = true;
        }

        this.init();
    }

    public async init(): Promise<void>{
        await Game.loadAssets();
        this.game = new Game();

        let loading = document.getElementById("loading-container");
        loading.remove();

        //Done loading
        this.initPointerLock();

        //Wait ms so images can load to prevent texture warnings
        setTimeout(h => {
            MainLoop.setBegin(this.begin.bind(this))
                .setUpdate(this.update.bind(this))
                .setDraw(this.draw.bind(this))
                .setEnd(this.end.bind(this))
                .start();

        }, 0);
    }
  
    public static async updateProgress(text: string) {
        let loading = document.getElementById("loading-text");
        loading.innerText = text + "...";
    }

    private initGL() {
        try {
            gl = <WebGL2RenderingContext> canvas.getContext("webgl2");
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
     * @param {Number} delta_s
     *   The amount of time since the last update, in seconds.
     */
    private update(delta_s: number) {
        let delta_ms = delta_s / 1000.0;


        this.game.update(delta_ms);

    }

    /**
     * Called once per frame before update and draw
     */
    private begin(timestamp: number, delta_s: number): void {
        let delta_ms = delta_s / 1000;

        if (is_mobile)
            this.doDemo(delta_ms);
    }


    /**
     * @param {Number} interpolationPercentage
     *   How much to interpolate between frames.
     */
    private draw(interpolationPercentage): void {
        this.game.draw();
        this.resize();
        

    }

    private end(fps, panic): void {
        fpsCounter.textContent = Math.round(fps) + ' FPS';
        score_element.textContent = 'Score: ' + this.game.getScore();
        if (panic) {
            let discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
    }


    private doDemo(delta_ms: number): void {
        this.game.doDemo(delta_ms);
    }

    private resize(): void {
        let min = Math.min(window.innerHeight, window.innerWidth);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }


    private initPointerLock(): void {
        let _canvas: any = canvas;
        // Start by going fullscreen with the element.  Current implementations
        // require the element to be in fullscreen before requesting pointer
        // lock--something that will likely change in the future.
        canvas.requestFullscreen = canvas.requestFullscreen ||
            _canvas.mozRequestFullscreen ||
            _canvas.mozRequestFullScreen || // Older API upper case 'S'.
            canvas.webkitRequestFullscreen;
        canvas.addEventListener('click', canvas.requestFullscreen, false);

        document.addEventListener('fullscreenchange', this.fullscreenChange, false);
        document.addEventListener('mozfullscreenchange', this.fullscreenChange, false);
        document.addEventListener('webkitfullscreenchange', this.fullscreenChange, false);

        document.addEventListener('pointerlockchange', this.pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', this.pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', this.pointerLockChange, false);
    }

    private fullscreenChange = (e) => {
        let document: any = window.document;
        let _canvas: any = canvas;
        if (document.webkitFullscreenElement === canvas ||
            document.mozFullscreenElement === canvas ||
            document.mozFullScreenElement === canvas ||
            document.fullscreenElement === canvas) { // Older API upper case 'S'.
            // Element is fullscreen, now we can request pointer lock
            canvas.requestPointerLock = canvas.requestPointerLock ||
                _canvas.mozRequestPointerLock ||
                _canvas.webkitRequestPointerLock;
            canvas.requestPointerLock();
        }
    };

    private pointerLockChange = (e) => {

        let document: any = window.document;
        if (document.pointerLockElement === canvas ||
            document.mozPointerLockElement === canvas ||
            document.webkitPointerLockElement === canvas) {
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
        mouseXTotal += movementX;
        mouseYTotal += movementY;

    }
    
    public static resetMouse():void{
        mouseYTotal = 0;
        mouseXTotal = 0;
    }

}

window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};

window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};

window.onmousedown = function (e) {
    mouseKeys[e.which] = true;
};

window.onmouseup = function (e) {
    mouseKeys[e.which] = false;
};



new Main();

