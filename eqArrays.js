// FUNCTION IMPLEMENTATION
// Module
const assertEqual = require('./assertEqual');

// Function eqArrays checks and compares 2 arrays, if they are ideticle it will return as true, if not false
const eqArrays = function(arr1, arr2) {

  // checks if both arrays are the same length; if not then returns false.
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    // loop goes over the each item in the first array
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = eqArrays;