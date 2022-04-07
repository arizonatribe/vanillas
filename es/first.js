"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Extracts the first value of an array of values.
 *
 * @function
 * @name first
 * @param {Array<*>} val An array of values from which to extract the first value
 * @returns {*} The value at the first index of the supplied array (which may be undefined)
 */
function first(val) {
  return (val || [])[0];
}

var _default = first;
exports.default = _default;