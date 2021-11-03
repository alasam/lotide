// Module
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');


//---------------------------------------------------------------------------------------

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Checks to see if object lengths are the same, if not return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Loop going through each key
  for (key1 of Object.keys(object1)) {
    if (Array.isArray(object1[key1]) === true) { // if key is an array, it will go through eqArray to confirm if arrays matching
      if (eqArrays(object1[key1], object2[key1]) === false) {
        return false
      }
    } else if (object1[key1] !== object2[key1]){ // if value if key in object1 and object 2 do not match, return as false
      return false
    }
  }

  // return true if all passes
  return true;
};

module.exports = eqObjects;