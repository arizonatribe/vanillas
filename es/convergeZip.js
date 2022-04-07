"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Run several Functions (or composed chains of Functions) onto the same input and converges their results as arguments to another Function.
 * Compare to "converge" however the difference is that this is _always_ intended to be used with multiple input values _and_ each of those values corresponds to one of the forked functions.
 * They all still converge into one Function, but the forked function just don't receive the same input values.
 *
 * @function
 * @name convergeZip
 * @param {function} fn A Function to converge the results (from executing all the others) into
 * @param {function} ...forkedFunctions Two or more Functions (should be at least two, otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns {function} A wrapped Function that is ready to receive multiple values that each correspond to one of the fork functions, converging those results as _arguments_ to the first Function you supplied
 */
function convergeZip(fn) {
  for (var _len = arguments.length, forkedFunctions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    forkedFunctions[_key - 1] = arguments[_key];
  }

  var isArrayUsage = Array.isArray(forkedFunctions[0]);
  /* eslint-disable-next-line jsdoc/require-jsdoc */

  function inner() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var ars = Array.isArray(args[0]) && isArrayUsage ? args[0] : args;
    var fns = (isArrayUsage ? forkedFunctions[0] : forkedFunctions).slice(0, ars.length);
    return fn.apply(void 0, ars.map(function (a, i) {
      return fns[i](a);
    }));
  }

  return inner;
}

var _default = convergeZip;
exports.default = _default;