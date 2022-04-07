"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Checks if a given value is zero or a string representing zero.
 * For string values, what we want is "0" or "0.0" but not "" or " " (which also coerce to zero).
 *
 * @function
 * @name isZero
 * @param {number|string} val A value to verify is zero or a zero-like string.
 * @returns {boolean} Whether or not the given value is zero or a zero-like string.
 */
function isZero(val) {
  return val === 0 || typeof val === "string" && val.trim().length > 0 && +val === 0;
}

var _default = isZero;
exports.default = _default;