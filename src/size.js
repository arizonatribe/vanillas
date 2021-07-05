import isUndefined from "./isUndefined"

/**
 * Checks the length (or size) of many different types of values:
 *   - Array
 *   - Set
 *   - Map
 *   - Object (num of keys)
 *   - String (num of chars)
 *   - Function (num of params)
 *
 * @function
 * @name size
 * @param {object | string | Array<*> | function} val A value of type Object, String, Array or Function
 * @returns {number} The length of the String or Array, OR the number of keys in the Object
 */
function size(val) {
  if (!isUndefined(val.length)) {
    return val.length
  }
  if (!isUndefined(val.size)) {
    return val.size
  }
  if (typeof val === "object") {
    return Object.keys(val).length
  }
  return undefined
}

export default size
