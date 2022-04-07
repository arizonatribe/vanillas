"use strict";

exports.__esModule = true;
exports.default = void 0;

var _has = _interopRequireDefault(require("./has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    if ((0, _has.default)(key, obj)) {
      fn(key, obj[key], obj);
    }
  }
}

var _default = forIn;
exports.default = _default;
module.exports = exports.default;