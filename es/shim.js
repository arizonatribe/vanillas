"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isNil = _interopRequireDefault(require("./isNil"));

var _isObject = _interopRequireDefault(require("./isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getter = {
  get: function get(target, key) {
    if ((0, _isObject.default)(target[key])) {
      return new Proxy(target[key], getter);
    }

    if ((0, _isNil.default)(target[key])) {
      var _Proxy;

      return new Proxy((_Proxy = {}, _Proxy[Symbol.toPrimitive] = String, _Proxy), getter);
    }

    return target[key];
  }
};
/**
 * Recursively shims an Object.
 * Every time the getter is invoked (which happens whenever prop paths are referenced in the consuming code), the path is shimmed with another Proxy.
 * It is not a polyfill but rather a way to keep deep prop paths that may not exist on the source object from throwing an error.
 *
 * @function
 * @name shim
 * @param {object} obj An object that will be the Proxy's source
 * @returns {Proxy} An Object that will return props on the source Object if they exist but safely handle missing prop paths without throwing errors.
 */

function shim(obj) {
  return new Proxy(obj, getter);
}

var _default = shim;
exports.default = _default;