"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getConstructorName = _interopRequireDefault(require("./_internal/getConstructorName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks to see if a value is a Set or WeakSet
 *
 * @function
 * @name isSet
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is a Set or WeakSet
 */
function isSet(val) {
  return (0, _getConstructorName.default)(val) === "Set" || (0, _getConstructorName.default)(val) === "WeakSet";
}

var _default = isSet;
exports.default = _default;
module.exports = exports.default;