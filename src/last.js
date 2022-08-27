/**
 * Retrieves the last value from an Array
 *
 * @function
 * @name last
 * @param {Array<*>} arr An array of any kind of values
 * @returns {*} The last value from a given array
 */
function last(arr) {
  return arr.length > 0 ? arr[arr.length - 1] : undefined
}

export default last
