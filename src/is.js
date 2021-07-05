import getConstructorName from "./_internal/getConstructorName"
import getType from "./getType"

/**
 * Checks to see if a value is a certain type.
 * You may specify that type as a case-insensitive string
 * (ie, 'string', 'boolean', 'object', 'function', 'array', 'regexp', 'date', 'set, 'map'), OR a JavaScript type constructor function (ie, String, Function, Boolean, Array, RegExp, Date, Set, Map).
 *
 * @function
 * @name is
 * @param {function | string} ofType A JavaScript type constructor function (like `Function`, `String`, `RegExp`, `Boolean`, `Array`, `Object`, etc.) or a string value matching the name of one
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value matches the specified type
 * @example
 * is('boolean', true)
 * is('array', [1, 2, 3])
 * is(RegExp, /[a-z0-9]/)
 * is(Function, () => null)
 *
 */
function is(ofType, val) {
  return ofType === val ||
    (typeof ofType === "string" && getType(val).toLowerCase() === ofType.toLowerCase()) ||
    (ofType && !ofType.name && getType(ofType) === getType(val)) ||
    (ofType && ofType.name && getConstructorName(ofType) === "Function" && getType(val) === ofType.name)
}

export default is
