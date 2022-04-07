"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Retrieves the last value from an Array
 *
 * @function
 * @name last
 * @param {Array<*>} arr An array of any kind of values
 * @returns {*} The last value from a given array
 */
function last(arr) {
  var arrlen = arr.length || 0;
  return (arr || [])[arrlen - 1];
}

var _default = last;
exports.default = _default;
module.exports = exports.default;