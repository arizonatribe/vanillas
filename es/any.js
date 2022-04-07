"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Check an Array of items (of any type) to see if any item satisfies a given predicate function.
 * Exits when the first match is found.
 *
 * @function
 * @name any
 * @param {function} pred A predicate function to evaluate against each item in a given array
 * @param {Array<*>} arr An array of items to evaluate against the predicate function
 * @returns {boolean} Whether or not any items in the array matched the predicate function
 */
function any(pred, arr) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    if (pred(arr[i])) return true;
  }

  return false;
}

var _default = any;
exports.default = _default;