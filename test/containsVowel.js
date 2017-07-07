var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;
var assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('containsVowel()', function() {
    context('when a word contains a vowel', function() {
      it('return true', function() {
        var word = containsVowel("Michael");
        expect(word).to.be.containingAnyOf(["a", "e", "i", "o", "u"])
      });
    });
    context('when a word contains a vowel', function() {
      it('return true', function() {
        var word = containsVowel("hrmph");
        expect(word).to.be.containingAnyOf(["a", "e", "i", "o", "u"])
      });
    });
});