"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

var _has = _interopRequireDefault(require("./has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renames a set of keys in a given object (removing the old ones)
 *
 * @function
 * @name renameKeys
 * @param {object} keyMap An object whose keys are the _current_ key names and whose values are the _new_ key names
 * @param {object} obj An Object whose keys will be renamed
 * @returns {object} A new Object that has all the specified keys renamed to their new names
 */
function renameKeys(keyMap, obj) {
  var newObj = {};
  (0, _forIn.default)(function (key, val) {
    if ((0, _has.default)(key, keyMap)) {
      newObj[keyMap[key]] = val;
    } else {
      newObj[key] = val;
    }
  }, obj);
  return newObj;
}

var _default = renameKeys;
exports.default = _default;
module.exports = exports.default;