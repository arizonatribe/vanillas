import isObject from './isObject'
import isArrayish from './isArrayish'
import isStrictEqual from './isStrictEqual'
import isSameType from './isSameType'

/**
 * Checks if two provided values are deeply equal.
 * If Objects or Arrays (or Array-like values) are provided,
 * they are inspected recursively.
 * Primitive values are checked to see if they are stricly equal
 * (ie triple equals; no type coercion).
 *
 * @func
 * @sig * -> * -> Boolean
 * @param {*} firstVal A value which may be null, undefined, a JavaScript
 * primitive value, an array of values, an array-like value, or an object
 * @param {*} secondVal A value which may be null, undefined, a JavaScript
 * @returns {Boolean} Whether or not the two values are deeply equal
 */
function isEqual(firstVal, secondVal) {
  if (isStrictEqual(firstVal, secondVal)) return true
  if (!isSameType(firstVal, secondVal)) return false

  if (Array.isArray(firstVal) && Array.isArray(secondVal)) {
    const valLen = firstVal.length
    if (valLen !== secondVal.length) return false
    for (let i = 0; i < valLen; i++) {
      if (!isEqual(firstVal[i], secondVal[i])) return false
    }
    return true
  }

  if (isObject(firstVal)) {
    const firstKeys = Object.keys(firstVal)
    const secondKeys = Object.keys(secondVal)
    return (firstKeys.length === secondKeys.length) &&
      firstKeys.every(key => isEqual(firstVal[key], secondVal[key]))
  }

  if (isArrayish(firstVal)) {
    return firstVal.every((v, i) => isEqual(v, secondVal[i]))
  }

  return false
}

export default isEqual
