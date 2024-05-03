const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  it('Tests if type is SUM', function () {
    expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
  });
  it('Tests if type is SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 4, 3)).to.be.equal(1);
    expect(calculateNumber('SUBTRACT', 5.2, 3)).to.be.equal(2);
  });
  it('Tests if type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 10, 5)).to.be.equal(2);
    expect(calculateNumber('DIVIDE', 8, 4)).to.be.equal(2);
  });
  it('Tests if type is DIVIDE with zero', function () {
    expect(calculateNumber('DIVIDE', 1, 0)).to.be.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 0)).to.be.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 2)).to.be.equal(0);
  });
});
