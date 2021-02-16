/**
 * Checks a value to see if it is an integer.
 *
 * @function
 * @name isInteger
 * @param {*} val A value (of any type)
 * @returns {Boolean} Whether or not the value is an integer
 */
function isInteger(val) {
  return typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val
}

export default isInteger
