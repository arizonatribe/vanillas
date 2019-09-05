/**
 * Checks a value to see if it is an integer.
 *
 * @function
 * @sig * -> Boolean
 * @param {*} val A value (of any type)
 * @returns {Boolean} Whether or not the value is an integer
 */
function isInteger(val) {
  // eslint-disable-next-line no-restricted-globals
  return typeof val === 'number' && isFinite(val) && Math.floor(val) === val
}

export default isInteger
