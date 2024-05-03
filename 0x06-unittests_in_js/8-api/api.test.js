const request = require('request');
const { expect } = require('chai');

describe('Basic integration testing', () => {
  const url = 'http://localhost:7865';

  it('correct status code', done => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('correct result', done => {
    request(url, (err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
