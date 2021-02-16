/**
 * Applies a mapping function you provide over every character in a given string.
 *
 * @function
 * @name mapString
 * @param {Function} fn A mapping function that is invoked on every char in the provided String value
 * @param {String} str A string value to map over
 * @returns {String} A new String value that is the result of the mapping operation over the original string
 */
function mapString(fn, str) {
  const len = str.length
  let newStr = ""
  for (let i = 0; i < len; i++) {
    newStr += fn(str[i], i, str)
  }
  return newStr
}

export default mapString
