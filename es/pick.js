"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Removes everything _except_ the specified keys from an object (after cloning the Object).
 *
 * @function
 * @name pick
 * @param {Array<string>} keys An array of keys to search for in the Object and include from the output
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but with _only_ the specified keys
 */
function pick(keys, obj) {
  var newObj = {};
  var numOfKeys = keys.length;

  for (var i = 0; i < numOfKeys; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, keys[i])) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }

  return newObj;
}

var _default = pick;
exports.default = _default;