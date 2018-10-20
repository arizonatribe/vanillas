/**
 * A simple polyfill for Object.values()
 *
 * @func
 * @sig {k: v} -> [v, v, ..]
 * @param {Object} obj An Object whose values need to be retrieved
 * @returns {Array[]} A list of all the values in the provided Object, ordered by keys
 */
function values(obj) {
  return Object.keys(obj).map(key => obj[key])
}

export default values
