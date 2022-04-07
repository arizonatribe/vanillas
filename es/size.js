"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isUndefined = _interopRequireDefault(require("./isUndefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks the length (or size) of many different types of values:
 *   - Array
 *   - Set
 *   - Map
 *   - Object (num of keys)
 *   - String (num of chars)
 *   - Function (num of params)
 *
 * @function
 * @name size
 * @param {object | string | Array<*> | function} val A value of type Object, String, Array or Function
 * @returns {number} The length of the String or Array, OR the number of keys in the Object
 */
function size(val) {
  if (!(0, _isUndefined.default)(val.length)) {
    return val.length;
  }

  if (!(0, _isUndefined.default)(val.size)) {
    return val.size;
  }

  if (typeof val === "object") {
    return Object.keys(val).length;
  }

  return undefined;
}

var _default = size;
exports.default = _default;