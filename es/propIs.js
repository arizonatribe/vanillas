"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propAt = _interopRequireDefault(require("./propAt"));

var _is = _interopRequireDefault(require("./is"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value is of the type you specifiy.
 *
 * @function
 * @name propIs
 * @param {function | string} type A JavaScript type constructor function (ie `Boolean`, `RegExp`, `Date`, `Array`, `Object`, `Number`, `String`, etc) OR a string represention of the type (ie, "boolean", "regexp", "date", "array", "object", "number", "string", etc)
 * @param {string} prop A key to search for on the Object
 * @param {object} obj An object which may contain a specified prop
 * @returns {boolean} Whether or not the requested prop is of the type specified
 */
function propIs(type, prop, obj) {
  return (0, _is.default)(type, (0, _propAt.default)(prop, obj));
}

var _default = propIs;
exports.default = _default;