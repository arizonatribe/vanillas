/**
 * Performs a fuzzy search on a list of strings or objects.
 * If a list of objects, provided the prop extraction function so the search can find the correct field(s)
 * This is heavily inspired by (most of) the algorithm used by [Matt York's](https://github.com/myork/fuzzy) fuzzy search function,
 * however several features were not carried over and his implementation of that alrgorithm has been significantly changed to achieve a 25% speed improvement.
 * Please see his original work - called [fuzzy](https://www.npmjs.com/package/fuzzy) MIT - if you need some of his additional options.
 *
 * @function
 * @param {Function} [propFn] A function which will extract all the fields which you wish to fuzzy search on. Omit if the list is a list of strings
 * @param {string} needle The search value itself
 * @param {boolean} [caseSensitive=false] Whether or not to perform a case-sensitive search
 * @param {Array<String>|Array<Object<string, string>>} arr An array of string values or objects which have string values to be searched on
 * @returns {Array<String>|Array<Object<string, string>>} The filtered list of search results
 */
function fuzzy(propFn, needle, caseSensitive, arr) {
  if (arr == null || !Array.isArray(arr) || arr.length === 0) return []
  if (typeof needle !== "string" || !needle.trim().length) return arr

  const scores = []
  const len = arr.length
  const needleLen = needle.length
  let idx = len

  const noodle = caseSensitive ? needle : needle.toLowerCase()
  const extractFn = typeof propFn !== "function" && caseSensitive
    ? v => v
    : typeof propFn !== "function"
      ? v => v.toLowerCase()
      : caseSensitive
        ? propFn
        : v => propFn(v).toLowerCase()

  while (--idx) {
    let score = 0
    const val = extractFn(arr[idx])
    const valLen = val.length
    if (noodle === val) {
      scores.push([Infinity, idx])
    } else if (valLen !== 0) {
      let valIdx = 0
      let matchedInNeedleIdx = 0
      let numOfCharsMatchedAtOnce = 0
      while (valIdx < valLen) {
        if (noodle[matchedInNeedleIdx] === val[valIdx]) {
          matchedInNeedleIdx++
          numOfCharsMatchedAtOnce++
        } else {
          numOfCharsMatchedAtOnce = 0
        }
        score += numOfCharsMatchedAtOnce
        valIdx++
      }
      if (matchedInNeedleIdx === needleLen) {
        scores.push([score, idx])
      }
    }
  }

  return scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]).map(([_, index]) => arr[index])
}

export default fuzzy
