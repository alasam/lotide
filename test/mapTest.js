// Modules
const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

// TEST

const words = ["ground", "control", "to", "major", "tom"];
const wordsNum = ["one", 2, "three", 4, "five"];
const words1 = ["one", "two", "three", "four", "five"]
const words2 = ["oneone", "twotwo", "threethree", "fourfour", "fivefive"]


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