import forIn from "./forIn"

/**
 * A simple polyfill for Object.values()
 *
 * @function
 * @name values
 * @param {object} obj An Object whose values need to be retrieved
 * @returns {Array<*>} A list of all the values in the provided Object, ordered by keys
 */
function values(obj) {
  const arr = []
  forIn((key, val) => {
    arr.push(val)
  }, obj)
  return arr
}

export default values
