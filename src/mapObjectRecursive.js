import forIn from './forIn'
import isObject from './isObject'

/**
 * Applies a mapping function you provide over every value in a given Object (recursively).
 *
 * @function
 * @sig (* -> *) -> {k: v} -> {k: v}
 * @param {Function} fn A mapping function that is invoked on every value in the provided Object
 * @param {Object} obj An Object whose values will be mapped over (recursively)
 * @returns {Object} A new Object that is the result of the mapping operation over all the values in the original Object
 */
function mapObjectRecursive(fn, obj) {
  const newObj = {}
  forIn((key, val, ob) => {
    /* Looks redundant, but is written this way for speed */
    if (typeof val === 'object' && (val.constructor.name === 'Object' || isObject(val))) {
      newObj[key] = mapObjectRecursive(fn, val)
    } else {
      newObj[key] = fn(val, key, ob)
    }
  }, obj)
  return newObj
}

export default mapObjectRecursive
