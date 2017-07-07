var cherokeeHare = require('../cherokeehare');
var chai = require('chai');
var expect = chai.expect;

describe('cherokeeHare()', function() {
    context('when the starting population is 13', function() {
      it('the amount will be 19.033300000000004', function() {
        var startingPopulation = 13//keeps track of initial pop of hares
        var birthRate = 0.1//what % are born each week
        var numberOfWeeks = 4//how long we have been trying to simulate
        expect(cherokeeHare(startingPopulation, birthRate, numberOfWeeks)).to.equal(19.033300000000004);
      });
    });
  });