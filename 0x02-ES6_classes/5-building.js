export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (
      new.target !== Building &&
      typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  // getter and setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
