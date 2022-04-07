"use strict";

exports.__esModule = true;
exports.default = void 0;

var _forIn = _interopRequireDefault(require("./forIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Assigns the values from one or more Objects onto another Object.
 * This mutates the original Object.
 *
 * @function
 * @name assign
 * @param {object} obj An Object to mutate with the values from one (or more) additionally supplied Objects
 * @param {object} ...resOfObjects One or more Objects to extract from and assign onto the first Object
 * @returns {object} The first object mutated with the values from any other object passed in
 */
function assign(obj) {
  var numOfObjs = arguments.length <= 1 ? 0 : arguments.length - 1;

  for (var i = 0; i < numOfObjs; i++) {
    var currentObj = (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) || {};
    (0, _forIn.default)(function (key, val) {
      obj[key] = val;
    }, currentObj);
  }

  return obj;
}

var _default = assign;
exports.default = _default;
module.exports = exports.default;