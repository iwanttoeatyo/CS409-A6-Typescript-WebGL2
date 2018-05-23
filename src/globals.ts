import {Renderer} from "./renderers/renderer";
import {LineRenderer} from "./renderers/linerenderer";

export namespace global {
    export var gl: WebGL2RenderingContext;
    export var canvas: HTMLCanvasElement;
    export var keys: Array<boolean> = [];
    export var mouse_keys: Array<boolean> = [];
    export var mouse_x_total: number = 0;
    export var mouse_y_total: number = 0;
    export var renderer: Renderer;
    export var line_renderer: LineRenderer;

    export var TIME_SCALE_COUNT: number = 10;
    export var TIME_SCALES: number[] = [50.0, 20.0, 10.0, 4.0, 2.0, 1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
    export var time_scale_id: number = 5;


    export var EMPTY_TEXTURE: WebGLTexture;

    export async function updateProgressText(text: string): Promise<void> {
        let loading = document.getElementById("loading-text");
        loading.innerText = text + "...";
    }

    export function resetMousePosition(): void {
        mouse_x_total = 0;
        mouse_y_total = 0;
    }
}



