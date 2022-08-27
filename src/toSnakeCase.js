/**
 * Transforms a string value into one which is separated by underscores.
 * Whitespace and hyphens are replaced with underscores, and uppercase letters are interpreted as boundaries for new underscore-separated words.
 *
 * @function
 * @name toSnakeCase
 * @param {string} str A string which may contain uppercase characters or hyphens
 * @returns {string} A new string that is an lowercase representation of the original string
 */
function toSnakeCase(str) {
  return str
    .replace(/([a-z0-9])(?=[A-Z])/g, "$1_")
    .replace(/[\.\s_-]+/g, "_")
    .toLowerCase()
}

export default toSnakeCase
