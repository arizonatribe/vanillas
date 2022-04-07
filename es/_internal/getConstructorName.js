"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Safely retrieves the constructor name for the native JavaScript type
 *
 * @function
 * @private
 * @name getConstructorName
 * @param {*} val A value of any type
 * @returns {string} The constructor name (if there is one) for the value
 */
function getConstructorName(val) {
  try {
    return val.constructor.name;
  } catch (err) {
    return "";
  }
}

var _default = getConstructorName;
exports.default = _default;