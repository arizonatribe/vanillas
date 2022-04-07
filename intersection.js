"use strict";

exports.__esModule = true;
exports.default = void 0;

var _includes2 = require("./_internal/_includes");

/**
 * Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists
 *
 * @function
 * @name intersection
 * @param {Array<string> | Array<number>} arr1 An Array of Strings/Numbers
 * @param {Array<string> | Array<number>} arr2 An Array of Strings/Numbers
 * @returns {Array<string> | Array<number>} The values in common between the two lists
 */
function intersection(arr1, arr2) {
  var diff = [];
  var len1 = arr1.length;
  var len2 = arr2.length;
  if (len1 === 0 || len2 === 0) return diff;

  for (var i = 0; i < len1; i++) {
    var val = arr1[i];

    if ((0, _includes2._includes)(val, arr2)) {
      diff.push(val);
    }
  }

  for (var j = 0; j < len2; j++) {
    var _val = arr2[j];

    if ((0, _includes2._includes)(_val, arr1) && !(0, _includes2._includes)(_val, diff)) {
      diff.push(_val);
    }
  }

  return diff;
}

var _default = intersection;
exports.default = _default;
module.exports = exports.default;