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

const assertArraysEqual = function (arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    return console.log(`😃Array Assertion Passed😃: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`😡Array Assertion Failed😡:  [${arr1}]  !==  [${arr2}]`);
  }
};

assertArraysEqual (["1", "2", "3"], ["1", "2", "4"]);