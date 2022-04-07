"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isNil = _interopRequireDefault(require("./isNil"));

var _toTitleCase = _interopRequireDefault(require("./toTitleCase"));

var _getConstructorName = _interopRequireDefault(require("./_internal/getConstructorName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the type for any value. If available will inspect the constructor name, otherwise will use the typeof
 *
 * @function
 * @name getType
 * @param {*} val A value of any kind
 * @returns {string} The stringified representation of the value's type
 */
function getType(val) {
  if ((0, _isNil.default)(val)) {
    return "" + val;
  }

  return (0, _getConstructorName.default)(val) || (0, _toTitleCase.default)(typeof val);
}

var _default = getType;
exports.default = _default;