"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getType = _interopRequireDefault(require("./getType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Inspects two values to see if they are the same type.
 * The typeof and (if necessary) constructor names are inspected during this check.
 *
 * @function
 * @name isSameType
 * @param {*} val1 A value (of any type)
 * @param {*} val2 A value (of any type)
 * @returns {boolean} Whether or not the two values are of the same type
 */
function isSameType(val1, val2) {
  return (0, _getType.default)(val1) === (0, _getType.default)(val2);
}

var _default = isSameType;
exports.default = _default;