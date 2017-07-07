var average = require('../average');
var chai = require('chai');
var expect = chai.expect;

describe('average()', function() {
    context('when 10, 4, 1 is divided by 3', function() {
      it('return 5', function() {
        expect(average(10, 4, 1)).to.equal(5);
      });
    });
});