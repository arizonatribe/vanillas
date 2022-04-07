"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isNumber = _interopRequireDefault(require("./isNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks a value to see if it is an integer.
 *
 * @function
 * @name isInteger
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is an integer
 */
function isInteger(val) {
  return (0, _isNumber.default)(val) && Number.isInteger(val);
}

var _default = isInteger;
exports.default = _default;
module.exports = exports.default;