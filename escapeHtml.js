"use strict";

exports.__esModule = true;
exports.default = void 0;
var escapeChars = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",

  /* eslint-disable-next-line quotes */
  '"': "&quot;",
  "'": "&#39;"
};
/**
 * Converts ampersands, angle brackets, apostrophes and blockquotes to their HTML encoded equivalents
 *
 * @function
 * @name escapeHtml
 * @param {string} val A string values to escape
 * @returns {string} The original value (converted to string) and with any of the unallowed characters properly escaped (null/undefined values are converted to '')
 */

function escapeHtml(val) {
  return /[&<>"']/.test("" + val) ? ("" + val).replace(/[&<>"']/g, function (key) {
    return escapeChars[key];
  }) : "" + (val == null ? "" : val);
}

var _default = escapeHtml;
exports.default = _default;
module.exports = exports.default;