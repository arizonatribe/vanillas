"use strict";

exports.__esModule = true;
exports.default = void 0;

var _has = _interopRequireDefault(require("./has"));

var _forIn = _interopRequireDefault(require("./forIn"));

var _isObject = _interopRequireDefault(require("./isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies one or more mapping functions to the value in a given Object.
 * But rather than applying the same mapping function to every value in an Object, instead you use a "spec" object to link the appropriate mapping function to the key/val in the input Object.
 *
 * This is similar to Ramda's `evolve()` however you can also set values in your spec that are _not_ functions (which will just override whatever matching key there might be on the input object).
 * Addtionally, it supplies the key and the object as the 2nd and third params to your spec's transformation function, so that you can create props based on the entire input Object (with Ramda you'll need to also use `applySpec()` and in a separate operation to derived these kinds of values).
 *
 * As an example, If you want a mapping function to be applied to a prop called "name", then you would first pass in a spec object with a prop on it called "name" and the value would be the mapping function.
 * Then the actual input object (with the desciption field) will have the matching mapping function from your spec applied to it directly.
 *
 * @function
 * @name mapSpec
 * @param {object} spec An Object whose keys should correspond to keys in the input Object and whose values are mapping functions that will receive the matching input Object's prop as input
 * @param {object} obj The actual input to map over and transform
 * @returns {object} A new Object with all the mapping functions from the spec Object applied to the corresponding values in the input Object (if they exist)
 * @example
 *   mapSpec({
 *     age: Number,
 *     isAlive: Boolean,
 *     name: str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
 *   }, {
 *     age: '20',
 *     isAlive: 1,
 *     name: 'john'
 *   })
 */
function mapSpec(spec, obj) {
  var newObj = {};
  (0, _forIn.default)(function (key, val, ob) {
    if (typeof spec[key] === "function") {
      newObj[key] = spec[key](val, key, ob);
    } else if ((0, _isObject.default)(spec[key])) {
      newObj[key] = mapSpec(spec[key], val);
    } else {
      newObj[key] = val;
    }
  }, obj);
  (0, _forIn.default)(function (key, val) {
    if (typeof val !== "function") {
      newObj[key] = val;
    } else if (!(0, _has.default)(key, newObj)) {
      newObj[key] = val(undefined, key, newObj);
    }
  }, spec);
  return newObj;
}

var _default = mapSpec;
exports.default = _default;
module.exports = exports.default;