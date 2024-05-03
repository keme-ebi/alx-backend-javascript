const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';

describe('home page', () => {
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

describe('cart page', () => {
  it('correct status code when :id is a number', done => {
    request(`${url}/cart/10`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('correst status code when :id is not a number', done => {
    request(`${url}/cart/string`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('correct result when :id is a number', done => {
    request(`${url}/cart/10`, (err, res, body) => {
      expect(body).to.be.equal('Payment methods for cart 10');
      done();
    });
  });
});

describe('available_payments page', () => {
  it('correct status code', done => {
    request(`${url}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('correct result', done => {
    request(`${url}/available_payments`, {json: true}, (err, res, body) => {
      expect(body).to.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});

describe('login page', () => {
  const option = {json: true, body: {userName: 'Betty'}};
  it('correct status code', done => {
    request.post(`${url}/login`, option, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('correct result', done => {
    request.post(`${url}/login`, option, (err, res, body) => {
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
