"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isInteger = _interopRequireDefault(require("./isInteger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a given numeric value is a negative integer.
 *
 * @function
 * @name isNegativeInteger
 * @param {number} val A value to verify is a negative integer
 * @returns {boolean} Whether or not the given value is a negative integer
 */
function isNegativeInteger(val) {
  return (0, _isInteger.default)(val) && +val < 0;
}

var _default = isNegativeInteger;
exports.default = _default;