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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Checks to see if object lengths are the same, if not return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Loop going through each key
  for (key1 of Object.keys(object1)) {
    if (Array.isArray(object1[key1]) === true) { // if key is an array, it will go through eqArray to confirm if arrays matching
      if (eqArrays(object1[key1], object2[key1]) === false) {
        return false
      }
    } else if (object1[key1] !== object2[key1]){ // if value if key in object1 and object 2 do not match, return as false
      return false
    }
  }

  // return true if all passes
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`😃Object Assertion Passed😃: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    return console.log(`😡Object Assertion Failed😡: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};


assertObjectsEqual ({c: "1", d: ["2", 3]}, { d: ["2", 3], c: "3" });
