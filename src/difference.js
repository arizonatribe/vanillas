import { _includes } from "./_internal/_includes"

/**
 * Compares two lists of Strings/Numbers and returns the values that are different between the two lists
 *
 * @function
 * @name difference
 * @param {Array<string>|Array<number>} arr1 An Array of Strings
 * @param {Array<string>|Array<number>} arr2 An Array of Strings
 * @returns {Array<string>|Array<number>} An array of values that are different between the two lists
 */
function difference(arr1, arr2) {
  const diff = []
  const len1 = arr1.length
  const len2 = arr2.length

  if (len1 === 0 && len2 === 0) {
    return diff
  } else if (len1 === 0) {
    return arr2
  } else if (len2 === 0) {
    return arr1
  }

  for (let i = 0; i < len1; i++) {
    const val = arr1[i]
    if (!_includes(val, arr2)) {
      diff.push(val)
    }
  }

  return diff
}

export default difference
