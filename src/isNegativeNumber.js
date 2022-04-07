import isNumber from "./isNumber"

/**
 * Checks if a given numeric value is negative.
 *
 * @function
 * @name isNegativeNumber
 * @param {number} val A value to verify is a negative number
 * @returns {boolean} Whether or not the given value is a negative number
 */
function isNegativeNumber(val) {
  return isNumber(val) && +val < 0
}

export default isNegativeNumber
