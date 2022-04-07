"use strict";

exports.__esModule = true;
exports.default = void 0;

var _has = _interopRequireDefault(require("./has"));

var _isObject = _interopRequireDefault(require("./isObject"));

var _clone = _interopRequireDefault(require("./clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Looks for a specified key on an Object you provide and sets it to the provided value.
 * If the path does not exist, it will be created (you can check for the path via `propIs` or `propAt` or `propEquals` first if you don't wish to create the path every time).
 * The is performed safely and will not throw an error if somethign on the prop path chain you specify doesn't exist.
 *
 * @function
 * @name propSet
 * @param {string | Array<string>} prop A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param {*} val A value to be placed at the provided property path
 * @param {object} obj An object which onto which the value will be placed
 * @returns {object} The original object, but modified to have the provided value placed at the specified path it does not exist
 */
function propSet(prop, val, obj) {
  var paths = typeof prop === "string" ? prop.split(".") : prop;
  var len = paths.length;
  if (len === 0) return obj;
  var newObj = (0, _clone.default)(obj);

  if (len > 1) {
    newObj[paths[0]] = propSet(paths.slice(1), val, !(0, _has.default)(paths[0], newObj) || !(0, _isObject.default)(newObj[paths[0]]) ? {} : newObj[paths[0]]);
  } else {
    newObj[paths[0]] = val;
  }

  return newObj;
}

var _default = propSet;
exports.default = _default;