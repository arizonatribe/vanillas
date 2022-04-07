"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getConstructorName = _interopRequireDefault(require("./_internal/getConstructorName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks to see if a value is a Map or WeakMap
 *
 * @function
 * @name isMap
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is a Map or WeakMap
 */
function isMap(val) {
  return (0, _getConstructorName.default)(val) === "Map" || (0, _getConstructorName.default)(val) === "WeakMap";
}

var _default = isMap;
exports.default = _default;
module.exports = exports.default;