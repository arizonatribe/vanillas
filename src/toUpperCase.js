/**
 * Simple wrapper around String.prototype.toUpperCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 *
 * @function
 * @name toUpperCase
 * @param {string} str A string which may contain lowercase characters
 * @returns {string} A new string that is an uppercase representation of the original string
 */
function toUpperCase(str) {
  return str.toUpperCase()
}

export default toUpperCase
