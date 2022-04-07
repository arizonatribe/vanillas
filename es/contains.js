"use strict";

exports.__esModule = true;
exports.default = void 0;

var _includes2 = require("./_internal/_includes");

/**
 * Checks if a given value is present in a String OR Array
 *
 * @function
 * @name contains
 * @param {string | number} val A value which may be present in the String/Array
 * @param {Array<*> | string} arr An Array or String which may contain the provided value
 * @returns {boolean} Whether or not the String|Array contains the provided value
 */
function contains(val, arr) {
  return Array.isArray(arr) ? (0, _includes2._includes)(val, arr) : arr.indexOf(val) !== -1;
}

var _default = contains;
exports.default = _default;