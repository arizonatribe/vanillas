"use strict";

exports.__esModule = true;
exports.default = void 0;

var _includes2 = require("./_internal/_includes");

/**
 * Compares two lists of Strings/Numbers and returns the values that are different between the two lists
 *
 * @function
 * @name difference
 * @param {Array<string>|Array<number>} arr1 An Array of Strings
 * @param {Array<string>|Array<number>} arr2 An Array of Strings
 * @returns {Array<string>|Array<number>} An array of values that are different between the two lists
 */
function difference(arr1, arr2) {
  var diff = [];
  var len1 = arr1.length;
  var len2 = arr2.length;

  if (len1 === 0 && len2 === 0) {
    return diff;
  } else if (len1 === 0) {
    return arr2;
  } else if (len2 === 0) {
    return arr1;
  }

  for (var i = 0; i < len1; i++) {
    var val = arr1[i];

    if (!(0, _includes2._includes)(val, arr2)) {
      diff.push(val);
    }
  }

  return diff;
}

var _default = difference;
exports.default = _default;
module.exports = exports.default;