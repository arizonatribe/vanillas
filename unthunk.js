"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Transforms a thunk (of however many levels deep) into a single function that will received all the args at once
 *
 * @function
 * @name unthunk
 * @param {function} thunk A function that returns a function (which may return a function, and so on)
 * @returns {function} A single function that is ready to receive all the arguments at once
 */
function unthunk(thunk) {
  return function inner() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.reduce(function (f, a) {
      return f(a);
    }, thunk);
  };
}

var _default = unthunk;
exports.default = _default;
module.exports = exports.default;