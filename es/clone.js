"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isNil = _interopRequireDefault(require("./isNil"));

var _isObject = _interopRequireDefault(require("./isObject"));

var _forIn = _interopRequireDefault(require("./forIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable consistent-return */

/**
 * Recursively copies the content of an Object into a new Object
 *
 * @function
 * @name clone
 * @param {object|Array<*>} obj An Object (or Array) from which to create a deep copy
 * @returns {object|Array<*>} The new (cloned) Object (or Array)
 */
function clone(obj) {
  if (!(0, _isNil.default)(obj)) {
    if (Array.isArray(obj)) {
      return obj.map(function (v) {
        return (0, _isObject.default)(v) ? clone(v) : v;
      });
    }

    if ((0, _isObject.default)(obj)) {
      var newObj = {};
      (0, _forIn.default)(function (key, val) {
        if ((0, _isObject.default)(val) || Array.isArray(val)) {
          newObj[key] = clone(val);
        } else {
          newObj[key] = val;
        }
      }, obj);
      return newObj;
    }
  }
}

var _default = clone;
exports.default = _default;