// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // if actual is equal to expected, then we will return a success message to the console
  if (actual === expected) {
    return console.log(`😃Assertion Passed😃: ${actual} === ${expected}`);
    // if actual is not equal to expected, we will return a failed message to console
  } else {
    return console.log(`😡Assertion Failed😡:  ${actual}  !==  ${expected}`);
  }
};

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

console.log(countLetters("lesupercalifragilisticexpialidocioustter"));