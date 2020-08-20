/**
 * Extracts an Array of key/value pairs from an Object.
 *
 * @function
 * @param {Object<string, any>} obj The input object from which to extract prop keys and values
 * @returns {Array<String>} An Array of key/value pairs corresponding to those on the input object
 */
function entries(obj) {
  const keys = Object.keys(obj)
  const len = keys.length
  for (let i = 0; i < len; i++) {
    keys[i] = [keys[i], obj[keys[i]]]
  }
  return keys
}

export default entries
