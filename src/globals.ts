import {Renderer} from "./renderer";

export namespace global {
    export var gl: WebGL2RenderingContext;
    export var canvas: HTMLCanvasElement;
    export var keys: Array<boolean> = [];
    export var mouse_keys: Array<boolean> = [];
    export var mouse_x_total: number = 0;
    export var mouse_y_total: number = 0;
    export var renderer: Renderer;

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



