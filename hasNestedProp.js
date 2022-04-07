"use strict";

exports.__esModule = true;
exports.default = void 0;

var _has = _interopRequireDefault(require("./has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a given Object contains a (potentially) nested property of a specified path
 *
 * @function
 * @name hasNestedProp
 * @param {Array<string> | string} prop A prop name, a dot-separated prop path, or an array of prop path "pieces" to look for in the object
 * @param {object} obj An Object to inspect for a given prop at the specified path
 * @returns {boolean} Whether the object contains the specified prop path
 */
function hasNestedProp(prop, obj) {
  var paths = typeof prop === "string" ? prop.split(".") : prop;
  var len = paths.length;
  if (len === 0) return false;
  var idx = 0;
  var val = obj[paths[idx]];
  var hasProp = (0, _has.default)(paths[idx], obj);

  while (++idx < len && hasProp === true) {
    hasProp = (0, _has.default)(paths[idx], val);

    if (hasProp) {
      val = val[paths[idx]];
    }
  }

  return hasProp;
}

var _default = hasNestedProp;
exports.default = _default;
module.exports = exports.default;