"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propAt = _interopRequireDefault(require("./propAt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.
 *
 * @function
 * @name propEquals
 * @param {string} prop A key to search for on the Object
 * @param {*} val A value that the extracted prop will be compared against
 * @param {object} obj An object which may contain a specified prop
 * @returns {boolean} Whether or not the requested prop equals the specified value
 */
function propEquals(prop, val, obj) {
  return (0, _propAt.default)(prop, obj) === val;
}

var _default = propEquals;
exports.default = _default;