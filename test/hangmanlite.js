var hangman = require('../hangmanlite');
var chai = require('chai');
var expect = chai.expect;

describe('hangman()', function() {
    context('when the letter m appears in Michael', function() {
      it('this should say one', function() {
        var word = "michael";
        letter = "m";
        expect(hangman(word, letter)).to.equal(1);
      });
    });
});