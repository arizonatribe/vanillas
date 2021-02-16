/**
 * Removes all `null` or `undefined` values from a given object
 *
 * @function
 * @name omitNull
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but without any `null` or `undefined` values
 */
function omitNull(obj) {
  const newObj = {}
  const keys = Object.keys(obj)
  const numOfKeys = keys.length
  for (let i = 0; i < numOfKeys; i++) {
    if (obj[keys[i]] != null) {
      newObj[keys[i]] = obj[keys[i]]
    }
  }
  return newObj
}

export default omitNull
