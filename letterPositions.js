// Module
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// function that looks at every letter in a string and logs its position in an object.
const letterPositions = function(sentence) {
  const results = {};
  
  // loops through every letter
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") { // if there is a space, we skip
    } else if (results[sentence[i]] === undefined) { // if the letter isnt present in results, we add an array and push the index
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]].push(i); // if letter is already present, add index
    }
  }

  return results;
};

module.exports = letterPositions;