const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('test the result of getPaymentTokenFromAPI(true)', () => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.have.property('data', 'Successful response from the API');
        done();
      });
  });
});
