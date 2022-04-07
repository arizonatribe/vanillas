import isInteger from "./isInteger"

/**
 * Checks if a given numeric value is a positive integer.
 *
 * @function
 * @name isPositiveInteger
 * @param {number} val A value to verify is a positive integer
 * @returns {boolean} Whether or not the given value is a positive integer
 */
function isPositiveInteger(val) {
  return isInteger(val) && +val > 0
}

export default isPositiveInteger
