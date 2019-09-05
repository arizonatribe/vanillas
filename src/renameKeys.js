import forIn from './forIn'
import has from './has'

/**
 * Renames a set of keys in a given object (removing the old ones)
 *
 * @function
 * @sig {k: v} -> {k: v}
 * @param {Object<string, string>} keyMap An object whose keys are the _current_ key names and whose values are the _new_ key names
 * @param {Object} obj An Object whose keys will be renamed
 * @returns {Object} A new Object that has all the specified keys renamed to their new names
 */
function renameKeys(keyMap, obj) {
  const newObj = {}
  forIn((key, val) => {
    if (has(key, keyMap)) {
      newObj[keyMap[key]] = val
    } else {
      newObj[key] = val
    }
  }, obj)
  return newObj
}

export default renameKeys
