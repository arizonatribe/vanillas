"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _forIn.default)(function (key, val) {
    newObj[key] = val;
  }, vals[0]);

  for (var i = 1; i < numOfVals; i++) {
    (0, _forIn.default)(function (key, val) {
      newObj[key] = merge(newObj[key], val);
    }, vals[i]);
  }

  return newObj;
}

var _default = merge;
exports.default = _default;