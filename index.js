// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require(`./assertArraysEqual`);
const assertEqual = require(`./assertEqual`);
const assertObjectsEqual = require(`./assertObjectsEqual`);
const countLetters = require(`./countLetters`);
const eqArrays = require(`./eqArrays`);
const eqObjects = require(`./eqObjects`);
const findKey = require(`./findKey`);
const findKeyByValue = require(`./findKeyByValue`);
const letterPositions = require(`./letterPositions`);
const map = require(`./map`);
const takeUntil = require(`./takeUntil`);
const without = require(`./without`);
const countOnly = require(`./countOnly`);

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  countOnly: countOnly,
  head:   head,
  tail:   tail,
  middle: middle
};