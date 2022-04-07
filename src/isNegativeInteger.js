import isInteger from "./isInteger"

/**
 * Checks if a given numeric value is a negative integer.
 *
 * @function
 * @name isNegativeInteger
 * @param {number} val A value to verify is a negative integer
 * @returns {boolean} Whether or not the given value is a negative integer
 */
function isNegativeInteger(val) {
  return isInteger(val) && +val < 0
}

export default isNegativeInteger
