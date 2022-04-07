"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getConstructorName = _interopRequireDefault(require("./_internal/getConstructorName"));

var _getType = _interopRequireDefault(require("./getType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks to see if a value is a certain type.
 * You may specify that type as a case-insensitive string
 * (ie, 'string', 'boolean', 'object', 'function', 'array', 'regexp', 'date', 'set, 'map'), OR a JavaScript type constructor function (ie, String, Function, Boolean, Array, RegExp, Date, Set, Map).
 *
 * @function
 * @name is
 * @param {function | string} ofType A JavaScript type constructor function (like `Function`, `String`, `RegExp`, `Boolean`, `Array`, `Object`, etc.) or a string value matching the name of one
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value matches the specified type
 * @example
 * is('boolean', true)
 * is('array', [1, 2, 3])
 * is(RegExp, /[a-z0-9]/)
 * is(Function, () => null)
 *
 */
function is(ofType, val) {
  return ofType === val || typeof ofType === "string" && (0, _getType.default)(val).toLowerCase() === ofType.toLowerCase() || ofType && !ofType.name && (0, _getType.default)(ofType) === (0, _getType.default)(val) || ofType && ofType.name && (0, _getConstructorName.default)(ofType) === "Function" && (0, _getType.default)(val) === ofType.name;
}

var _default = is;
exports.default = _default;
module.exports = exports.default;