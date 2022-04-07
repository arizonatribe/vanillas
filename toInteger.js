"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Converts a given value to an Integer and rounds up or down floating point values appropriately.
 * If the values is a `Boolean`, then `true` will yield `1` and `false will yield `0`.
 * If `NaN` then zero will always be returned.
 *
 * @function
 * @name toInteger
 * @param {string} str A string which may be numeric
 * @returns {number} Either the successfully converted number or zero (if it was NaN)
 */
function toInteger(str) {
  if (typeof str === "boolean") {
    return str === true ? 1 : 0;
  }

  var num = parseFloat(str);
  return Number.isNaN(num) ? 0 : Math.round(num);
}

var _default = toInteger;
exports.default = _default;
module.exports = exports.default;