import isArrayish from "./isArrayish"
import isObject from "./isObject"
import filterString from "./filterString"
import filterObject from "./filterObject"

/**
 * Applies a filtering function you provide over a value you provide, according to its type.
 * String values will have the filtering function applied over every character in the String.
 * Objects will have the filtering function applied to every value in the Object.
 * Arrays (or Array-like values) will have the filtering function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 *
 * @function
 * @name filter
 * @param {Function} fn A filtering function that is invoked on the provided value
 * @param {object|Array<*>|String} val An Object/Array/String whose values/chars will be filtered
 * @returns {object|Array<*>|String} A new value that is the result of the filtering operation over all the chars or values in the original String/Object/Array
 */
function filter(fn, val) {
  if (Array.isArray(val)) return val.filter(fn)
  if (isObject(val)) return filterObject(fn, val)
  if (typeof val === "string") return filterString(fn, val)
  if (isArrayish(val)) return val.filter(fn)
  return val
}

export default filter
