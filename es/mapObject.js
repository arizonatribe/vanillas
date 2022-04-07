"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _forIn.default)(function (key, val, ob) {
    newObj[key] = fn(val, key, ob);
  }, obj);
  return newObj;
}

var _default = mapObject;
exports.default = _default;