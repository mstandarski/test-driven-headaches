function hangman(word, letter) {
    return word.split(letter).length -1;
}

module.exports = hangman;