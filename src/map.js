import isArrayish from './isArrayish'
import isObject from './isObject'
import mapString from './mapString'
import mapObject from './mapObject'

/**
 * Applies a mapping function you provide over a value you provide, according to its type.
 * String values will have the mapping function applied over every character in the String.
 * Objects will have the mapping function applied to every value in the Object.
 * Arrays (or Array-like values) will have the mapping function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 * Also, this mapping operation does _not_ mutate the original value.
 *
 * @function
 * @sig (* -> *) -> * -> *
 * @param {Function} fn A mapping function that is invoked on the provided value
 * @param {Object|Array|String} val An Object/Array/String whose values/chars will be mapped over
 * @returns {Object|Array|String} A new value that is the result of
 * the mapping operation over all the chars or values in the original String/Object/Array
 */
function map(fn, val) {
  if (Array.isArray(val)) return val.map(fn)
  if (isObject(val)) return mapObject(fn, val)
  if (typeof val === 'string') return mapString(fn, val)
  if (isArrayish(val)) return val.map(fn)
  return val
}

export default map
