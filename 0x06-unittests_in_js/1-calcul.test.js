const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  it('Tests if type is SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('Tests if type is SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 3), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 3), 2);
  });
  it('Tests if type is DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
  });
  it('Tests if type is DIVIDE with zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 2), 0);
  });
});
