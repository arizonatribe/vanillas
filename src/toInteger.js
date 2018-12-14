/**
 * Converts a given value to an Integer and rounds up or down floating point values appropriately.
 * If the values is a `Boolean`, then `true` will yield `1` and `false will yield `0`.
 * If `NaN` then zero will always be returned.
 *
 * @func
 * @sig String -> Integer
 * @param {String} str A string which may be numeric
 * @returns {Number} Either the successfully converted number or zero (if it was NaN)
 */
function toInteger(str) {
  if (typeof str === 'boolean') {
    return str === true ? 1 : 0
  }

  const num = parseFloat(str)
  // eslint-disable-next-line no-restricted-globals
  return isNaN(num) ? 0 : Math.round(num)
}

export default toInteger
