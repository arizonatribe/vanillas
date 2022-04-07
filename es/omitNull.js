"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Removes all `null` or `undefined` values from a given object
 *
 * @function
 * @name omitNull
 * @param {object} obj An Object from which to copy and remove null/undefined
 * @returns {object} A copy of the original Object, but without any `null` or `undefined` values
 */
function omitNull(obj) {
  var newObj = {};
  var keys = Object.keys(obj);
  var numOfKeys = keys.length;

  for (var i = 0; i < numOfKeys; i++) {
    if (obj[keys[i]] != null) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }

  return newObj;
}

var _default = omitNull;
exports.default = _default;