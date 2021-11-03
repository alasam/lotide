// Module
const assertEqual = require('./assertEqual');

// findKey function takes an object and uses a callback function to find matching values and return first key with said matchign values.
const findKey = function(object, callback) {
  for (const star in object) { // loop goes over the items in object
    if (callback(object[star]) === true) { // when a value is found, return the key
      return star;
    }
  }
  return undefined;
};

module.exports = findKey;