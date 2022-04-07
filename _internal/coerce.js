"use strict";

exports.__esModule = true;
exports.toFunction = exports.toArray = void 0;

/**
 * Ensures a given value is wrapped in a function (leaves alone the value if it is already a function).
 *
 * @function
 * @private
 * @name toFunction
 * @param {function|*} v A value which may be a function or a value a function should return
 * @returns {function} Either the original value (if it was a function) or a function which returns the original value
 */
var toFunction = function toFunction(v) {
  return typeof v === "function" ? v : function () {
    return v;
  };
};
/**
 * Ensures a given value is wrapped in an array (leaves alone the value if it is already an array).
 *
 * @function
 * @private
 * @name toArray
 * @param {Array<*>|*} v A value which may be an array or should be placed into an array
 * @returns {Array<*>} Either the original value (if it was an array) or an array containing the original value
 */


exports.toFunction = toFunction;

var toArray = function toArray(v) {
  return Array.isArray(v) ? v : [v];
};

exports.toArray = toArray;