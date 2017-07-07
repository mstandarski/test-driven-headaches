var secondLargest = require('../secondLargest');
var chai = require('chai');
var expect = chai.expect;

describe('secondLargest()', function() {
    context('when the array is [20, 120, 111, 215, 54, 78]', function() {
      it('the second largest number is 120', function() {
        var array = [20, 120, 111, 215, 54, 78];
        expect(secondLargest(array)).to.equal(120);
      });
    });
});