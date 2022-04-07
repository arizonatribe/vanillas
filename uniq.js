"use strict";

exports.__esModule = true;
exports.default = void 0;

var _includes2 = require("./_internal/_includes");

/**
 * Filters an array of values down to only those which are unique
 *
 * @function
 * @name uniq
 * @param {Array<*>} list An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */
function uniq(list) {
  var idx = -1;
  var newArr = [];
  var len = list.length;

  while (++idx < len) {
    var val = list[idx];

    if (!(0, _includes2._includes)(val, newArr)) {
      newArr.push(val);
    }
  }

  return newArr;
}

var _default = uniq;
exports.default = _default;
module.exports = exports.default;