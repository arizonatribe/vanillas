"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * A simple wrapper around native Array.prototype.reduce(), for use in a compose/pipe chain of functions.
 * Can also reduce the key/value pairs of an object, if one is supplied in place of an array.
 *
 * @function
 * @name reduce
 * @param {function} fn A function to control the reduction of each item in the array|object into the single output value
 * @param {*} defaultVal A starting value for the reduction accumulator
 * @param {Array<*>|object} arr An array of values of any type OR an object containing key/value pairs
 * @returns {*} The original Array|Object somehow reduced to one value, according to the supplied function
 */
function reduce(fn, defaultVal, arr) {
  return typeof arr.reduce === "function" ? arr.reduce(fn, defaultVal) : Object.keys(arr).reduce(function (acc, key) {
    return fn(acc, arr[key], key);
  }, defaultVal);
}

var _default = reduce;
exports.default = _default;