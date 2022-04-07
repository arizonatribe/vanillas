"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Inspects two values to see if they are strictly equal, meaning no type coercion or deepyly nested equality checks are performed.
 * A very simple triple equals is all that is used.
 *
 * @function
 * @name isStrictEqual
 * @param {*} firstVal A value (of any type)
 * @param {*} secondVal A value (of any type)
 * @returns {boolean} Whether or not the two values are strictly equal
 */
function isStrictEqual(firstVal, secondVal) {
  return firstVal === secondVal;
}

var _default = isStrictEqual;
exports.default = _default;