"use strict";

exports.__esModule = true;
exports.default = void 0;

var _promiseChain = _interopRequireDefault(require("./promiseChain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return (0, _promiseChain.default)(requests.reverse());
}

var _default = promiseCompose;
exports.default = _default;
module.exports = exports.default;