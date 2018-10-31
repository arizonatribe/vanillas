import forIn from './forIn'

/**
 * A simple polyfill for Object.values()
 *
 * @func
 * @sig {k: v} -> [v, v, ..]
 * @param {Object} obj An Object whose values need to be retrieved
 * @returns {Array[]} A list of all the values in the provided Object, ordered by keys
 */
function values(obj) {
  const arr = []
  forIn((key, ob) => {
    arr.push(ob[key])
  }, obj)
  return arr
}

export default values
