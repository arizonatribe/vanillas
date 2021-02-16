/**
 * Simple wrapper around String.prototype.toLowerCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 *
 * @function
 * @name toLowerCase
 * @param {String} str A string which may contain uppercase characters
 * @returns {String} A new string that is an lowercase representation of the original string
 */
function toLowerCase(str) {
  return str.toLowerCase()
}

export default toLowerCase
