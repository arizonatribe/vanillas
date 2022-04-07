"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isInteger = _interopRequireDefault(require("./isInteger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a given numeric value is a positive integer.
 *
 * @function
 * @name isPositiveInteger
 * @param {number} val A value to verify is a positive integer
 * @returns {boolean} Whether or not the given value is a positive integer
 */
function isPositiveInteger(val) {
  return (0, _isInteger.default)(val) && +val > 0;
}

var _default = isPositiveInteger;
exports.default = _default;
module.exports = exports.default;