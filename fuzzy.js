"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Performs a fuzzy search on a list of strings or objects.
 * If a list of objects, provided the prop extraction function so the search can find the correct field(s)
 * This is heavily inspired by (most of) the algorithm used by [Matt York's](https://github.com/myork/fuzzy) fuzzy search function,
 * however several features were not carried over and his implementation of that alrgorithm has been significantly changed to achieve a 25% speed improvement.
 * Please see his original work - called [fuzzy](https://www.npmjs.com/package/fuzzy) MIT - if you need some of his additional options.
 *
 * @function
 * @name fuzzy
 * @param {function} propFn A function which will extract all the fields which you wish to fuzzy search on. Omit if the list is a list of strings
 * @param {string} needle The search value itself
 * @param {boolean} [caseSensitive=false] Whether or not to perform a case-sensitive search
 * @param {Array<string> | Array<object>} arr An array of string values or objects which have string values to be searched on
 * @returns {Array<string> | Array<object>} The filtered list of search results
 */
function fuzzy(propFn, needle, caseSensitive, arr) {
  if (arr == null || !Array.isArray(arr) || arr.length === 0) return [];
  if (typeof needle !== "string" || !needle.trim().length) return arr;
  var scores = [];
  var len = arr.length;
  var needleLen = needle.length;
  var idx = len;
  var noodle = caseSensitive ? needle : needle.toLowerCase();
  var extractFn = typeof propFn !== "function" && caseSensitive ? function (v) {
    return v;
  } : typeof propFn !== "function" ? function (v) {
    return v.toLowerCase();
  } : caseSensitive ? propFn : function (v) {
    return propFn(v).toLowerCase();
  };

  while (--idx) {
    var score = 0;
    var val = extractFn(arr[idx]);
    var valLen = val.length;

    if (noodle === val) {
      scores.push([Infinity, idx]);
    } else if (valLen !== 0) {
      var valIdx = 0;
      var matchedInNeedleIdx = 0;
      var numOfCharsMatchedAtOnce = 0;

      while (valIdx < valLen) {
        if (noodle[matchedInNeedleIdx] === val[valIdx]) {
          matchedInNeedleIdx++;
          numOfCharsMatchedAtOnce++;
        } else {
          numOfCharsMatchedAtOnce = 0;
        }

        score += numOfCharsMatchedAtOnce;
        valIdx++;
      }

      if (matchedInNeedleIdx === needleLen) {
        scores.push([score, idx]);
      }
    }
  }

  return scores.sort(function (a, b) {
    return b[0] - a[0] || a[1] - b[1];
  }).map(function (_ref) {
    var _ = _ref[0],
        index = _ref[1];
    return arr[index];
  });
}

var _default = fuzzy;
exports.default = _default;
module.exports = exports.default;