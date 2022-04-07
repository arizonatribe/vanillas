"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Adds the values from one Array onto another Array, returned as a new Array (ie, it does not mutate the first Array).
 * This operation is recursive, so you can supply as many arrays as you wish.
 *
 * @function
 * @name concat
 * @param {Array<*>} firstArr An Array of values (of any type)
 * @param {Array<*>} secondArr An Array of values (of any type)
 * @returns {Array<*>} A new Array with the values from the second array concatenated onto those from the first
 */
function concat(firstArr, secondArr) {
  var firstLen = firstArr.length;
  var len = secondArr.length + firstLen;
  var newArr = new Array(len);

  for (var i = 0; i < firstLen; i++) {
    newArr[i] = firstArr[i];
  }

  for (var _i = firstLen; _i < len; _i++) {
    newArr[_i] = secondArr[_i - firstLen];
  }

  for (var _len = arguments.length, restOfArrs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    restOfArrs[_key - 2] = arguments[_key];
  }

  if (restOfArrs.length) {
    return concat.apply(void 0, [newArr, restOfArrs[0]].concat(restOfArrs.slice(1)));
  }

  return newArr;
}

var _default = concat;
exports.default = _default;