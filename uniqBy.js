"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propAt = _interopRequireDefault(require("./propAt"));

var _includes2 = require("./_internal/_includes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)
 *
 * @function
 * @name uniqBy
 * @param {function | string} pred A predicate function
 * @param {Array<*>} list An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */
function uniqBy(pred, list) {
  var fn;

  if (typeof pred === "string" && pred.split(".").length === 1) {
    fn = function fn(o) {
      return o[pred];
    };
  } else if (Array.isArray(pred) && pred.length === 1) {
    fn = function fn(o) {
      return o[pred[0]];
    };
  } else if (typeof pred === "function") {
    fn = pred;
  } else {
    fn = function fn(o) {
      return (0, _propAt.default)(pred, o);
    };
  }

  var idx = -1;
  var newArr = [];
  var compared = [];
  var len = list.length;

  while (++idx < len) {
    var val = list[idx];
    var valley = fn(val);

    if (!(0, _includes2._includes)(valley, compared)) {
      newArr.push(val);
      compared.push(valley);
    }
  }

  return newArr;
}

var _default = uniqBy;
exports.default = _default;
module.exports = exports.default;