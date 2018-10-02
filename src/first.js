/**
 * Extracts the first value of an array of values.
 *
 * @func
 * @param {Array} arr An array of values from which to extract the first value
 * @returns {*|undefined} The value at the first index of the supplied array
 * (which may be undefined)
 */
function first(val) {
  return (val || [])[0]
}

export default first
