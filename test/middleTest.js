// Modules
const middle = require(`../middle`);
const assertArraysEquals = require('../assertArraysEqual')

// TESTS

assertArraysEquals(middle([1]), []);
assertArraysEquals(middle([1, 2]), []);

assertArraysEquals(middle([1, 2, 3]), [2]);
assertArraysEquals(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEquals(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);