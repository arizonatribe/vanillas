"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Run several Functions (or composed chains of Functions) onto the same input and converges their results as arguments to another Function.
 *
 * A common example might be to take an Object that needs to be transformed in several different ways and then merged into one final Object.
 * In that case you can supply a "merge" (or "assign") Function as the convergence Function, and then pass all your Object transforming Functions as additional arguments.
 * When you're ready to receive the actual input Object it will be forked into all the transform Functions and their results will converge into the merge/assign Function you supplied first.
 *
 * @function
 * @name converge
 * @param {function} fn A Function to converge the results (from executing all the others) into
 * @param {function} ...forkedFunctions Two or more Functions (should be at least two, otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns {function} A wrapped Function that is ready to receive a value(s) and pass it (in parallel) into the other Functions, converging those results as _arguments_ to the first Function you supplied
 */
function converge(fn) {
  for (var _len = arguments.length, forkedFunctions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    forkedFunctions[_key - 1] = arguments[_key];
  }

  /* eslint-disable-next-line jsdoc/require-jsdoc */
  function inner() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn.apply(void 0, (Array.isArray(forkedFunctions[0]) ? forkedFunctions[0] : forkedFunctions).map(function (f) {
      return f.apply(void 0, args);
    }));
  }

  return inner;
}

var _default = converge;
exports.default = _default;
module.exports = exports.default;