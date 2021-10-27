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
}

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))