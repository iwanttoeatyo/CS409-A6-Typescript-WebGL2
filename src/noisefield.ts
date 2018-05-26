interface Vec2 {
    x: number;
    y: number;
}

export class Noisefield {
    GRID_SIZE: number;
    SEED_X1: number;
    SEED_X2: number;
    SEED_Y1: number;
    SEED_Y2: number;
    SEED_Q0: number;
    SEED_Q1: number;
    SEED_Q2: number;
    amplitude: number;

    constructor(
        grid_size: number,
        amplitude: number,
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        q0: number,
        q1: number,
        q2: number
    ) {
        this.GRID_SIZE = grid_size;
        this.amplitude = amplitude;
        this.SEED_X1 = x1;
        this.SEED_X2 = x2;
        this.SEED_Y1 = y1;
        this.SEED_Y2 = y2;
        this.SEED_Q0 = q0;
        this.SEED_Q1 = q1;
        this.SEED_Q2 = q2;
    }

    private pseudorandom(x: number, y: number) {
        let n = this.SEED_X1 * x + this.SEED_Y1 * y;
        let quad_term = this.SEED_Q2 * n * n + this.SEED_Q1 * n + this.SEED_Q0;
        return quad_term + this.SEED_X2 * x + this.SEED_Y2 * y;
    }

    private fade(n: number): number {
        //result = (1 - cos(n * 3.14159265f)) * 0.5f;
        //result = -2 * (n*n*n) + 3 * (n*n);
        let result = 6 * (n * n * n * n * n) - 15 * (n * n * n * n) + 10 * (n * n * n);
        //result = n;
        return result;
    }

    private lattice(x: number, y: number): Vec2 {
        let value = this.pseudorandom(x, y);
        let radians = value * 2 * Math.PI;
        return { x: Math.cos(radians), y: Math.sin(radians) };
    }

    public perlineNoise(x: number, y: number) {
        let x0 = Math.floor(x / this.GRID_SIZE);
        let y0 = Math.floor(y / this.GRID_SIZE);

        let x_frac = x / this.GRID_SIZE - x0;
        let y_frac = y / this.GRID_SIZE - y0;

        let x1 = x0 + 1;
        let y1 = y0 + 1;

        let lattice00: Vec2 = this.lattice(x0, y0);
        let lattice01: Vec2 = this.lattice(x0, y1);
        let lattice10: Vec2 = this.lattice(x1, y0);
        let lattice11: Vec2 = this.lattice(x1, y1);

        let direction00: Vec2 = { x: -x_frac, y: -y_frac };
        let direction01: Vec2 = { x: -x_frac, y: 1 - y_frac };
        let direction10: Vec2 = { x: 1 - x_frac, y: -y_frac };
        let direction11: Vec2 = { x: 1 - x_frac, y: 1 - y_frac };

        let value00 = this.dotProduct(lattice00, direction00);
        let value01 = this.dotProduct(lattice01, direction01);
        let value10 = this.dotProduct(lattice10, direction10);
        let value11 = this.dotProduct(lattice11, direction11);

        let x_fade1 = this.fade(x_frac);
        let y_fade1 = this.fade(y_frac);
        let x_fade0 = 1 - x_fade1;
        let y_fade0 = 1 - y_fade1;

        let value0 = value00 * y_fade0 + value01 * y_fade1;
        let value1 = value10 * y_fade0 + value11 * y_fade1;

        let value = value0 * x_fade0 + value1 * x_fade1;

        let result = value * this.amplitude;
        return result;
    }

    private dotProduct(a: Vec2, b: Vec2): number {
        return a.x * b.x + a.y * b.y;
    }
}
