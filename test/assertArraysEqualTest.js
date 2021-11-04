// Module
const assertArraysEqual = require('../assertArraysEqual');

// Test

assertArraysEqual (["1", "2", "3"], ["1", "2", "4"]); // should fail

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should pass

assertArraysEqual (["1", "2", "3"], ["1", "2", 3]); // should fail

assertArraysEqual (["1", 2, "3"], ["1", 2, "3"]); // should pass


