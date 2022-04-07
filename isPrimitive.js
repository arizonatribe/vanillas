"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getConstructorName = _interopRequireDefault(require("./_internal/getConstructorName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a given type name is a primitve type
 *
 * @function
 * @private
 * @name _isPrimitiveName
 * @param {string} typeName The name of the type
 * @returns {boolean} Whether or not the type's name is a primitive type name
 */
function _isPrimitiveName(typeName) {
  switch (typeName) {
    case "boolean":
    case "number":
    case "string":
    case "Boolean":
    case "Number":
    case "String":
    case "Symbol":
      return true;

    default:
      return false;
  }
}
/**
 * Checks if a given value is of a primitive type (ie, Boolean, String, Number, or Symbol).
 *
 * @function
 * @name isPrimitive
 * @param {*} val A value which may be of a primitive type
 * @returns {boolean} Whether or not the value is primitive
 */


function isPrimitive(val) {
  return _isPrimitiveName(typeof val) || _isPrimitiveName((0, _getConstructorName.default)(val));
}

var _default = isPrimitive;
exports.default = _default;
module.exports = exports.default;