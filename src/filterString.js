/**
 * Applies a filtering function you provide over every character in a given string.
 *
 * @function
 * @name filterString
 * @param {function} fn A filtering function that is invoked on every char in the provided String value
 * @param {string} str A string value to filter over
 * @returns {string} A new String value that is the result of the filtering operation over the original string
 */
function filterString(fn, str) {
  const len = str.length
  let newStr = ""
  for (let i = 0; i < len; i++) {
    newStr += fn(str[i], i, str) ? str[i] : ""
  }
  return newStr
}

export default filterString
