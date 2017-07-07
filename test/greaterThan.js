var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;

describe('greaterThan()', function() {
    context('when 3 is compared to 2', function() {
      it('return true', function() {
        var x = 3;
        var y = 2;
        expect(greaterThan(x, y)).to.equal(true);
      });
    });
});