"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propAt = _interopRequireDefault(require("./propAt"));

var _isUndefined = _interopRequireDefault(require("./isUndefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attempts to find a specified key on an Object you provide, and if not found will fall back to an additional value you specify.
 *
 * @function
 * @name propOr
 * @param {*} fallback A value to fall back on if the requested key does not exist on the provided Object
 * @param {string} prop A key to search for on the Object
 * @param {object} obj An object which may contain a specified prop
 * @returns {*} Either the requested prop (from the Object) or the fallback value
 */
function propOr(fallback, prop, obj) {
  var val = (0, _propAt.default)(prop, obj);
  return (0, _isUndefined.default)(val) ? fallback : val;
}

var _default = propOr;
exports.default = _default;