"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Checks if a value is a JavaScript Promise. This just means a deferred object/function with a method named `then`.
 *
 * @function
 * @name isPromise
 * @param {*} val A value of any type which may be a promise
 * @returns {boolean} Whether or not the value is a promise
 */
function isPromise(val) {
  return val !== null && (typeof val === "function" || typeof val === "object") && typeof val.then === "function";
}

var _default = isPromise;
exports.default = _default;
module.exports = exports.default;