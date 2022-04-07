"use strict";

exports.__esModule = true;
exports.default = void 0;

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

var _default = promiseChain;
exports.default = _default;
module.exports = exports.default;