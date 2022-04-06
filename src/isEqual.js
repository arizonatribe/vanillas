import isObject from "./isObject"

/**
 * Checks if two provided values are deeply equal.
 * If Objects or Arrays (or Array-like values) are provided, they are inspected recursively.
 * Primitive values are checked to see if they are stricly equal (ie triple equals; no type coercion).
 *
 * @function
 * @name isEqual
 * @param {*} firstVal A value which may be null, undefined, a JavaScript primitive value, an array of values, an array-like value, or an object
 * @param {*} secondVal A value which may be null, undefined, a JavaScript
 * @returns {boolean} Whether or not the two values are deeply equal
 */
function isEqual(firstVal, secondVal) {
  if (firstVal === secondVal) return true
  if (typeof firstVal !== typeof secondVal) return false

  if (
    typeof firstVal.length === "number"
    && typeof secondVal.length === "number"
    && firstVal.length !== secondVal.length
  ) return false

  if (typeof firstVal.every === "function" && typeof secondVal.every === "function") {
    return firstVal.every((v, i) => isEqual(v, secondVal[i]))
  }

  if (isObject(firstVal) && isObject(secondVal)) {
    const firstKeys = Object.keys(firstVal)
    const secondKeys = Object.keys(secondVal)
    return (firstKeys.length === secondKeys.length)
      && firstKeys.every(key => isEqual(firstVal[key], secondVal[key]))
  }

  return false
}

export default isEqual
