"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Creates a numeric hash code (integer) between 1 and the specified `limit`.
 * The sum of all the string char codes is the dividend and the limit is the divisor, but the _remainder_ (integer) will be the actual hash code.
 *
 * @function
 * @name toHashCode
 * @param {string|number} val A string or numeric value for which to generate the hash code
 * @param {number} [limit=26] The limit of the range of hash code values (this will be the divisor in the modulus division)
 * @returns {number} A numeric representation of the characters in the provided string (will return zero if a string|number is not provided as input)
 */
function toHashCode(val, limit) {
  if (limit === void 0) {
    limit = 26;
  }

  var sum = 0;
  var strVal = typeof val === "string" ? val : typeof val === "number" ? "" + val : "";

  for (var i = 0, len = strVal.length; i < len; i++) {
    sum += strVal.charCodeAt(i);
  }

  return sum % limit;
}

var _default = toHashCode;
exports.default = _default;
module.exports = exports.default;