//Return random signed int

export namespace Random {
    export function randi(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    export function randf(min, max) {
        return Math.random() * (max - min) + min;
    }
}
