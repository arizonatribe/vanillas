"use strict";

exports.__esModule = true;
exports.default = void 0;

/* eslint-disable consistent-return */

/**
 * Looks for a specified key on an Object you provide.
 * The is performed safely and will not throw an error if something on the prop path chain you specify doesn't exist.
 * Will always return `undefined` if a prop path cannot be resolved (rather than throwing).
 *
 * @function
 * @name propAt
 * @param {string | Array<string>} prop A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param {object} obj An object which may contain a specified prop
 * @returns {*|undefined} The value associated with the nested prop path OR undefined if it does not exist
 */
function propAt(prop, obj) {
  try {
    var paths = typeof prop === "string" ? prop.split(".") : prop;
    var len = paths.length;
    if (len === 0) return undefined;
    var idx = 0;
    var val = obj[paths[idx]];

    while (++idx < len) {
      val = val[paths[idx]];
    }

    return val;
  } catch (err) {// Prop wasn't found; returning undefined
  }
}

var _default = propAt;
exports.default = _default;