"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

var _isObject = _interopRequireDefault(require("./isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _forIn.default)(function (key, val, ob) {
    /* Looks redundant, but is written this way for speed */
    if (typeof val === "object" && val != null && (val.constructor && val.constructor.name === "Object" || (0, _isObject.default)(val))) {
      newObj[key] = mapObjectRecursive(fn, val);
    } else {
      newObj[key] = fn(val, key, ob);
    }
  }, obj);
  return newObj;
}

var _default = mapObjectRecursive;
exports.default = _default;