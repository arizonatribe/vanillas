/**
 * Checks to see if a value is null OR undefined
 *
 * @function
 * @sig * -> Boolean
 * @param {*} val A value (of any type)
 * @returns {Boolean} Whether or not the value is null or undefined
 */
function isNil(val) {
  return val == null
}

export default isNil
