"use strict";

exports.__esModule = true;
exports.default = void 0;

var _merge = _interopRequireDefault(require("./merge"));

var _concat = _interopRequireDefault(require("./concat"));

var _isObject = _interopRequireDefault(require("./isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Combines two values of the same type (if it makes sense to combine them).
 * Numbers are summarized, strings and arrays are concatenated together, and true objects are merged (the second value merged on top of the first).
 * In any other case only the first value is returned.
 *
 * @function
 * @name combine
 * @param {*} val1 The base value to be combined with
 * @param {*} val2 The value to combine
 * @returns {*} If the values are of the same type, this represents the combined value of the two of them. Otherwise only the first value is returned
 */
function combine(val1, val2) {
  if ([val1, val2].every(function (v) {
    return typeof v === "number" || typeof v === "string";
  })) {
    return val1 + val2;
  }

  if ((0, _isObject.default)(val1) && (0, _isObject.default)(val2)) {
    return (0, _merge.default)(val1, val2);
  }

  if (Array.isArray(val1) && Array.isArray(val2)) {
    return (0, _concat.default)(val1, val2);
  }

  return val1;
}

var _default = combine;
exports.default = _default;