"use strict";

exports.__esModule = true;
exports.default = void 0;

var _areAllFunctions = _interopRequireDefault(require("./_internal/areAllFunctions"));

var _identity = _interopRequireDefault(require("./identity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  if (fnlen === 0 || !(0, _areAllFunctions.default)(fns)) return _identity.default;
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

var _default = compose;
exports.default = _default;