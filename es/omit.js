"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

var _includes2 = require("./_internal/_includes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes specified keys from an object (after cloning the Object).
 *
 * @function
 * @name omit
 * @param {Array<string>} keys An array of keys to search for in the Object and exclude from the output
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but without the specified keys
 */
function omit(keys, obj) {
  var newObj = {};
  (0, _forIn.default)(function (key, val) {
    if (!(0, _includes2._includes)(key, keys)) {
      newObj[key] = val;
    }
  }, obj);
  return newObj;
}

var _default = omit;
exports.default = _default;