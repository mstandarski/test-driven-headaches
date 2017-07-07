var palindrome = require('../palindromes');
var chai = require('chai');
var expect = chai.expect;

describe('palindrome()', function() {
    context('when the word is radar', function() {
      it('returns this word is a palindrome', function() {
        var testWord = palindrome("radar");
        expect(testWord).to.equal(true);
      });
    });
    context('when the word is michael', function() {
      it('returns this word is not a palindrome', function() {
        var testWord = palindrome("michael");
        expect(testWord).to.equal(false);
      });
    });
  });