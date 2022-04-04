import isObject from "./isObject"
import mapString from "./mapString"
import mapObject from "./mapObject"

/**
 * Applies a mapping function you provide over a value you provide, according to its type.
 * String values will have the mapping function applied over every character in the String.
 * Objects will have the mapping function applied to every value in the Object.
 * Arrays (or Array-like values) will have the mapping function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 * Also, this mapping operation does _not_ mutate the original value.
 *
 * @function
 * @name map
 * @param {function} fn A mapping function that is invoked on the provided value
 * @param {object | Array<*> | string} val An Object/Array/String whose values/chars will be mapped over
 * @returns {object | Array<*> | string} A new value that is the result of the mapping operation over all the chars or values in the original String/Object/Array
 */
function map(fn, val) {
  if (Array.isArray(val)) {
    const len = val.length
    const newArr = Array(len)
    for (let i = 0; i < len; i++) {
      newArr[i] = fn(val[i], i)
    }
    return newArr
  }
  if (typeof val === "string") return mapString(fn, val)
  if (typeof val.map === "function") return val.map(fn)
  if (isObject(val)) return mapObject(fn, val)
  return val
}

export default map
