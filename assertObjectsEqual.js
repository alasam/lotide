// Module
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const eqObjects = require(`./eqObjects`);

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`😃Object Assertion Passed😃: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    return console.log(`😡Object Assertion Failed😡: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
