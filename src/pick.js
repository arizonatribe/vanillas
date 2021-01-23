/**
 * Removes everything _except_ the specified keys from an object (after cloning the Object).
 *
 * @function
 * @param {Array<String>} keys An array of keys to search for in the Object and include from the output
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but with _only_ the specified keys
 */
function pick(keys, obj) {
  const newObj = {}
  const numOfKeys = keys.length
  for (let i = 0; i < numOfKeys; i++) {
    if (keys[i] in obj) {
      newObj[keys[i]] = obj[keys[i]]
    }
  }
  return newObj
}

export default pick
