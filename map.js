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
// --------------------------------------------------------------------------------

const words = ["ground", "control", "to", "major", "tom"];
const wordsNum = ["one", 2, "three", 4, "five"];
const words1 = ["one", "two", "three", "four", "five"]
const words2 = ["oneone", "twotwo", "threethree", "fourfour", "fivefive"]

// Function stored in map outputs a new array with only the first letter of each string
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(wordsNum, word => word[0]);
console.log(results1);

const results3 = map(words1, word => word[0]);
console.log(results1);

const results4 = map(words2, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["o", , "t", , "f"]);
assertArraysEqual(results3, results4);