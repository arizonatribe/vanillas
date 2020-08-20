import isNil from "./isNil"
import isUndefined from "./isUndefined"

function isAnythingButAnObject(name) {
  switch (name) {
  case "Function":
  case "RegExp":
  case "Date":
  case "WeakMap":
  case "Map":
  case "WeakSet":
  case "Set":
  case "Float64Array":
  case "Float32Array":
  case "Int32Array":
  case "Uint16Array":
  case "Int16Array":
  case "Uint8ClampedArray":
  case "Uint8Array":
  case "Int8Array":
  case "Array":
  case "Symbol":
  case "Number":
  case "String":
  case "Boolean":
  case "UriError":
  case "TypeError":
  case "SyntaxError":
  case "ReferenceError":
  case "RangeError":
  case "InternalError":
  case "EvalError":
  case "Error":
    return true
  default:
    return false
  }
}

/**
 * A high-speed, mostly adequate check of a value which may be an Object.
 * This excludes values that are _technically_ an Object but in practice are not what you _really_ mean when you speak of Objects.
 *
 * @function
 * @param {*} val A value (of any type)
 * @returns {Boolean} Whether or not the value is an Object
 */
function isObject(val) {
  return !isNil(val) &&
    isUndefined(val.length) && (
    (!isUndefined(val.constructor) && !isAnythingButAnObject(val.constructor.name)) ||
      (isUndefined(val.constructor) && isUndefined(val.prototype))
  )
}

export default isObject
