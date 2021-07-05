/**
 * Safely retrieves the constructor name for the native JavaScript type
 *
 * @function
 * @private
 * @name getConstructorName
 * @param {*} val A value of any type
 * @returns {string} The constructor name (if there is one) for the value
 */
function getConstructorName(val) {
  try {
    return val.constructor.name
  } catch (err) {
    return ""
  }
}

export default getConstructorName
