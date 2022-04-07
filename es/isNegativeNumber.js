"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isNumber = _interopRequireDefault(require("./isNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a given numeric value is negative.
 *
 * @function
 * @name isNegativeNumber
 * @param {number} val A value to verify is a negative number
 * @returns {boolean} Whether or not the given value is a negative number
 */
function isNegativeNumber(val) {
  return (0, _isNumber.default)(val) && +val < 0;
}

var _default = isNegativeNumber;
exports.default = _default;