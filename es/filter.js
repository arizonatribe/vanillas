"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isArrayish = _interopRequireDefault(require("./isArrayish"));

var _isObject = _interopRequireDefault(require("./isObject"));

var _filterString = _interopRequireDefault(require("./filterString"));

var _filterObject = _interopRequireDefault(require("./filterObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a filtering function you provide over a value you provide, according to its type.
 * String values will have the filtering function applied over every character in the String.
 * Objects will have the filtering function applied to every value in the Object.
 * Arrays (or Array-like values) will have the filtering function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 *
 * @function
 * @name filter
 * @param {function} fn A filtering function that is invoked on the provided value
 * @param {object | Array<*> | string} val An Object/Array/String whose values/chars will be filtered
 * @returns {object | Array<*> | string} A new value that is the result of the filtering operation over all the chars or values in the original String/Object/Array
 */
function filter(fn, val) {
  if (Array.isArray(val)) return val.filter(fn);
  if ((0, _isObject.default)(val)) return (0, _filterObject.default)(fn, val);
  if (typeof val === "string") return (0, _filterString.default)(fn, val);
  if ((0, _isArrayish.default)(val)) return val.filter(fn);
  return val;
}

var _default = filter;
exports.default = _default;