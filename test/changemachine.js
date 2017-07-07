var changeMachine = require('../changemachine');
var chai = require('chai');
var expect = chai.expect;

var assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('changeMachine()', function() {
    context('when the amount is 87', function() {
      it('the amount will be [ 4, 0, 1, 2 ]', function() {
        var amount = changeMachine(87);
        expect(amount).to.be.equalTo([ 4, 0, 1, 2 ]);
      });
    });
});