// Module
const assertObectsEqual = require('../assertObjectsEqual');
const assertEqual = require('../assertEqual');

assertObjectsEqual ({c: "1", d: ["2", 3]}, { d: ["2", 3], c: "3" });