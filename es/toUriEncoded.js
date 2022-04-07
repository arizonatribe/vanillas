"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

var _isPrimitive = _interopRequireDefault(require("./isPrimitive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transforms an object's key/value pairs into an encoded URI string, delimited by ampersands &
 *
 * @function
 * @name toUriEncoded
 * @param {object} obj An object whose key/value pairs need to be serialized into a single string.
 * @returns {string} A new string that represents the key/value pairs on the originating object
 */
function toUriEncoded(obj) {
  if (obj === void 0) {
    obj = {};
  }

  var strUri = "";
  (0, _forIn.default)(function (key, val) {
    if ((0, _isPrimitive.default)(val)) {
      strUri += "&" + key + "=" + val;
    } else if (Array.isArray(val)) {
      strUri += "&" + key + "=" + val.filter(_isPrimitive.default).join(",");
    }
  }, obj);
  return encodeURI(strUri.slice(1));
}

var _default = toUriEncoded;
exports.default = _default;