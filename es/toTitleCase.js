"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Transforms a string value into one which is title-cased. The first letter of any word is capitalized.
 *
 * @function
 * @name toTitleCase
 * @param {string} str A string which may contain uppercase characters
 * @returns {string} A new string that is an lowercase representation of the original string
 */
function toTitleCase(str) {
  return str.split(/\s/).map(function (s) {
    return "" + s.charAt(0).toUpperCase() + s.slice(1);
  }).join(" ");
}

var _default = toTitleCase;
exports.default = _default;