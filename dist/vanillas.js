(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vanillas = {}));
}(this, (function (exports) { 'use strict';

/**
 * Check an Array of items (of any type) to see if any item satisfies a given predicate function.
 * Exits when the first match is found.
 *
 * @function
 * @name any
 * @param {function} pred A predicate function to evaluate against each item in a given array
 * @param {Array<*>} arr An array of items to evaluate against the predicate function
 * @returns {boolean} Whether or not any items in the array matched the predicate function
 */
function any(pred, arr) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    if (pred(arr[i])) return true;
  }

  return false;
}

/**
 * Checks if a given Object contains a specified prop name
 *
 * @function
 * @name has
 * @param {string} key A prop name to look for in the object
 * @param {object} obj An Object to inspect for a given prop
 * @returns {boolean} Whether the object contains the specified prop
 */
function has(key, obj) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * A light wrapper around native `for .. in`, but will only iterate over an Object's own properties.
 *
 * @function
 * @name forIn
 * @param {function} fn A function to execute iteratively, which will receive the `key`, `value`, and `object` (respectively)
 * @param {object} obj An object whose keys will be iterated over
 */

function forIn(fn, obj) {
  // eslint-disable-next-line no-restricted-syntax
  for (var key in obj) {
    if (has(key, obj)) {
      fn(key, obj[key], obj);
    }
  }
}

/**
 * Merges the values from 2 or more Objects or Arrays together into a new Object/Array.
 * Null and Undefined values are handled gracefully, and if the second value is a primitive it will be returned as-is, instead of trying to merge it onto the first.
 *
 * @function
 * @name merge
 * @param {Array<object|Array<*>>} ...val Values to merge together (values with higher precedence should be provided last)
 * @returns {object|Array<*>} A new value that contains the combined values from all the values passed in
 */

function merge() {
  for (var _len = arguments.length, vals = new Array(_len), _key = 0; _key < _len; _key++) {
    vals[_key] = arguments[_key];
  }

  var numOfVals = vals.length;

  if (vals[0] === undefined || vals[1] === undefined) {
    return vals[1] !== undefined ? vals[1] : vals[0];
  }

  if (numOfVals === 2 && (vals[1] == null || typeof vals[1] !== "object" || vals[1].constructor.name !== "Object")) {
    return vals[1];
  }

  var newObj = {};
  forIn(function (key, val) {
    newObj[key] = val;
  }, vals[0]);

  for (var i = 1; i < numOfVals; i++) {
    forIn(function (key, val) {
      newObj[key] = merge(newObj[key], val);
    }, vals[i]);
  }

  return newObj;
}

/**
 * Blends two values together based on their type.
 * If both are objects this would result in a new object with the second value's props merged onto the first's.
 * If the first value is an array, this would result in a new array with the second value concatenated onto the first value.
 * If both values are strings or numbers, a new string will be returned with the second value added onto the first.
 *
 * @function
 * @name append
 * @param {string | number | Object<string, any> | Array<*>} firstVal A value that will have another appended onto
 * @param {string | number | Object<string, any> | Array<*>} secondVal A value to append to the first value
 * @returns {Array<*> | object | string} A new Array, Object, or String that has the characters/values from the second provided value merged _after_ those from the first provided value
 */

function append(firstVal, secondVal) {
  if ([firstVal, secondVal].every(function (val) {
    return typeof val === "string" || typeof val === "number";
  })) {
    return "" + firstVal + secondVal;
  }

  if (Array.isArray(firstVal) && Array.isArray(secondVal)) {
    return [].concat(firstVal, secondVal);
  }

  return merge(firstVal, secondVal);
}

/**
 * Assigns the values from one or more Objects onto another Object.
 * This mutates the original Object.
 *
 * @function
 * @name assign
 * @param {object} obj An Object to mutate with the values from one (or more) additionally supplied Objects
 * @param {object} ...resOfObjects One or more Objects to extract from and assign onto the first Object
 * @returns {object} The first object mutated with the values from any other object passed in
 */

function assign(obj) {
  var numOfObjs = arguments.length <= 1 ? 0 : arguments.length - 1;

  for (var i = 0; i < numOfObjs; i++) {
    var currentObj = (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) || {};
    forIn(function (key, val) {
      obj[key] = val;
    }, currentObj);
  }

  return obj;
}

/**
 * Gathers an Array of Functions that return Promises and returns an Array of results, once they have all completed.
 * The only difference between this and native Promise.all() is that these promises will _all_ be resolved/rejected before the final Promise (containing all the results) is returned. With native Promise.all(), the first unhandled rejection will cause the whole endeavor to be terminated.
 * Addtionally you can pass in a flag to force caught errors to be ignored entirely.
 *
 * @function
 * @name promiseAll
 * @param {Array<function>} requests An array of Functions that return Promises
 * @param {boolean} ignoreErrors Whether or not to ignore errors entirely (this will cause all the results to be returned and any Errors will be returned in place of the results)
 * @returns {Promise<*>} A Promise that will resolve once all of the Promises are resolved/rejected
 */
function promiseAll(requests, ignoreErrors) {
  var errors = [];
  var len = requests.length;
  var resolvedRejectedCount = 0;
  var results = new Array(len);
  return new Promise(function (resolve, reject) {
    /**
     * Resolves or rejects the whole series of promises once the count has been reached (depending on whether we are also ignoring errors or not)
     *
     * @function
     * @private
     * @name checkForFinalPromise
     */
    function checkForFinalPromise() {
      if (resolvedRejectedCount === len) {
        if (ignoreErrors || !errors.length) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    }
    /**
     * Handles each promise result by adding the it to the list of values to return or incrementing the error count.
     *
     * @function
     * @private
     * @name handleResult
     * @param {*} result The value returned by the promise
     * @param {number} index The index number used to matching this promise to the placement in the original list
     */


    function handleResult(result, index) {
      resolvedRejectedCount++;
      results[index] = result;
      checkForFinalPromise();
    }
    /**
     * Handles an error which occurred during an async call by adding the it to the list of errors and incrementing the error count.
     *
     * @function
     * @private
     * @name handleError
     * @param {Error} err The error thrown during the async call
     * @param {number} index The index number used to matching this error to the placement in the original list
     */


    function handleError(err, index) {
      resolvedRejectedCount++;
      if (ignoreErrors) results[index] = err;
      errors.push(err);
      checkForFinalPromise();
    }

    var _loop = function _loop(i) {
      requests[i].then(function (result) {
        return handleResult(result, i);
      }).catch(function (err) {
        return handleError(err, i);
      });
    };

    for (var i = 0; i < len; i++) {
      _loop(i);
    }
  });
}

/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them in sequential order they appear in the Array.
 * The value from the last will be supplied to the next (in case you need it).
 *
 * @function
 * @name promiseChain
 * @param {Array<Promise<*>> | Array<function>} requests An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns {Promise<*>} A Promise that will resolve when each of the requests completes
 */
function promiseChain() {
  for (var _len = arguments.length, requests = new Array(_len), _key = 0; _key < _len; _key++) {
    requests[_key] = arguments[_key];
  }

  var reqs = Array.isArray(requests[0]) ? requests[0] : requests;
  var len = reqs.length;
  var promisesPromises = new Array(len);

  var getNext = function getNext(req, lastVal) {
    return typeof req === "function" ? req(lastVal) : req;
  };

  var chain = Promise.resolve();

  var _loop = function _loop(i) {
    promisesPromises[i] =
    /* eslint-disable-next-line no-multi-assign */
    chain = chain.then(function (val) {
      return getNext(reqs[i], val);
    });
  };

  for (var i = 0; i < len; i++) {
    _loop(i);
  }

  return Promise.all(promisesPromises);
}

/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them from right to left.
 * You can pass them all together in either a single array, or one by one as arguments (ie, in the style of either `apply` or `call`).
 *
 * @function
 * @name promiseCompose
 * @param {Array<Promise<*>> | Array<function>} requests An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns {Promise<*>} A Promise that will resolve when each of the requests completes
 */

function promiseCompose() {
  for (var _len = arguments.length, requests = new Array(_len), _key = 0; _key < _len; _key++) {
    requests[_key] = arguments[_key];
  }

  return promiseChain(requests.reverse());
}

/**
 * Checks to see if a value is null OR undefined
 *
 * @function
 * @name isNil
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is null or undefined
 */
function isNil(val) {
  return val == null;
}

/**
 * Checks if a given native type's constructor name is something other than what is typically considered an object
 *
 * @function
 * @private
 * @name isAnythingButAnObject
 * @param {string} name The constructor name for a given type
 * @returns {boolean} Whether or not the type's constructor name is something other than what is typically considered an object
 */
function isAnythingButAnObject(name) {
  switch (name) {
    case "Function":
    case "RegExp":
    case "Date":
    case "WeakMap":
    case "Map":
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
 * A high-speed, mostly adequate check of a value which may be an Object.
 * This excludes values that are _technically_ an Object but in practice are not what you _really_ mean when you speak of Objects.
 *
 * @function
 * @name isObject
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is an Object
 */


function isObject(val) {
  if (val == null || typeof val.length === "number") {
    return false;
  }

  if (val.constructor !== undefined) {
    return val.constructor.name === "Object" || !isAnythingButAnObject(val.constructor.name);
  }

  return val.prototype === undefined;
}

/* eslint-disable consistent-return */
/**
 * Recursively copies the content of an Object into a new Object
 *
 * @function
 * @name clone
 * @param {object|Array<*>} obj An Object (or Array) from which to create a deep copy
 * @returns {object|Array<*>} The new (cloned) Object (or Array)
 */

function clone(obj) {
  if (!isNil(obj)) {
    if (Array.isArray(obj)) {
      return obj.map(function (v) {
        return isObject(v) ? clone(v) : v;
      });
    }

    if (isObject(obj)) {
      var newObj = {};
      forIn(function (key, val) {
        if (isObject(val) || Array.isArray(val)) {
          newObj[key] = clone(val);
        } else {
          newObj[key] = val;
        }
      }, obj);
      return newObj;
    }
  }
}

/**
 * Adds the values from one Array onto another Array, returned as a new Array (ie, it does not mutate the first Array).
 * This operation is recursive, so you can supply as many arrays as you wish.
 *
 * @function
 * @name concat
 * @param {Array<*>} firstArr An Array of values (of any type)
 * @param {Array<*>} secondArr An Array of values (of any type)
 * @returns {Array<*>} A new Array with the values from the second array concatenated onto those from the first
 */
function concat(firstArr, secondArr) {
  var firstLen = firstArr.length;
  var len = secondArr.length + firstLen;
  var newArr = new Array(len);

  for (var i = 0; i < firstLen; i++) {
    newArr[i] = firstArr[i];
  }

  for (var _i = firstLen; _i < len; _i++) {
    newArr[_i] = secondArr[_i - firstLen];
  }

  for (var _len = arguments.length, restOfArrs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    restOfArrs[_key - 2] = arguments[_key];
  }

  if (restOfArrs.length) {
    return concat.apply(void 0, [newArr, restOfArrs[0]].concat(restOfArrs.slice(1)));
  }

  return newArr;
}

/**
 * Combines two values of the same type (if it makes sense to combine them).
 * Numbers are summarized, strings and arrays are concatenated together, and true objects are merged (the second value merged on top of the first).
 * In any other case only the first value is returned.
 *
 * @function
 * @name combine
 * @param {*} val1 The base value to be combined with
 * @param {*} val2 The value to combine
 * @returns {*} If the values are of the same type, this represents the combined value of the two of them. Otherwise only the first value is returned
 */

function combine(val1, val2) {
  if ([val1, val2].every(function (v) {
    return typeof v === "number" || typeof v === "string";
  })) {
    return val1 + val2;
  }

  if (isObject(val1) && isObject(val2)) {
    return merge(val1, val2);
  }

  if (Array.isArray(val1) && Array.isArray(val2)) {
    return concat(val1, val2);
  }

  return val1;
}

/**
 * Checks if a list of values are all functions
 *
 * @function
 * @private
 * @name areAllFunctions
 * @param {Array<*>} fns A list of values which may or may not all be functions
 * @returns {boolean} Whether or not a list of functions was passed in
 */
function areAllFunctions(fns) {
  return fns.some(function (f, idx) {
    if (typeof f !== "function") {
      throw new Error("Argument #" + (idx + 1) + " passed to \"compose()\" is not a function:\n\"" + JSON.stringify(f) + "\"");
    }

    return true;
  });
}

/**
 * A function that always returns the value passed to it
 *
 * @function
 * @name identity
 * @param {*} v A value to be returned
 * @returns {*} The value passed in
 */
function identity(v) {
  return v;
}

/**
 * Creates a chain of Functions that will be executed in sequnce (from right to left), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 *
 * @function
 * @name compose
 * @param {function} ...fns One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns {function} A single Function that is ready to receive a value and pass it through the composed chain of Functions
 */

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  var fnlen = fns.length;
  if (fnlen === 0 || !areAllFunctions(fns)) return identity;
  /* eslint-disable-next-line jsdoc/require-jsdoc */

  function inner() {
    var result = fns[--fnlen].apply(fns, arguments);

    while (--fnlen >= 0) {
      result = fns[fnlen](result);
    }

    return result;
  }

  return inner;
}

/**
 * Several pieces of conditional logic to apply against a value and the _first_ one which matches will have a corresponding transformation applied to it.
 *
 * Supply an Array of pairs:
 *   - the first value is the conditional logic (`Function`) to match against the value
 *   - the second value is the transformation (`Function`) to apply to the value if the condition was matched
 *
 * __Note__: if your tranformation is _not_ a function then it will returned as-is in response to a succesfully met condition
 *
 * @function
 * @name cond
 * @param {Array<Array<function>>} conditionalTransforms An array of arrays (which have two values: the condition function and the transformation function)
 * @param {*} val A value of any type that will be transformed according to the appropriate condition.
 * @returns {*} The provided value transformed by the appropriate matching conditional transformation
 */
function cond(conditionalTransforms, val) {
  var result;
  conditionalTransforms.some(function (_ref) {
    var ifCondition = _ref[0],
        _ref$ = _ref[1],
        transform = _ref$ === void 0 ? val : _ref$;

    if (ifCondition(val)) {
      result = typeof transform === "function" ? transform(val) : transform;
      return true;
    }

    return false;
  });
  return result;
}

/**
 * A faster version of the native Array.includes.
 * It simply checks to see if a given list contains a given value
 *
 * @function
 * @private
 * @name _includes
 * @param {*} val A value (of any type) to search the array for
 * @param {Array<*>} arr A list of values which may or may not contain the specified value
 * @returns {boolean} Whether or not the provided value is in the provided list of values
 */
function _includes(val, arr) {
  var idx = arr.length;

  while (idx--) {
    if (arr[idx] === val) {
      return true;
    }
  }

  return false;
}

/**
 * Checks if a given value is present in a String OR Array
 *
 * @function
 * @name contains
 * @param {string | number} val A value which may be present in the String/Array
 * @param {Array<*> | string} arr An Array or String which may contain the provided value
 * @returns {boolean} Whether or not the String|Array contains the provided value
 */

function contains(val, arr) {
  return Array.isArray(arr) ? _includes(val, arr) : arr.indexOf(val) !== -1;
}

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

/**
 * Compares two lists of Strings/Numbers and returns the values that are different between the two lists
 *
 * @function
 * @name difference
 * @param {Array<string>|Array<number>} arr1 An Array of Strings
 * @param {Array<string>|Array<number>} arr2 An Array of Strings
 * @returns {Array<string>|Array<number>} An array of values that are different between the two lists
 */

function difference(arr1, arr2) {
  var diff = [];
  var len1 = arr1.length;
  var len2 = arr2.length;

  if (len1 === 0 && len2 === 0) {
    return diff;
  } else if (len1 === 0) {
    return arr2;
  } else if (len2 === 0) {
    return arr1;
  }

  for (var i = 0; i < len1; i++) {
    var val = arr1[i];

    if (!_includes(val, arr2)) {
      diff.push(val);
    }
  }

  return diff;
}

/**
 * A faster forEach that provides the same API as native.
 *
 * @function
 * @name each
 * @param {function} fn A Function to execute for each iteration. It will receive the value, index and full array (respectively) as args
 * @param {Array<*>} arr An Array to iterate over (any value will be passed into the iterate Function)
 */
function each(fn, arr) {
  for (var i = 0, count = arr.length; i < count; i++) {
    fn(arr[i], i, arr);
  }
}

/**
 * A function that accepts two functions and a value and will return the first result which is "truthy".
 * This function is curried because it doesn't make any sense to even have it unless you have the functions ahead of time but not the value.
 *
 * @function
 * @name eitherOr
 * @param {function} fnA The first function to be executed on the value
 * @param {function} fnB The second function to be executed on the value
 * @param {*} val A value to be passed into the functions
 * @returns {*} The result of executing value passed in
 */

function eitherOr(fnA, fnB, val) {
  if (typeof fnA !== "function") {
    throw new TypeError(fnA + " is not a function");
  }

  if (typeof fnB !== "function") {
    throw new TypeError(fnB + " is not a function");
  }

  return fnA(val) || fnB(val);
}

var eitherOr$1 = curry(eitherOr);

/**
 * Extracts an Array of key/value pairs from an Object.
 *
 * @function
 * @name entries
 * @param {object} obj The input object from which to extract prop keys and values
 * @returns {Array<string>} An Array of key/value pairs corresponding to those on the input object
 */
function entries(obj) {
  var keys = Object.keys(obj);
  var len = keys.length;

  for (var i = 0; i < len; i++) {
    keys[i] = [keys[i], obj[keys[i]]];
  }

  return keys;
}

var escapeChars = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",

  /* eslint-disable-next-line quotes */
  '"': "&quot;",
  "'": "&#39;"
};
/**
 * Converts ampersands, angle brackets, apostrophes and blockquotes to their HTML encoded equivalents
 *
 * @function
 * @name escapeHtml
 * @param {string} val A string values to escape
 * @returns {string} The original value (converted to string) and with any of the unallowed characters properly escaped (null/undefined values are converted to '')
 */

function escapeHtml(val) {
  return /[&<>"']/.test("" + val) ? ("" + val).replace(/[&<>"']/g, function (key) {
    return escapeChars[key];
  }) : "" + (val == null ? "" : val);
}

/**
 * Safely retrieves the constructor name for the native JavaScript type
 *
 * @function
 * @private
 * @name getConstructorName
 * @param {*} val A value of any type
 * @returns {string} The constructor name (if there is one) for the value
 */
function getConstructorName(val) {
  try {
    return val.constructor.name;
  } catch (err) {
    return "";
  }
}

/**
 * Checks if a given type's constructor name is that for a list or array like type
 *
 * @function
 * @private
 * @name isArrayLike
 * @param {string} name The constructor name for a given type
 * @returns {boolean} Whether or not the type's constructor is a list/array like type
 */

function isArrayLike(name) {
  switch (name) {
    case "Set":
    case "WeakSet":
    case "Array":
    case "Float64Array":
    case "Float32Array":
    case "Int32Array":
    case "Uint16Array":
    case "Int16Array":
    case "Uint8ClampedArray":
    case "Uint8Array":
    case "Int8Array":
      return true;

    default:
      return false;
  }
}
/**
 * Checks if a given value is "array-like".
 *
 * This includes:
 * - Array
 * - Set
 * - WeakSet
 * - Float64Array
 * - Float32Array
 * - Int32Array
 * - Uint16Array
 * - Int16Array
 * - Uint8ClampedArray
 * - Uint8Array
 * - Int8Array
 *
 * @function
 * @name isArrayish
 * @param {*} val A value to check as being an array
 * @returns {boolean} Whether the value is an array-like type
 */


function isArrayish(val) {
  return Array.isArray(val) || !isNil(val) && isArrayLike(getConstructorName(val));
}

/**
 * Applies a filtering function you provide over every character in a given string.
 *
 * @function
 * @name filterString
 * @param {function} fn A filtering function that is invoked on every char in the provided String value
 * @param {string} str A string value to filter over
 * @returns {string} A new String value that is the result of the filtering operation over the original string
 */
function filterString(fn, str) {
  var len = str.length;
  var newStr = "";

  for (var i = 0; i < len; i++) {
    newStr += fn(str[i], i, str) ? str[i] : "";
  }

  return newStr;
}

/**
 * Applies a filtering function you provide over every value in a given Object.
 *
 * @function
 * @name filterObject
 * @param {function} fn A filtering function that is invoked on every value in the provided Object
 * @param {object} obj An Object whose values will be filtered
 * @returns {object} A new Object that is the result of the filtering operation over all the values in the original Object
 */

function filterObject(fn, obj) {
  var newObj = {};
  forIn(function (key, val, ob) {
    if (fn(val, key, ob)) {
      newObj[key] = val;
    }
  }, obj);
  return newObj;
}

/**
 * Applies a filtering function you provide over a value you provide, according to its type.
 * String values will have the filtering function applied over every character in the String.
 * Objects will have the filtering function applied to every value in the Object.
 * Arrays (or Array-like values) will have the filtering function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 *
 * @function
 * @name filter
 * @param {function} fn A filtering function that is invoked on the provided value
 * @param {object | Array<*> | string} val An Object/Array/String whose values/chars will be filtered
 * @returns {object | Array<*> | string} A new value that is the result of the filtering operation over all the chars or values in the original String/Object/Array
 */

function filter(fn, val) {
  if (Array.isArray(val)) return val.filter(fn);
  if (isObject(val)) return filterObject(fn, val);
  if (typeof val === "string") return filterString(fn, val);
  if (isArrayish(val)) return val.filter(fn);
  return val;
}

/* eslint-disable consistent-return */

/**
 * Find a single value from an array of values, based on criteria defined in a predicate function.
 *
 * @function
 * @name find
 * @param {function} pred A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param {Array<*>} arr An array of values from which to find one particular matching value
 * @returns {*} Either a value from the array that matched the predicate function or undefined (if no match)
 */
function find(pred, arr) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    if (pred(arr[i])) return arr[i];
  }
}

/**
 * Find the index of a single value from an array of values, based on criteria defined in a predicate function.
 *
 * @function
 * @name findIndex
 * @param {function} pred A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param {Array<*>} arr An array of values from which to find the index of one particular matching value
 * @returns {number} Either the index of the value from the array that matched the predicate function or negative one (-1, if no match).
 */
function findIndex(pred, arr) {
  var i = -1;
  var len = arr.length;

  while (++i < len) {
    if (pred(arr[i])) return i;
  }

  return -1;
}

/**
 * Extracts the first value of an array of values.
 *
 * @function
 * @name first
 * @param {Array<*>} val An array of values from which to extract the first value
 * @returns {*} The value at the first index of the supplied array (which may be undefined)
 */
function first(val) {
  return (val || [])[0];
}

/**
 * Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.
 *
 * @function
 * @name flatten
 * @param {Array<Array<*>>|Array<*>} arr An array of values that may or may not be nested arrays themselves
 * @returns {Array<*>} A new array of values, but with any nested arrays from the original input extracted onto one single (flat) array
 */

function flatten(arr) {
  var newArr = [];
  var i = -1;
  var len = arr.length;

  while (++i < len) {
    var val = arr[i];

    if (isArrayish(val)) {
      var j = -1;
      var nlen = val.length;

      while (++j < nlen) {
        newArr.push(val[j]);
      }
    } else {
      newArr.push(val);
    }
  }

  return newArr;
}

/**
 * Performs a fuzzy search on a list of strings or objects.
 * If a list of objects, provided the prop extraction function so the search can find the correct field(s)
 * This is heavily inspired by (most of) the algorithm used by [Matt York's](https://github.com/myork/fuzzy) fuzzy search function,
 * however several features were not carried over and his implementation of that alrgorithm has been significantly changed to achieve a 25% speed improvement.
 * Please see his original work - called [fuzzy](https://www.npmjs.com/package/fuzzy) MIT - if you need some of his additional options.
 *
 * @function
 * @name fuzzy
 * @param {function} propFn A function which will extract all the fields which you wish to fuzzy search on. Omit if the list is a list of strings
 * @param {string} needle The search value itself
 * @param {boolean} [caseSensitive=false] Whether or not to perform a case-sensitive search
 * @param {Array<string> | Array<object>} arr An array of string values or objects which have string values to be searched on
 * @returns {Array<string> | Array<object>} The filtered list of search results
 */
function fuzzy(propFn, needle, caseSensitive, arr) {
  if (arr == null || !Array.isArray(arr) || arr.length === 0) return [];
  if (typeof needle !== "string" || !needle.trim().length) return arr;
  var scores = [];
  var len = arr.length;
  var needleLen = needle.length;
  var idx = len;
  var noodle = caseSensitive ? needle : needle.toLowerCase();
  var extractFn = typeof propFn !== "function" && caseSensitive ? function (v) {
    return v;
  } : typeof propFn !== "function" ? function (v) {
    return v.toLowerCase();
  } : caseSensitive ? propFn : function (v) {
    return propFn(v).toLowerCase();
  };

  while (--idx) {
    var score = 0;
    var val = extractFn(arr[idx]);
    var valLen = val.length;

    if (noodle === val) {
      scores.push([Infinity, idx]);
    } else if (valLen !== 0) {
      var valIdx = 0;
      var matchedInNeedleIdx = 0;
      var numOfCharsMatchedAtOnce = 0;

      while (valIdx < valLen) {
        if (noodle[matchedInNeedleIdx] === val[valIdx]) {
          matchedInNeedleIdx++;
          numOfCharsMatchedAtOnce++;
        } else {
          numOfCharsMatchedAtOnce = 0;
        }

        score += numOfCharsMatchedAtOnce;
        valIdx++;
      }

      if (matchedInNeedleIdx === needleLen) {
        scores.push([score, idx]);
      }
    }
  }

  return scores.sort(function (a, b) {
    return b[0] - a[0] || a[1] - b[1];
  }).map(function (_ref) {
    _ref[0];
        var index = _ref[1];
    return arr[index];
  });
}

/**
 * Transforms a string value into one which is title-cased. The first letter of any word is capitalized.
 *
 * @function
 * @name toTitleCase
 * @param {string} str A string which may contain uppercase characters
 * @returns {string} A new string that is an lowercase representation of the original string
 */
function toTitleCase(str) {
  return str.split(/\s/).map(function (s) {
    return "" + s.charAt(0).toUpperCase() + s.slice(1);
  }).join(" ");
}

/**
 * Gets the type for any value. If available will inspect the constructor name, otherwise will use the typeof
 *
 * @function
 * @name getType
 * @param {*} val A value of any kind
 * @returns {string} The stringified representation of the value's type
 */

function getType(val) {
  if (isNil(val)) {
    return "" + val;
  }

  return getConstructorName(val) || toTitleCase(typeof val);
}

/**
 * Checks if a given Object contains a (potentially) nested property of a specified path
 *
 * @function
 * @name hasNestedProp
 * @param {Array<string> | string} prop A prop name, a dot-separated prop path, or an array of prop path "pieces" to look for in the object
 * @param {object} obj An Object to inspect for a given prop at the specified path
 * @returns {boolean} Whether the object contains the specified prop path
 */

function hasNestedProp(prop, obj) {
  var paths = typeof prop === "string" ? prop.split(".") : prop;
  var len = paths.length;
  if (len === 0) return false;
  var idx = 0;
  var val = obj[paths[idx]];
  var hasProp = has(paths[idx], obj);

  while (++idx < len && hasProp === true) {
    hasProp = has(paths[idx], val);

    if (hasProp) {
      val = val[paths[idx]];
    }
  }

  return hasProp;
}

/**
 * Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists
 *
 * @function
 * @name intersection
 * @param {Array<string> | Array<number>} arr1 An Array of Strings/Numbers
 * @param {Array<string> | Array<number>} arr2 An Array of Strings/Numbers
 * @returns {Array<string> | Array<number>} The values in common between the two lists
 */

function intersection(arr1, arr2) {
  var diff = [];
  var len1 = arr1.length;
  var len2 = arr2.length;
  if (len1 === 0 || len2 === 0) return diff;

  for (var i = 0; i < len1; i++) {
    var val = arr1[i];

    if (_includes(val, arr2)) {
      diff.push(val);
    }
  }

  for (var j = 0; j < len2; j++) {
    var _val = arr2[j];

    if (_includes(_val, arr1) && !_includes(_val, diff)) {
      diff.push(_val);
    }
  }

  return diff;
}

/**
 * Swaps the values for keys in a given object. So the values in that object should be the kind that _can_ be converted to unique string values
 *
 * @function
 * @name flipKeyValues
 * @param {object} obj An object whose values _can_ be swapped for keys
 * @returns {object} A new object whose keys were the values from the original object
 */

function flipKeyValues(obj) {
  var newObj = {};
  forIn(function (key, val) {
    newObj[String(val)] = key;
  }, obj);
  return newObj;
}

/**
 * Checks to see if a value is a certain type.
 * You may specify that type as a case-insensitive string
 * (ie, 'string', 'boolean', 'object', 'function', 'array', 'regexp', 'date', 'set, 'map'), OR a JavaScript type constructor function (ie, String, Function, Boolean, Array, RegExp, Date, Set, Map).
 *
 * @function
 * @name is
 * @param {function | string} ofType A JavaScript type constructor function (like `Function`, `String`, `RegExp`, `Boolean`, `Array`, `Object`, etc.) or a string value matching the name of one
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value matches the specified type
 * @example
 * is('boolean', true)
 * is('array', [1, 2, 3])
 * is(RegExp, /[a-z0-9]/)
 * is(Function, () => null)
 *
 */

function is(ofType, val) {
  return ofType === val || typeof ofType === "string" && getType(val).toLowerCase() === ofType.toLowerCase() || ofType && !ofType.name && getType(ofType) === getType(val) || ofType && ofType.name && getConstructorName(ofType) === "Function" && getType(val) === ofType.name;
}

/**
 * Checks a value to see if it is a String containing either no characters OR no characters _except_ for whitespace.
 *
 * @function
 * @name isBlankString
 * @param {*} val A value of any type
 * @returns {boolean} Whether or not the value is a blank string
 */
function isBlankString(val) {
  return typeof val === "string" && (val.length === 0 || /^\s*$/.test(val));
}

/**
 * Checks if a value is empty. Arrays, Objects, Strings, Sets, and Null/Undefined values are considered empty if their length (or size) prop is zero (or if they are Null or Undefined).
 * Whitespace-only strings are NOT considered empty (use `isBlankString` instead).
 *
 * @function
 * @name isEmpty
 * @param {*} val A value of any type which may be considered empty
 * @returns {boolean} Whether or not the value is empty
 */

function isEmpty(val) {
  return val == null || val.length === 0 || val.size === 0 || isObject(val) && Object.keys(val).length === 0;
}

/**
 * Checks if two provided values are deeply equal.
 * If Objects or Arrays (or Array-like values) are provided, they are inspected recursively.
 * Primitive values are checked to see if they are stricly equal (ie triple equals; no type coercion).
 *
 * @function
 * @name isEqual
 * @param {*} firstVal A value which may be null, undefined, a JavaScript primitive value, an array of values, an array-like value, or an object
 * @param {*} secondVal A value which may be null, undefined, a JavaScript
 * @returns {boolean} Whether or not the two values are deeply equal
 */

function isEqual(firstVal, secondVal) {
  if (firstVal === secondVal) return true;
  if (typeof firstVal !== typeof secondVal) return false;
  if (typeof firstVal.length === "number" && typeof secondVal.length === "number" && firstVal.length !== secondVal.length) return false;

  if (typeof firstVal.every === "function" && typeof secondVal.every === "function") {
    return firstVal.every(function (v, i) {
      return isEqual(v, secondVal[i]);
    });
  }

  if (isObject(firstVal) && isObject(secondVal)) {
    var firstKeys = Object.keys(firstVal);
    var secondKeys = Object.keys(secondVal);
    return firstKeys.length === secondKeys.length && firstKeys.every(function (key) {
      return isEqual(firstVal[key], secondVal[key]);
    });
  }

  return false;
}

/**
 * Checks if a given value is numeric
 *
 * @function
 * @name isNumber
 * @param {number} val A value to verify is a number
 * @returns {boolean} Whether or not the given value is a number
 */
function isNumber(val) {
  return typeof val === "number" && Number.isFinite(val);
}

/**
 * Checks a value to see if it is an integer.
 *
 * @function
 * @name isInteger
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is an integer
 */

function isInteger(val) {
  return isNumber(val) && Number.isInteger(val);
}

/**
 * Checks to see if a value is a Map or WeakMap
 *
 * @function
 * @name isMap
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is a Map or WeakMap
 */

function isMap(val) {
  return getConstructorName(val) === "Map" || getConstructorName(val) === "WeakMap";
}

/**
 * Checks if a given numeric value is a negative integer.
 *
 * @function
 * @name isNegativeInteger
 * @param {number} val A value to verify is a negative integer
 * @returns {boolean} Whether or not the given value is a negative integer
 */

function isNegativeInteger(val) {
  return isInteger(val) && +val < 0;
}

/**
 * Checks if a given numeric value is negative.
 *
 * @function
 * @name isNegativeNumber
 * @param {number} val A value to verify is a negative number
 * @returns {boolean} Whether or not the given value is a negative number
 */

function isNegativeNumber(val) {
  return isNumber(val) && +val < 0;
}

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

/**
 * Checks if a given numeric value is a positive integer.
 *
 * @function
 * @name isPositiveInteger
 * @param {number} val A value to verify is a positive integer
 * @returns {boolean} Whether or not the given value is a positive integer
 */

function isPositiveInteger(val) {
  return isInteger(val) && +val > 0;
}

/**
 * Checks if a given numeric value is positive.
 *
 * @function
 * @name isPositiveNumber
 * @param {number} val A value to verify is a positive number
 * @returns {boolean} Whether or not the given value is a positive number
 */

function isPositiveNumber(val) {
  return isNumber(val) && +val > 0;
}

/**
 * Checks if a given numeric value is a prime number.
 * This is any integer value divisible only by itself and 1.
 *
 * @function
 * @name isPrime
 * @param {number} val A value to verify is a prime number
 * @returns {boolean} Whether or not the given value is a prime number
 */
function isPrime(val) {
  if (!Number.isInteger(val) || val <= 1 || val !== 2 && val % 2 === 0) {
    return false;
  }
  /* In checking if a given number is prime,
   * it isn't necessary to even check if it is
   * divisible by the majority of numbers between itself and 1.
   * Nothing greater than a third of the value need be checked,
   * but by getting a third/fourth/fifth/sixth/etc of the value
   * and using that as the cutoff limit to check for divisibility,
   * we can save many iterations.
   */


  var divideValBy = 3;

  while (divideValBy < val && divideValBy <= val / divideValBy) {
    if (val % divideValBy === 0 || Number.isInteger(val / divideValBy) && val % (val / divideValBy) === 0) {
      return false;
    }

    divideValBy++;
  }

  return true;
}

/**
 * Checks if a given type name is a primitve type
 *
 * @function
 * @private
 * @name _isPrimitiveName
 * @param {string} typeName The name of the type
 * @returns {boolean} Whether or not the type's name is a primitive type name
 */

function _isPrimitiveName(typeName) {
  switch (typeName) {
    case "boolean":
    case "number":
    case "string":
    case "Boolean":
    case "Number":
    case "String":
    case "Symbol":
      return true;

    default:
      return false;
  }
}
/**
 * Checks if a given value is of a primitive type (ie, Boolean, String, Number, or Symbol).
 *
 * @function
 * @name isPrimitive
 * @param {*} val A value which may be of a primitive type
 * @returns {boolean} Whether or not the value is primitive
 */


function isPrimitive(val) {
  return _isPrimitiveName(typeof val) || _isPrimitiveName(getConstructorName(val));
}

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

/**
 * Inspects two values to see if they are the same type.
 * The typeof and (if necessary) constructor names are inspected during this check.
 *
 * @function
 * @name isSameType
 * @param {*} val1 A value (of any type)
 * @param {*} val2 A value (of any type)
 * @returns {boolean} Whether or not the two values are of the same type
 */

function isSameType(val1, val2) {
  return getType(val1) === getType(val2);
}

/**
 * Checks to see if a value is a Set or WeakSet
 *
 * @function
 * @name isSet
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is a Set or WeakSet
 */

function isSet(val) {
  return getConstructorName(val) === "Set" || getConstructorName(val) === "WeakSet";
}

/**
 * Inspects two values to see if they are strictly equal, meaning no type coercion or deepyly nested equality checks are performed.
 * A very simple triple equals is all that is used.
 *
 * @function
 * @name isStrictEqual
 * @param {*} firstVal A value (of any type)
 * @param {*} secondVal A value (of any type)
 * @returns {boolean} Whether or not the two values are strictly equal
 */
function isStrictEqual(firstVal, secondVal) {
  return firstVal === secondVal;
}

/**
 * Checks to see if a value is undefined
 *
 * @function
 * @name isUndefined
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is undefined
 */
function isUndefined(val) {
  return val === undefined;
}

/**
 * Checks if a given value is zero or a string representing zero.
 * For string values, what we want is "0" or "0.0" but not "" or " " (which also coerce to zero).
 *
 * @function
 * @name isZero
 * @param {number|string} val A value to verify is zero or a zero-like string.
 * @returns {boolean} Whether or not the given value is zero or a zero-like string.
 */
function isZero(val) {
  return val === 0 || typeof val === "string" && val.trim().length > 0 && +val === 0;
}

/**
 * Retrieves the last value from an Array
 *
 * @function
 * @name last
 * @param {Array<*>} arr An array of any kind of values
 * @returns {*} The last value from a given array
 */
function last(arr) {
  var arrlen = arr.length || 0;
  return (arr || [])[arrlen - 1];
}

/**
 * Applies a mapping function you provide over every character in a given string.
 *
 * @function
 * @name mapString
 * @param {function} fn A mapping function that is invoked on every char in the provided String value
 * @param {string} str A string value to map over
 * @returns {string} A new String value that is the result of the mapping operation over the original string
 */
function mapString(fn, str) {
  var len = str.length;
  var newStr = "";

  for (var i = 0; i < len; i++) {
    newStr += fn(str[i], i, str);
  }

  return newStr;
}

/**
 * Applies a mapping function you provide over every value in a given Object.
 *
 * @function
 * @name mapObject
 * @param {function} fn A mapping function that is invoked on every value in the provided Object
 * @param {object} obj An Object whose values will be mapped over
 * @returns {object} A new Object that is the result of the mapping operation over all the values in the original Object
 */

function mapObject(fn, obj) {
  var newObj = {};
  forIn(function (key, val, ob) {
    newObj[key] = fn(val, key, ob);
  }, obj);
  return newObj;
}

/**
 * Applies a mapping function you provide over a value you provide, according to its type.
 * String values will have the mapping function applied over every character in the String.
 * Objects will have the mapping function applied to every value in the Object.
 * Arrays (or Array-like values) will have the mapping function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 * Also, this mapping operation does _not_ mutate the original value.
 *
 * @function
 * @name map
 * @param {function} fn A mapping function that is invoked on the provided value
 * @param {object | Array<*> | string} val An Object/Array/String whose values/chars will be mapped over
 * @returns {object | Array<*> | string} A new value that is the result of the mapping operation over all the chars or values in the original String/Object/Array
 */

function map(fn, val) {
  if (Array.isArray(val)) {
    var len = val.length;
    var newArr = Array(len);

    for (var i = 0; i < len; i++) {
      newArr[i] = fn(val[i], i);
    }

    return newArr;
  }

  if (typeof val === "string") return mapString(fn, val);
  if (typeof val.map === "function") return val.map(fn);
  if (isObject(val)) return mapObject(fn, val);
  return val;
}

/**
 * Applies a mapping function you provide over every value in a given Object (recursively).
 *
 * @function
 * @name mapObjectRecursive
 * @param {function} fn A mapping function that is invoked on every value in the provided Object
 * @param {object} obj An Object whose values will be mapped over (recursively)
 * @returns {object} A new Object that is the result of the mapping operation over all the values in the original Object
 */

function mapObjectRecursive(fn, obj) {
  var newObj = {};
  forIn(function (key, val, ob) {
    /* Looks redundant, but is written this way for speed */
    if (typeof val === "object" && val != null && (val.constructor && val.constructor.name === "Object" || isObject(val))) {
      newObj[key] = mapObjectRecursive(fn, val);
    } else {
      newObj[key] = fn(val, key, ob);
    }
  }, obj);
  return newObj;
}

/**
 * Applies one or more mapping functions to the value in a given Object.
 * But rather than applying the same mapping function to every value in an Object, instead you use a "spec" object to link the appropriate mapping function to the key/val in the input Object.
 *
 * This is similar to Ramda's `evolve()` however you can also set values in your spec that are _not_ functions (which will just override whatever matching key there might be on the input object).
 * Addtionally, it supplies the key and the object as the 2nd and third params to your spec's transformation function, so that you can create props based on the entire input Object (with Ramda you'll need to also use `applySpec()` and in a separate operation to derived these kinds of values).
 *
 * As an example, If you want a mapping function to be applied to a prop called "name", then you would first pass in a spec object with a prop on it called "name" and the value would be the mapping function.
 * Then the actual input object (with the desciption field) will have the matching mapping function from your spec applied to it directly.
 *
 * @function
 * @name mapSpec
 * @param {object} spec An Object whose keys should correspond to keys in the input Object and whose values are mapping functions that will receive the matching input Object's prop as input
 * @param {object} obj The actual input to map over and transform
 * @returns {object} A new Object with all the mapping functions from the spec Object applied to the corresponding values in the input Object (if they exist)
 * @example
 *   mapSpec({
 *     age: Number,
 *     isAlive: Boolean,
 *     name: str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
 *   }, {
 *     age: '20',
 *     isAlive: 1,
 *     name: 'john'
 *   })
 */

function mapSpec(spec, obj) {
  var newObj = {};
  forIn(function (key, val, ob) {
    if (typeof spec[key] === "function") {
      newObj[key] = spec[key](val, key, ob);
    } else if (isObject(spec[key])) {
      newObj[key] = mapSpec(spec[key], val);
    } else {
      newObj[key] = val;
    }
  }, obj);
  forIn(function (key, val) {
    if (typeof val !== "function") {
      newObj[key] = val;
    } else if (!has(key, newObj)) {
      newObj[key] = val(undefined, key, newObj);
    }
  }, spec);
  return newObj;
}

/**
 * Takes a snapshot of the input args and the output result for a provided function, and on repeated usage will shortcut invoking the function and return the cached output instead, whenever the same input args are supplied to the function.
 *
 * @function
 * @name memoize
 * @param {function} fn A function whose input values (supplied later) will be cached with its output result, so that the invoking the function can be skipped the next time the same values are passed to it
 * @returns {function} A memoized version of the original function. It will cache the input values supplied to it each time it is used
 */

function memoize(fn) {
  var cache = {};
  /* eslint-disable-next-line jsdoc/require-jsdoc */

  function inner() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = JSON.stringify(args);

    if (!has(key, cache)) {
      cache[key] = fn.apply(fn, args);
    }

    return cache[key];
  }

  return inner;
}

/**
 * Removes specified keys from an object (after cloning the Object).
 *
 * @function
 * @name omit
 * @param {Array<string>} keys An array of keys to search for in the Object and exclude from the output
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but without the specified keys
 */

function omit(keys, obj) {
  var newObj = {};
  forIn(function (key, val) {
    if (!_includes(key, keys)) {
      newObj[key] = val;
    }
  }, obj);
  return newObj;
}

/**
 * Removes everything _except_ the specified keys from an object (after cloning the Object).
 *
 * @function
 * @name pick
 * @param {Array<string>} keys An array of keys to search for in the Object and include from the output
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but with _only_ the specified keys
 */
function pick(keys, obj) {
  var newObj = {};
  var numOfKeys = keys.length;

  for (var i = 0; i < numOfKeys; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, keys[i])) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }

  return newObj;
}

/**
 * Removes all `null` or `undefined` values from a given object
 *
 * @function
 * @name omitNull
 * @param {object} obj An Object from which to copy and remove null/undefined
 * @returns {object} A copy of the original Object, but without any `null` or `undefined` values
 */
function omitNull(obj) {
  var newObj = {};
  var keys = Object.keys(obj);
  var numOfKeys = keys.length;

  for (var i = 0; i < numOfKeys; i++) {
    if (obj[keys[i]] != null) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }

  return newObj;
}

/**
 * Removes all `undefined` values from a given object
 *
 * @function
 * @name omitUndefined
 * @param {object} obj An Object from which to copy and remove undefined
 * @returns {object} A copy of the original Object, but without any `undefined` values
 */
function omitUndefined(obj) {
  var newObj = {};
  var keys = Object.keys(obj);
  var numOfKeys = keys.length;

  for (var i = 0; i < numOfKeys; i++) {
    if (obj[keys[i]] !== undefined) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }

  return newObj;
}

/**
 * Creates a chain of Functions that will be executed in sequnce (from left to right), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 *
 * @function
 * @name pipe
 * @param {function} ...fns One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns {function} A single Function that is ready to receive a value and pass it through the piped chain of Functions
 */

function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  var fnlen = fns.length;
  if (fnlen === 0 || !areAllFunctions(fns)) return identity;
  /* eslint-disable-next-line jsdoc/require-jsdoc */

  function inner() {
    var result = fns[0].apply(fns, arguments);

    for (var i = 1; i < fnlen; i++) {
      result = fns[i](result);
    }

    return result;
  }

  return inner;
}

/**
 * Merges two values together, placing the characters (or values) from one before those from the other.
 *
 * @function
 * @name prepend
 * @param {Array<*> | object | string | number} firstVal An Array, Object, String or Number that the will have a new value(s) merged before its own characters/values
 * @param {Array<*> | object | string | number} secondVal An Array, Object, String or Number that the will merge _before_ those from the first provided value
 * @returns {Array<*> | object | string} A new Array, Object, or String that has the characters/values from the second provided value merged _before_ those from the first provided value
 */

function prepend(firstVal, secondVal) {
  if ([firstVal, secondVal].every(function (val) {
    return typeof val === "string" || typeof val === "number";
  })) {
    return "" + secondVal + firstVal;
  }

  if (Array.isArray(firstVal) && Array.isArray(secondVal)) {
    return [].concat(secondVal, firstVal);
  }

  return merge(secondVal, firstVal);
}

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

/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.
 *
 * @function
 * @name propEquals
 * @param {string} prop A key to search for on the Object
 * @param {*} val A value that the extracted prop will be compared against
 * @param {object} obj An object which may contain a specified prop
 * @returns {boolean} Whether or not the requested prop equals the specified value
 */

function propEquals(prop, val, obj) {
  return propAt(prop, obj) === val;
}

/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value is of the type you specifiy.
 *
 * @function
 * @name propIs
 * @param {function | string} type A JavaScript type constructor function (ie `Boolean`, `RegExp`, `Date`, `Array`, `Object`, `Number`, `String`, etc) OR a string represention of the type (ie, "boolean", "regexp", "date", "array", "object", "number", "string", etc)
 * @param {string} prop A key to search for on the Object
 * @param {object} obj An object which may contain a specified prop
 * @returns {boolean} Whether or not the requested prop is of the type specified
 */

function propIs(type, prop, obj) {
  return is(type, propAt(prop, obj));
}

/**
 * Attempts to find a specified key on an Object you provide, and if not found will fall back to an additional value you specify.
 *
 * @function
 * @name propOr
 * @param {*} fallback A value to fall back on if the requested key does not exist on the provided Object
 * @param {string} prop A key to search for on the Object
 * @param {object} obj An object which may contain a specified prop
 * @returns {*} Either the requested prop (from the Object) or the fallback value
 */

function propOr(fallback, prop, obj) {
  var val = propAt(prop, obj);
  return isUndefined(val) ? fallback : val;
}

/**
 * Looks for a specified key on an Object you provide and sets it to the provided value.
 * If the path does not exist, it will be created (you can check for the path via `propIs` or `propAt` or `propEquals` first if you don't wish to create the path every time).
 * The is performed safely and will not throw an error if somethign on the prop path chain you specify doesn't exist.
 *
 * @function
 * @name propSet
 * @param {string | Array<string>} prop A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param {*} val A value to be placed at the provided property path
 * @param {object} obj An object which onto which the value will be placed
 * @returns {object} The original object, but modified to have the provided value placed at the specified path it does not exist
 */

function propSet(prop, val, obj) {
  var paths = typeof prop === "string" ? prop.split(".") : prop;
  var len = paths.length;
  if (len === 0) return obj;
  var newObj = clone(obj);

  if (len > 1) {
    newObj[paths[0]] = propSet(paths.slice(1), val, !has(paths[0], newObj) || !isObject(newObj[paths[0]]) ? {} : newObj[paths[0]]);
  } else {
    newObj[paths[0]] = val;
  }

  return newObj;
}

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

/**
 * Renames a set of keys in a given object (removing the old ones)
 *
 * @function
 * @name renameKeys
 * @param {object} keyMap An object whose keys are the _current_ key names and whose values are the _new_ key names
 * @param {object} obj An Object whose keys will be renamed
 * @returns {object} A new Object that has all the specified keys renamed to their new names
 */

function renameKeys(keyMap, obj) {
  var newObj = {};
  forIn(function (key, val) {
    if (has(key, keyMap)) {
      newObj[keyMap[key]] = val;
    } else {
      newObj[key] = val;
    }
  }, obj);
  return newObj;
}

var getter = {
  get: function get(target, key) {
    if (isObject(target[key])) {
      return new Proxy(target[key], getter);
    }

    if (isNil(target[key])) {
      var _Proxy;

      return new Proxy((_Proxy = {}, _Proxy[Symbol.toPrimitive] = String, _Proxy), getter);
    }

    return target[key];
  }
};
/**
 * Recursively shims an Object.
 * Every time the getter is invoked (which happens whenever prop paths are referenced in the consuming code), the path is shimmed with another Proxy.
 * It is not a polyfill but rather a way to keep deep prop paths that may not exist on the source object from throwing an error.
 *
 * @function
 * @name shim
 * @param {object} obj An object that will be the Proxy's source
 * @returns {Proxy} An Object that will return props on the source Object if they exist but safely handle missing prop paths without throwing errors.
 */

function shim(obj) {
  return new Proxy(obj, getter);
}

/**
 * Checks the length (or size) of many different types of values:
 *   - Array
 *   - Set
 *   - Map
 *   - Object (num of keys)
 *   - String (num of chars)
 *   - Function (num of params)
 *
 * @function
 * @name size
 * @param {object | string | Array<*> | function} val A value of type Object, String, Array or Function
 * @returns {number} The length of the String or Array, OR the number of keys in the Object
 */

function size(val) {
  if (!isUndefined(val.length)) {
    return val.length;
  }

  if (!isUndefined(val.size)) {
    return val.size;
  }

  if (typeof val === "object") {
    return Object.keys(val).length;
  }

  return undefined;
}

/**
 * Transforms a string value into one which is hyphenated.
 * Hyphens and underscores are removed and interpred as the boundaries for new words.
 * The first letter of each new word - not preceded by whitespace - is capitalized.
 *
 * @function
 * @name toCamelCase
 * @param {string} str A string which may contain underscores and hyphens and/or may be title-cased.
 * @returns {string} A new string that is without hyphens and underscores and the first letter of every new word boundary is capitalized, unless preceded by whitespace
 */
function toCamelCase(str) {
  return [str.charAt(0).toLowerCase(), str.slice(1).replace(/[_-]+[a-z]/ig, function (w) {
    return w.replace(/[_-]/g, "").toUpperCase();
  }).replace(/\s+[A-Z]/g, function (w) {
    return w.toLowerCase();
  })].join("");
}

/**
 * Transforms a string value into one which is hyphenated.
 * Whitespace and underscores are replaced with hyphens, and uppercase letters are interpreted as boundaries for new hyphenated words.
 *
 * @function
 * @name toKebabCase
 * @param {string} str A string which may contain uppercase characters
 * @returns {string} A new string that is a hyphenated representation of the original string
 */
function toKebabCase(str) {
  return str.replace(/(\S)(\s+)(\S)/g, "$1-$3").replace(/([a-z0-9])(?=[A-Z])/g, "$1-").replace(/_/g, "-").replace(/--/g, "-").toLowerCase();
}

/**
 * Simple wrapper around String.prototype.toLowerCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 *
 * @function
 * @name toLowerCase
 * @param {string} str A string which may contain uppercase characters
 * @returns {string} A new string that is an lowercase representation of the original string
 */
function toLowerCase(str) {
  return str.toLowerCase();
}

/**
 * Coerces a given string value to a number (if valid).
 *
 * @function
 * @name toNumber
 * @param {string} val A string value to coerce to a number
 * @returns {number|undefined} A numeric representation of the original value, or `undefined` if it cannot be coerced to a number.
 */

function toNumber(val) {
  if (isZero(val)) {
    return 0;
  }

  var num = +val;
  return isNumber(num) && num !== 0 ? num : undefined;
}

/**
 * Transforms a string value into one which is separated by underscores.
 * Whitespace and hyphens are replaced with underscores, and uppercase letters are interpreted as boundaries for new underscore-separated words.
 *
 * @function
 * @name toSnakeCase
 * @param {string} str A string which may contain uppercase characters or hyphens
 * @returns {string} A new string that is an lowercase representation of the original string
 */
function toSnakeCase(str) {
  return str.replace(/(\S)(\s+)(\S)/g, "$1_$3").replace(/([a-z0-9])(?=[A-Z])/g, "$1_").replace(/-/g, "_").replace(/__/g, "_").toLowerCase();
}

/**
 * Simple wrapper around String.prototype.toUpperCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 *
 * @function
 * @name toUpperCase
 * @param {string} str A string which may contain lowercase characters
 * @returns {string} A new string that is an uppercase representation of the original string
 */
function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Filters an array of values down to only those which are unique
 *
 * @function
 * @name uniq
 * @param {Array<*>} list An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */

function uniq(list) {
  var idx = -1;
  var newArr = [];
  var len = list.length;

  while (++idx < len) {
    var val = list[idx];

    if (!_includes(val, newArr)) {
      newArr.push(val);
    }
  }

  return newArr;
}

/**
 * Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)
 *
 * @function
 * @name uniqBy
 * @param {function | string} pred A predicate function
 * @param {Array<*>} list An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */

function uniqBy(pred, list) {
  var fn;

  if (typeof pred === "string" && pred.split(".").length === 1) {
    fn = function fn(o) {
      return o[pred];
    };
  } else if (Array.isArray(pred) && pred.length === 1) {
    fn = function fn(o) {
      return o[pred[0]];
    };
  } else if (typeof pred === "function") {
    fn = pred;
  } else {
    fn = function fn(o) {
      return propAt(pred, o);
    };
  }

  var idx = -1;
  var newArr = [];
  var compared = [];
  var len = list.length;

  while (++idx < len) {
    var val = list[idx];
    var valley = fn(val);

    if (!_includes(valley, compared)) {
      newArr.push(val);
      compared.push(valley);
    }
  }

  return newArr;
}

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

var isFunction = function isFunction(v) {
  return typeof v === "function";
};

var brokenValidator = function brokenValidator(val, key) {
  return "Validations for \"" + key + "\" are broken";
};

var defaultMessageHandler = function defaultMessageHandler(val, key) {
  return "\"" + val + "\" is not valid for \"" + key + "\"";
};
/**
 * A function which ensures the input is either a singel validator, a list of validators, or possible just the validator function.
 * This is essentially a tuple whose first indexed value is the actual function which validates the input and whose second indexed value is the error message which is display (or a function which returns the error message) when the validation fails.
 *
 * @function
 * @private
 * @name _unpackValidator
 * @param {Array<function|string>|Array<Array<function|string>>|function} rawValidators A single validator, a list of validators or possibly just a validation function.
 * @returns {object} An object of validation functions which are ready to
 * receive the value to validate
 */


function _unpackValidator(rawValidators) {
  var validators = cond([[isFunction, [[rawValidators, defaultMessageHandler]]], [function (v) {
    return Array.isArray(v) && v.length <= 2 && isFunction(v[0]);
  }, function (_ref) {
    var validator = _ref[0],
        _ref$ = _ref[1],
        message = _ref$ === void 0 ? defaultMessageHandler : _ref$;
    return [[validator, toFunction(message)]];
  }], [function (v) {
    return Array.isArray(v) && v.every(function (kv) {
      return Array.isArray(kv);
    });
  }, function (v) {
    return v.map(function (_ref2) {
      var validator = _ref2[0],
          _ref2$ = _ref2[1],
          message = _ref2$ === void 0 ? defaultMessageHandler : _ref2$;
      return [validator, toFunction(message)];
    });
  }], [function (v) {
    return Array.isArray(v);
  }, function (v) {
    return v.map(function (validator) {
      if (Array.isArray(validator) && isFunction(validator[0])) {
        return [validator[0], toFunction(validator[1] || defaultMessageHandler)];
      } else if (isFunction(validator)) {
        return [validator, defaultMessageHandler];
      }

      return [function () {
        return true;
      }, brokenValidator];
    });
  }], [function () {
    return true;
  }, [[function () {
    return false;
  }, brokenValidator]]]], rawValidators);
  return function (v, k) {
    return validators.map(function (_ref3) {
      var validator = _ref3[0],
          createErrorMessage = _ref3[1];
      return validator(v, k) || createErrorMessage(v, k);
    }).filter(function (kv) {
      return kv !== true;
    });
  };
}
/**
 * Applies many validations to an object of values.
 * Those validations are written as Arrays of pairs:
 *   - for the value at the first index supply your validation function that _must_ pass
 *   - for the value at the second index supply a corresponding error message (OR function returning an error message)
 *     should the validation fail.
 *
 * If you do not supply a validation error message, a default one will be built that looks like:
 *   `"${val}" is not valid for "${key}"`
 *
 * And of course, you can write your validation error message as a function that will receive the value and key name as its first and second params (you should return a message as a string).
 *
 * If you do not supply valid input (Array of validator function and validation error message), rather than throwing an error it will be replaced with a validation function that always returns `false` and a corresponding error message of:
 *   `Validations for "${key}" are broken`
 *
 * @function
 * @name validate
 * @param {Array<function>} validations An array of validator functions and their corresponding error message
 * @param {object} values An Object of key value pairs, the keys should correspond to validators and the values are that which is to be validated
 * @returns {object} An object containing the key names of the values and one or more validation error messages (Only key names whose values were found to be invalid will show up on this output Object; an empty Object means everything was valid)
 * @example
 * validate(isRequired, val)
 * validate([isRequired, 'field is required'], val)
 * validate([
 *   [isRequired, (_, key) => `${key} is required`],
 *   [isValidThing, val => `${val} is not a valid thing`],
 *   [mustBeBlue, 'Your favorite color must be blue'],
 *   [functionalOrObjectOriented]
 * ], val)
 */


function validate(validations, values) {
  var validators = mapObject(_unpackValidator, validations);
  var invalids = {};
  forIn(function (key, val) {
    var validationResults = val(values[key], key);

    if (validationResults.length) {
      invalids[key] = validationResults;
    }
  }, validators);
  return invalids;
}

/**
 * A simple polyfill for Object.values()
 *
 * @function
 * @name values
 * @param {object} obj An Object whose values need to be retrieved
 * @returns {Array<*>} A list of all the values in the provided Object, ordered by keys
 */

function values(obj) {
  var arr = [];
  forIn(function (key, val) {
    arr.push(val);
  }, obj);
  return arr;
}

exports.any = any;
exports.append = append;
exports.assign = assign;
exports.clone = clone;
exports.combine = combine;
exports.compose = compose;
exports.concat = concat;
exports.cond = cond;
exports.contains = contains;
exports.converge = converge;
exports.convergeZip = convergeZip;
exports.curry = curry;
exports.curryN = curryN;
exports.difference = difference;
exports.each = each;
exports.eitherOr = eitherOr$1;
exports.entries = entries;
exports.escapeHtml = escapeHtml;
exports.filter = filter;
exports.filterObject = filterObject;
exports.filterString = filterString;
exports.find = find;
exports.findIndex = findIndex;
exports.first = first;
exports.flatten = flatten;
exports.forEach = each;
exports.forIn = forIn;
exports.fuzzy = fuzzy;
exports.getType = getType;
exports.has = has;
exports.hasNestedProp = hasNestedProp;
exports.head = first;
exports.identity = identity;
exports.includes = contains;
exports.intersection = intersection;
exports.invert = flipKeyValues;
exports.is = is;
exports.isArrayish = isArrayish;
exports.isBlankString = isBlankString;
exports.isEmpty = isEmpty;
exports.isEqual = isEqual;
exports.isInteger = isInteger;
exports.isMap = isMap;
exports.isNegativeInteger = isNegativeInteger;
exports.isNegativeNumber = isNegativeNumber;
exports.isNil = isNil;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isObjectish = isObjectish;
exports.isPositiveInteger = isPositiveInteger;
exports.isPositiveNumber = isPositiveNumber;
exports.isPrime = isPrime;
exports.isPrimitive = isPrimitive;
exports.isPromise = isPromise;
exports.isSameType = isSameType;
exports.isSet = isSet;
exports.isStrictEqual = isStrictEqual;
exports.isUndefined = isUndefined;
exports.isZero = isZero;
exports.last = last;
exports.length = size;
exports.map = map;
exports.mapObject = mapObject;
exports.mapObjectRecursive = mapObjectRecursive;
exports.mapSpec = mapSpec;
exports.mapString = mapString;
exports.mapValues = mapObject;
exports.memoize = memoize;
exports.merge = merge;
exports.omit = omit;
exports.omitNull = omitNull;
exports.omitUndefined = omitUndefined;
exports.pick = pick;
exports.pipe = pipe;
exports.prepend = prepend;
exports.promiseAll = promiseAll;
exports.promiseChain = promiseChain;
exports.promiseCompose = promiseCompose;
exports.propAt = propAt;
exports.propEq = propEquals;
exports.propEquals = propEquals;
exports.propIs = propIs;
exports.propOr = propOr;
exports.propSet = propSet;
exports.reduce = reduce;
exports.renameKeys = renameKeys;
exports.shim = shim;
exports.size = size;
exports.some = any;
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
exports.toLowerCase = toLowerCase;
exports.toNumber = toNumber;
exports.toPairs = entries;
exports.toSnakeCase = toSnakeCase;
exports.toTitleCase = toTitleCase;
exports.toUpperCase = toUpperCase;
exports.uniq = uniq;
exports.uniqBy = uniqBy;
exports.unique = uniq;
exports.uniqueBy = uniqBy;
exports.unthunk = unthunk;
exports.validate = validate;
exports.values = values;

Object.defineProperty(exports, '__esModule', { value: true });

})));
