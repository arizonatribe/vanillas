/**
 * Transforms a string value into one which is camel cased.
 * Hyphens and underscores are removed and interpred as the boundaries for new words.
 * The first letter of each new word - not preceded by whitespace - is capitalized.
 *
 * @function
 * @name toCamelCase
 * @param {string} str A string which may contain underscores and hyphens and/or may be title-cased.
 * @returns {string} A new string that is without hyphens and underscores and the first letter of every new word boundary is capitalized, unless preceded by whitespace
 */
function toCamelCase(str) {
  return (
    str[0].toLowerCase() +
    str
      .split(/[\s\._-]/)
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join("")
      .slice(1)
  )
}

export default toCamelCase
