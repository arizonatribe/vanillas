import forIn from "./forIn"

/**
 * Applies a filtering function you provide over every value in a given Object.
 *
 * @function
 * @param {Function} fn A filtering function that is invoked on every value in the provided Object
 * @param {Object<string, any>} obj An Object whose values will be filtered
 * @returns {Object<string, any>} A new Object that is the result of the filtering operation over all the values in the original Object
 */
function filterObject(fn, obj) {
  const newObj = {}
  forIn((key, val, ob) => {
    if (fn(val, key, ob)) {
      newObj[key] = val
    }
  }, obj)
  return newObj
}

export default filterObject
