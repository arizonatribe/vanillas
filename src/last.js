/**
 * Retrieves the last value from an Array
 *
 * @function
 * @param {Array<*>} arr An array of any kind of values
 * @returns {*} The last value from a given array
 */
function last(arr) {
  const arrlen = arr.length || 0
  return (arr || [])[arrlen - 1]
}

export default last
