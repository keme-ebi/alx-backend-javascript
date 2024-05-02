const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  it('Tests the function with +ve numbers', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('Tests the function with decimals', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('Tests the function with -ve numbers', function () {
    assert.equal(calculateNumber(-1.3, 5), 4);
    assert.equal(calculateNumber(-1.3, -3.5), -4);
    assert.equal(calculateNumber(-1, 6), 5);
  });
  it('Tests the function with zeros', function () {
    assert.equal(calculateNumber(1, 0), 1);
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(2.4, 0), 2);
    assert.equal(calculateNumber(-3.4, 0), -3);
  });
});
