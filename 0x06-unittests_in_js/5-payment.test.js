const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () {
  let spy;
  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function() {
    spy.restore();
  });
  it('first test calls function with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 120');
  });
  it('second test calls function with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 20');
  });
});
