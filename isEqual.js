"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isObject = _interopRequireDefault(require("./isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if two provided values are deeply equal.
 * If Objects or Arrays (or Array-like values) are provided, they are inspected recursively.
 * Primitive values are checked to see if they are stricly equal (ie triple equals; no type coercion).
 *
 * @function
 * @name isEqual
 * @param {*} firstVal A value which may be null, undefined, a JavaScript primitive value, an array of values, an array-like value, or an object
 * @param {*} secondVal A value which may be null, undefined, a JavaScript
 * @returns {boolean} Whether or not the two values are deeply equal
 */
function isEqual(firstVal, secondVal) {
  if (firstVal === secondVal) return true;
  if (typeof firstVal !== typeof secondVal) return false;
  if (typeof firstVal.length === "number" && typeof secondVal.length === "number" && firstVal.length !== secondVal.length) return false;

  if (typeof firstVal.every === "function" && typeof secondVal.every === "function") {
    return firstVal.every(function (v, i) {
      return isEqual(v, secondVal[i]);
    });
  }

  if ((0, _isObject.default)(firstVal) && (0, _isObject.default)(secondVal)) {
    var firstKeys = Object.keys(firstVal);
    var secondKeys = Object.keys(secondVal);
    return firstKeys.length === secondKeys.length && firstKeys.every(function (key) {
      return isEqual(firstVal[key], secondVal[key]);
    });
  }

  return false;
}

var _default = isEqual;
exports.default = _default;
module.exports = exports.default;