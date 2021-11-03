// Module
const assertEqual = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

//------------------------------------------------------------------------------------------------------

// Tried my own way of approaching it

// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   let newObj = {}; //new object to output

//   // loops through itemsToCount and adds those with the value to True to the new object
//   for (let items in itemsToCount) {
//     if (itemsToCount[items] === true) {
//       newObj[items] = 0;
//     }
//   }

//   // Loops through the items toAdd and adds those that come up in the tally in newObj
//   for (let toAdd in newObj) {
//     for (let i in allItems) {
//       if (allItems[i] === toAdd) {
//         newObj[toAdd] = newObj[toAdd] + 1
//       }
//     }
//   }

//   // Loops through newObj and finds those with a value of 0. If found, deletes the key from the object
//   for (let toRemove in newObj) {
//     if (newObj[toRemove] === 0) {
//       delete newObj[toRemove]
//     }
//   }
//   return newObj;
//}

//-------------------------------------------------------------------------------------------------------------

module.exports = countOnly;
