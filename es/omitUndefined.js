"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Removes all `undefined` values from a given object
 *
 * @function
 * @name omitUndefined
 * @param {object} obj An Object from which to copy and remove undefined
 * @returns {object} A copy of the original Object, but without any `undefined` values
 */
function omitUndefined(obj) {
  var newObj = {};
  var keys = Object.keys(obj);
  var numOfKeys = keys.length;

  for (var i = 0; i < numOfKeys; i++) {
    if (obj[keys[i]] !== undefined) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }

  return newObj;
}

var _default = omitUndefined;
exports.default = _default;