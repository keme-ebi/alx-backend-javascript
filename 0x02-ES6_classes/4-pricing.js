import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  // getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  // a method that returns the attributes
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // a static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
