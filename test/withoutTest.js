// Modules
const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

// TEST

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3, 4, 5], [2, 4, 6]));
console.log(without(['one', 'two', 'three', 'four', 'five'], ['four', 'two', 6]));