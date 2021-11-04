// Module
const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual ({c: "1", d: ["2", 3]}, { d: ["2", 3], c: "3" }); // should fail
assertObjectsEqual ({c: "1", d: ["2", 3]}, { d: ["2", 3], c: "1" }); // should pass