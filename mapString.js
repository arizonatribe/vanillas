"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Applies a mapping function you provide over every character in a given string.
 *
 * @function
 * @name mapString
 * @param {function} fn A mapping function that is invoked on every char in the provided String value
 * @param {string} str A string value to map over
 * @returns {string} A new String value that is the result of the mapping operation over the original string
 */
function mapString(fn, str) {
  var len = str.length;
  var newStr = "";

  for (var i = 0; i < len; i++) {
    newStr += fn(str[i], i, str);
  }

  return newStr;
}

var _default = mapString;
exports.default = _default;
module.exports = exports.default;