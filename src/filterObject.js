import forIn from "./forIn"

/**
 * Applies a filtering function you provide over every value in a given Object.
 *
 * @function
 * @name filterObject
 * @param {function} fn A filtering function that is invoked on every value in the provided Object
 * @param {object} obj An Object whose values will be filtered
 * @returns {object} A new Object that is the result of the filtering operation over all the values in the original Object
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
