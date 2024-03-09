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

  cloneCar() {
    const { brand, motor, color } = this[car];
    return new Car(brand, motor, color);
  }
}
