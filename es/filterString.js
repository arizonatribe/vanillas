"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Applies a filtering function you provide over every character in a given string.
 *
 * @function
 * @name filterString
 * @param {function} fn A filtering function that is invoked on every char in the provided String value
 * @param {string} str A string value to filter over
 * @returns {string} A new String value that is the result of the filtering operation over the original string
 */
function filterString(fn, str) {
  var len = str.length;
  var newStr = "";

  for (var i = 0; i < len; i++) {
    newStr += fn(str[i], i, str) ? str[i] : "";
  }

  return newStr;
}

var _default = filterString;
exports.default = _default;