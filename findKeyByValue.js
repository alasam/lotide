// Module
const assertEqual = require('./assertEqual');

// function that finds a value in an object and returns the key it is in.
const findKeyByValue = function(object, value) {
  const arr = Object.keys(object); // assignes keys in object to an array
  for (const item of arr) {
    if (object[item] === value) { // if the value patches the value provided, the key is returned
      return item;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

