"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Extracts an Array of key/value pairs from an Object.
 *
 * @function
 * @name entries
 * @param {object} obj The input object from which to extract prop keys and values
 * @returns {Array<string>} An Array of key/value pairs corresponding to those on the input object
 */
function entries(obj) {
  var keys = Object.keys(obj);
  var len = keys.length;

  for (var i = 0; i < len; i++) {
    keys[i] = [keys[i], obj[keys[i]]];
  }

  return keys;
}

var _default = entries;
exports.default = _default;