"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _forIn.default)(function (key, val) {
    newObj[String(val)] = key;
  }, obj);
  return newObj;
}

var _default = flipKeyValues;
exports.default = _default;