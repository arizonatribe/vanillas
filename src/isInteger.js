import isNumber from "./isNumber"

/**
 * Checks a value to see if it is an integer.
 *
 * @function
 * @name isInteger
 * @param {*} val A value (of any type)
 * @returns {boolean} Whether or not the value is an integer
 */
function isInteger(val) {
  return isNumber(val) && Number.isInteger(val)
}

export default isInteger
