// Module
const assertEqual = require('./eqArrays');


// Function counts each letter of a word and puts the letters and the amount in an object
const countLetters = function(word) {
  let answer = {};

  // loops through each letter in word
  for (const letter of word) {
    if (answer[letter]) { // if the letter is already present in answer, adds an increment of 1
      answer[letter] += 1;
    } else { // if not present in word, adds new key
      answer[letter] = 1;
    }
  }

  return answer;
};

module.exports = countLetters;