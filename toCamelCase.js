"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Transforms a string value into one which is hyphenated.
 * Hyphens and underscores are removed and interpred as the boundaries for new words.
 * The first letter of each new word - not preceded by whitespace - is capitalized.
 *
 * @function
 * @name toCamelCase
 * @param {string} str A string which may contain underscores and hyphens and/or may be title-cased.
 * @returns {string} A new string that is without hyphens and underscores and the first letter of every new word boundary is capitalized, unless preceded by whitespace
 */
function toCamelCase(str) {
  return [str.charAt(0).toLowerCase(), str.slice(1).replace(/[_-]+[a-z]/ig, function (w) {
    return w.replace(/[_-]/g, "").toUpperCase();
  }).replace(/\s+[A-Z]/g, function (w) {
    return w.toLowerCase();
  })].join("");
}

var _default = toCamelCase;
exports.default = _default;
module.exports = exports.default;