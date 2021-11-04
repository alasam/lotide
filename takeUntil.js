// Modules
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = takeUntil;