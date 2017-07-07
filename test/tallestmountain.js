var tallestMountain = require('../tallestmountain');
var chai = require('chai');
var expect = chai.expect;

describe('tallestMountain()', function() {
    context('when the mountain heights are 29029, 20310, 19341, 28251', function() {
      it('returns 29029 as the highest mountain', function() {
        var mountain = tallestMountain ([29029, 20310, 19341, 28251]);
        expect(mountain).to.equal(29029);
      });
    });
    context('when the mountain heights are 99999, 88888, 77777, 66666', function() {
      it('returns 99999 as the highest mountain', function() {
        var mountain = tallestMountain ([99999, 88888, 77777, 66666]);
        expect(mountain).to.equal(99999);
      });
    });
  });