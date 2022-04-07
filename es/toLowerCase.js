"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Simple wrapper around String.prototype.toLowerCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 *
 * @function
 * @name toLowerCase
 * @param {string} str A string which may contain uppercase characters
 * @returns {string} A new string that is an lowercase representation of the original string
 */
function toLowerCase(str) {
  return str.toLowerCase();
}

var _default = toLowerCase;
exports.default = _default;