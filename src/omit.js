import forIn from './forIn'
import { _includes } from './_internal/_includes'

/**
 * Removes specified keys from an object (after cloning the Object).
 *
 * @func
 * @sig String[] -> {k: v} -> {k: v}
 * @param {String[]} keys An array of keys to search for in the Object and
 * exclude from the output
 * @param {Object} obj An Object from which to copy and remove keys
 * @returns {Object} A copy of the original Object, but without the specified keys
 */
function omit(keys, obj) {
  const newObj = {}
  forIn((key, ob) => {
    if (!_includes(key, keys)) {
      newObj[key] = ob[key]
    }
  }, obj)
  return newObj
}

export default omit
