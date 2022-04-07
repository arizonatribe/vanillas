import isNumber from "./isNumber"

/**
 * Checks if a given numeric value is positive.
 *
 * @function
 * @name isPositiveNumber
 * @param {number} val A value to verify is a positive number
 * @returns {boolean} Whether or not the given value is a positive number
 */
function isPositiveNumber(val) {
  return isNumber(val) && +val > 0
}

export default isPositiveNumber
