export class Pointer<T> {
    private _value: T;

    constructor(object?: T) {
        this._value = object;
    }

    set value(object: T) {
        this._value = object;
    }

    get value() {
        return this._value;
    }
}
