// Modules
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// --------------------------------------------------------------------------------

// Function stored in map outputs a new array with only the first letter of each string
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;