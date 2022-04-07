"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _forIn.default)(function (key, val, ob) {
    if (fn(val, key, ob)) {
      newObj[key] = val;
    }
  }, obj);
  return newObj;
}

var _default = filterObject;
exports.default = _default;