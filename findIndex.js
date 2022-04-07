"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Find the index of a single value from an array of values, based on criteria defined in a predicate function.
 *
 * @function
 * @name findIndex
 * @param {function} pred A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param {Array<*>} arr An array of values from which to find the index of one particular matching value
 * @returns {number} Either the index of the value from the array that matched the predicate function or negative one (-1, if no match).
 */
function findIndex(pred, arr) {
  var i = -1;
  var len = arr.length;

  while (++i < len) {
    if (pred(arr[i])) return i;
  }

  return -1;
}

var _default = findIndex;
exports.default = _default;
module.exports = exports.default;