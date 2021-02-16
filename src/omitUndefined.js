/**
 * Removes all `undefined` values from a given object
 *
 * @function
 * @name omitUndefined
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but without any `undefined` values
 */
function omitUndefined(obj) {
  const newObj = {}
  const keys = Object.keys(obj)
  const numOfKeys = keys.length
  for (let i = 0; i < numOfKeys; i++) {
    if (obj[keys[i]] !== undefined) {
      newObj[keys[i]] = obj[keys[i]]
    }
  }
  return newObj
}

export default omitUndefined
