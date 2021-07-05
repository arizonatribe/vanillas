/**
 * Transforms a string value into one which is hyphenated.
 * Whitespace and underscores are replaced with hyphens, and uppercase letters are interpreted as boundaries for new hyphenated words.
 *
 * @function
 * @name toKebabCase
 * @param {string} str A string which may contain uppercase characters
 * @returns {string} A new string that is a hyphenated representation of the original string
 */
function toKebabCase(str) {
  return str
    .replace(/(\S)(\s+)(\S)/g, "$1-$3")
    .replace(/([a-z0-9])(?=[A-Z])/g, "$1-")
    .replace(/_/g, "-")
    .replace(/--/g, "-")
    .toLowerCase()
}

export default toKebabCase
