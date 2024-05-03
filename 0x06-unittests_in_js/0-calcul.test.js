const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  it('Tests the function', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(-1.3, 5), 4);
    assert.strictEqual(calculateNumber(-1.3, -3.5), -4);
    assert.strictEqual(calculateNumber(-1, 6), 5);
  });
  it('rounds the first argument', function () {
    assert.strictEqual(calculateNumber(1, 0), 1);
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(2.4, 0), 2);
    assert.strictEqual(calculateNumber(-3.4, 0), -3);
  });
  it('rounds the second argument', function () {
    assert.strictEqual(calculateNumber(0, 2), 2);
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.6), 4);
    assert.strictEqual(calculateNumber(0, 1.7), 2);
  });
});
