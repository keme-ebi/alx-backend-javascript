const car = Symbol('car');

export default class Car {
  constructor(brand, motor, color) {
    this[car] = {
      brand,
      motor,
      color,
    };
  }

  get _brand() {
    return this[car].brand;
  }

  get _motor() {
    return this[car].motor;
  }

  get _color() {
    return this[car].color;
  }

  [Symbol.species]() {
    return this.constructor;
  }

  cloneCar() {
    const newObj = this[Symbol.species]();
    return new newObj(this._brand, this._motor, this._color);
  }
}
