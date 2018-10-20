/**
 * Filters an array of values down to only those which are unique
 *
 * @func
 * @sig [a, b, b, b, ..] -> [a, b, ..]
 * @param {Array} list An array of values which may or may not contain duplicates
 * @returns {Array} A new list containing only the unique values from the
 * original array
 */
function uniq(list) {
  return Array.from(
    new Set(list.map(JSON.stringify))
  ).map(JSON.parse)
}

export default uniq
