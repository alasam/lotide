// Function eqArrays checks and compares 2 arrays, if they are ideticle it will return as true, if not false
const eqArrays = function(arr1, arr2) {

  // checks if both arrays are the same length; if not then returns false.
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    // first loop goes over the each item in the first array
    for (let i = 0; i < arr1.length; i++) {
      // second loop goes and compares if each val
      for (let x = 0; x < arr2.length; x++)
        if (arr1[i] !== arr2[i]) {
          return false;
        }
    }
  }
  return true;
};

// function checks and compares if 2 arrays are identical
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    return console.log(`😃Array Assertion Passed😃: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`😡Array Assertion Failed😡:  [${arr1}]  !==  [${arr2}]`);
  }
};

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

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));