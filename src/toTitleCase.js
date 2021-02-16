/**
 * Transforms a string value into one which is title-cased. The first letter of any word is capitalized.
 *
 * @function
 * @name toTitleCase
 * @param {String} str A string which may contain uppercase characters
 * @returns {String} A new string that is an lowercase representation of the original string
 */
function toTitleCase(str) {
  return str.split(/\s/)
    .map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
    .join(" ")
}

export default toTitleCase
