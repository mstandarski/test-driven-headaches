function palindrome(word) {
  
  return (word == word.split("").reverse().join(""));

};

module.exports = palindrome;