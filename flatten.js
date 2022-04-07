"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isArrayish = _interopRequireDefault(require("./isArrayish"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.
 *
 * @function
 * @name flatten
 * @param {Array<Array<*>>|Array<*>} arr An array of values that may or may not be nested arrays themselves
 * @returns {Array<*>} A new array of values, but with any nested arrays from the original input extracted onto one single (flat) array
 */
function flatten(arr) {
  var newArr = [];
  var i = -1;
  var len = arr.length;

  while (++i < len) {
    var val = arr[i];

    if ((0, _isArrayish.default)(val)) {
      var j = -1;
      var nlen = val.length;

      while (++j < nlen) {
        newArr.push(val[j]);
      }
    } else {
      newArr.push(val);
    }
  }

  return newArr;
}

var _default = flatten;
exports.default = _default;
module.exports = exports.default;