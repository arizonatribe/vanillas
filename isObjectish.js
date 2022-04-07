"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Checks if a given type's constructor name is not really what we consider an object in-practice
 *
 * @function
 * @name withoutTheCurlies
 * @private
 * @param {string} name The constructor name for a given type
 * @returns {boolean} Whether or not the constructor is one of the kinds of native types which are technically objects but not what we consider objects in-practice
 */
function withoutTheCurlies(name) {
  switch (name) {
    case "Function":
    case "RegExp":
    case "Date":
    case "WeakSet":
    case "Set":
    case "Float64Array":
    case "Float32Array":
    case "Int32Array":
    case "Uint16Array":
    case "Int16Array":
    case "Uint8ClampedArray":
    case "Uint8Array":
    case "Int8Array":
    case "Array":
    case "Symbol":
    case "Number":
    case "String":
    case "Boolean":
    case "UriError":
    case "TypeError":
    case "SyntaxError":
    case "ReferenceError":
    case "RangeError":
    case "InternalError":
    case "EvalError":
    case "Error":
      return true;

    default:
      return false;
  }
}
/**
 * Tests whether or not a given value is object-like.
 * This means a hashmap, map, weak map, object literal, instantiated custom class,
 * but _not_ some of the kinds of constructs which JavaScript considers to be technically an object (Error, Array, Null, Function, Date, etc.)
 *
 * @function
 * @name isObjectish
 * @param {*} val A value that may or may not be object-like
 * @returns {boolean} Whether or not the value is object-like
 */


function isObjectish(val) {
  return val != null && val.length === undefined && (val.constructor !== undefined && !withoutTheCurlies(val.constructor.name) || val.constructor === undefined && val.prototype === undefined);
}

var _default = isObjectish;
exports.default = _default;
module.exports = exports.default;