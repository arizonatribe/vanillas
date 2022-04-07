"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isNil = _interopRequireDefault(require("./isNil"));

var _getConstructorName = _interopRequireDefault(require("./_internal/getConstructorName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a given type's constructor name is that for a list or array like type
 *
 * @function
 * @private
 * @name isArrayLike
 * @param {string} name The constructor name for a given type
 * @returns {boolean} Whether or not the type's constructor is a list/array like type
 */
function isArrayLike(name) {
  switch (name) {
    case "Set":
    case "WeakSet":
    case "Array":
    case "Float64Array":
    case "Float32Array":
    case "Int32Array":
    case "Uint16Array":
    case "Int16Array":
    case "Uint8ClampedArray":
    case "Uint8Array":
    case "Int8Array":
      return true;

    default:
      return false;
  }
}
/**
 * Checks if a given value is "array-like".
 *
 * This includes:
 * - Array
 * - Set
 * - WeakSet
 * - Float64Array
 * - Float32Array
 * - Int32Array
 * - Uint16Array
 * - Int16Array
 * - Uint8ClampedArray
 * - Uint8Array
 * - Int8Array
 *
 * @function
 * @name isArrayish
 * @param {*} val A value to check as being an array
 * @returns {boolean} Whether the value is an array-like type
 */


function isArrayish(val) {
  return Array.isArray(val) || !(0, _isNil.default)(val) && isArrayLike((0, _getConstructorName.default)(val));
}

var _default = isArrayish;
exports.default = _default;
module.exports = exports.default;