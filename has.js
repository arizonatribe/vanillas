"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Checks if a given Object contains a specified prop name
 *
 * @function
 * @name has
 * @param {string} key A prop name to look for in the object
 * @param {object} obj An Object to inspect for a given prop
 * @returns {boolean} Whether the object contains the specified prop
 */
function has(key, obj) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

var _default = has;
exports.default = _default;
module.exports = exports.default;