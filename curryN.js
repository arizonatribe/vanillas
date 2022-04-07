"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Same as the regular curry function, but you must also specify the number of arguments that the curried function will take before being fully executed.
 * You would use this in cases where it cannot be inferred from the curried function itself.
 *
 * @function
 * @name curryN
 * @throws {TypeError} if arity is not supplied or is not a positive number
 * @param {number} arity The number of arguments the curried function will received before being executed
 * @param {function} fn A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns {function} A new Function that will wait until all (arity) arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
function curryN(arity, fn) {
  if (typeof arity !== "number" || Number.isNaN(arity) || arity <= 0) {
    return fn;
  }

  var fnlen = arity;
  return function manyArgCurry() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arglen = args.length;

    if (arglen === fnlen) {
      return fn.apply(void 0, args);
    }

    return function inner() {
      for (var _len2 = arguments.length, innerArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        innerArgs[_key2] = arguments[_key2];
      }

      var innerlen = innerArgs.length;
      var limit = fnlen;
      var allArgs = [];
      var argCount = 0;

      while (argCount < arglen) {
        allArgs.push(args[argCount]);
        argCount++;
        limit--;
      }

      var innerArgCount = 0;

      while (innerArgCount < innerlen) {
        allArgs.push(innerArgs[innerArgCount]);
        innerArgCount++;
        limit--;
      }

      return limit > 0 ? manyArgCurry.apply(void 0, allArgs) : fn.apply(void 0, allArgs);
    };
  };
}

var _default = curryN;
exports.default = _default;
module.exports = exports.default;