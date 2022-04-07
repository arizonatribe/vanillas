"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Checks if a given value is numeric
 *
 * @function
 * @name isNumber
 * @param {number} val A value to verify is a number
 * @returns {boolean} Whether or not the given value is a number
 */
function isNumber(val) {
  return typeof val === "number" && Number.isFinite(val);
}

var _default = isNumber;
exports.default = _default;