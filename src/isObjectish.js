import isNil from "./isNil"
import isUndefined from "./isUndefined"

function withoutTheCurlies(name) {
  switch (name) {
  case "Function":
  case "RegExp":
  case "Date":
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
 * Tests whether or not a given value is object-like
 *
 * @function
 * @param {*} val A value that may or may not be object-like
 * @returns {Boolean} Whether or not the value is object-like
 */
function isObjectish(val) {
  return !isNil(val) &&
    isUndefined(val.length) && (
    (!isUndefined(val.constructor) && !withoutTheCurlies(val.constructor.name)) ||
      (isUndefined(val.constructor) && isUndefined(val.prototype))
  )
}

export default isObjectish
