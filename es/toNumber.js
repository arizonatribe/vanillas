"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isZero = _interopRequireDefault(require("./isZero"));

var _isNumber = _interopRequireDefault(require("./isNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Coerces a given string value to a number (if valid).
 *
 * @function
 * @name toNumber
 * @param {string} val A string value to coerce to a number
 * @returns {number|undefined} A numeric representation of the original value, or `undefined` if it cannot be coerced to a number.
 */
function toNumber(val) {
  if ((0, _isZero.default)(val)) {
    return 0;
  }

  var num = +val;
  return (0, _isNumber.default)(num) && num !== 0 ? num : undefined;
}

var _default = toNumber;
exports.default = _default;