"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _forIn.default)(function (key, val) {
    arr.push(val);
  }, obj);
  return arr;
}

var _default = values;
exports.default = _default;