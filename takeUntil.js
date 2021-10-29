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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    return console.log(`😃Array Assertion Passed😃: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`😡Array Assertion Failed😡:  [${arr1}]  !==  [${arr2}]`);
  }
};
// --------------------------------------------------------------------------------

// takeUntil function adds data from array until a certain condition is met from the callback function
const takeUntil = function(array, callback) {
  let results = [];

  // loop that goes through array
  for (let arr of array) {
    if (callback(arr) === false) { // if arr does match the condition in the callback, it will add the item to the result array
      results.push(arr);
    } else { // if it does match the requirements, it will return whatever is on results at the time.
      return results;
    }
  }
  return results;
};


// TEST

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);