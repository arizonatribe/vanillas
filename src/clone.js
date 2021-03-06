/* eslint-disable consistent-return */
import isNil from "./isNil"
import isObject from "./isObject"
import forIn from "./forIn"

/**
 * Recursively copies the content of an Object into a new Object
 *
 * @function
 * @name clone
 * @param {object|Array<*>} obj An Object (or Array) from which to create a deep copy
 * @returns {object|Array<*>} The new (cloned) Object (or Array)
 */
function clone(obj) {
  if (!isNil(obj)) {
    if (Array.isArray(obj)) {
      return obj.map(v => (isObject(v) ? clone(v) : v))
    }
    if (isObject(obj)) {
      const newObj = {}
      forIn((key, val) => {
        if (isObject(val) || Array.isArray(val)) {
          newObj[key] = clone(val)
        } else {
          newObj[key] = val
        }
      }, obj)
      return newObj
    }
  }
}

export default clone
