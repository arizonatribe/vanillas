"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Checks to see if a value is null OR undefined
 *
 * @function
 * @name isNil
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is null or undefined
 */
function isNil(val) {
  return val == null;
}

var _default = isNil;
exports.default = _default;