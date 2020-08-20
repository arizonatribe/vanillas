/**
 * Transforms a string value into one which is separated by underscores.
 * Whitespace and hyphens are replaced with underscores, and uppercase letters are interpreted as boundaries for new underscore-separated words.
 *
 * @function
 * @param {String} str A string which may contain uppercase characters or hyphens
 * @returns {String} A new string that is an lowercase representation of the original string
 */
function toSnakeCase(str) {
  return str
    .replace(/(\S)(\s+)(\S)/g, "$1_$3")
    .replace(/([a-z0-9])(?=[A-Z])/g, "$1_")
    .replace(/-/g, "_")
    .replace(/__/g, "_")
    .toLowerCase()
}

export default toSnakeCase
