import isZero from "./isZero"
import isNumber from "./isNumber"

/**
 * Coerces a given string value to a number (if valid).
 *
 * @function
 * @name toNumber
 * @param {string} val A string value to coerce to a number
 * @returns {number|undefined} A numeric representation of the original value, or `undefined` if it cannot be coerced to a number.
 */
function toNumber(val) {
  if (isZero(val)) {
    return 0
  }

  const num = +val
  return isNumber(num) && num !== 0
    ? num
    : undefined
}

export default toNumber
