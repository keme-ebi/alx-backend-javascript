import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // getter and setter for floors
  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  // override evacuation method from Building class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
