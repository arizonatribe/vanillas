import forIn from './forIn'

/**
 * Applies a filtering function you provide over every value in a given Object.
 *
 * @func
 * @sig (* -> *) -> {k: v} -> {k: v}
 * @param {Function} fn A filtering function that is invoked on every value in the provided Object
 * @param {Object} obj An Object whose values will be filtered
 * @returns {Object} A new Object that is the result of
 * the filtering operation over all the values in the original Object
 */
function filterObject(fn, obj) {
  const newObj = {}
  forIn((key, ob) => {
    if (fn(ob[key], key, ob)) {
      newObj[key] = ob[key]
    }
  }, obj)
  return newObj
}

export default filterObject
