var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('sum()', function() {
    context('when 3 is added to 2', function() {
      it('return 5', function() {
        var x = 3;
        var y = 2;
        expect(sum(x, y)).to.equal(5);
      });
    });
});