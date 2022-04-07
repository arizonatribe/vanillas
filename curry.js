"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Takes a Function whose params are meant to be supplied all at once and changes it so they can be supplied one at a time.
 * As each argument is supplied a new Function is returned that is ready to receive the next argument.
 * This continues until all arguments for your origianl function have been supplied and then the actual result is returned.
 *
 * Note: you cannot set default values for curried function params (again, you _cannot_ set default values for curried function params)
 *
 * @function
 * @name curry
 * @param {function} fn A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns {function} A new Function that will wait until all arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
function curry(fn) {
  var fnlen = fn.length;

  switch (fnlen) {
    case 2:
      return function standardCurry(a, b) {
        if (arguments.length === 2) {
          return fn(a, b);
        }

        return function (_b) {
          return fn(a, _b);
        };
      };

    case 3:
      return function threeArgCurry(a, b, c) {
        switch (arguments.length) {
          case 3:
            return fn(a, b, c);

          case 2:
            return function (_c) {
              return fn(a, b, _c);
            };

          default:
            return curry(function (_b, _c) {
              return fn(a, _b, _c);
            });
        }
      };

    case 4:
      return function fourArgCurry(a, b, c, d) {
        switch (arguments.length) {
          case 4:
            return fn(a, b, c, d);

          case 3:
            return function (_d) {
              return fn(a, b, c, _d);
            };

          case 2:
            return curry(function (_c, _d) {
              return fn(a, b, _c, _d);
            });

          default:
            return curry(function (_b, _c, _d) {
              return fn(a, _b, _c, _d);
            });
        }
      };

    default:
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
}

var _default = curry;
exports.default = _default;
module.exports = exports.default;