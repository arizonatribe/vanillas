import { _includes } from './_internal/_includes'

/**
 * Filters an array of values down to only those which are unique
 *
 * @function
 * @sig [a, b, b, b, ..] -> [a, b, ..]
 * @param {Array} list An array of values which may or may not contain duplicates
 * @returns {Array} A new list containing only the unique values from the original array
 */
function uniq(list) {
  let idx = -1
  const newArr = []
  const len = list.length
  while (++idx < len) {
    const val = list[idx]
    if (!_includes(val, newArr)) {
      newArr.push(val)
    }
  }
  return newArr
}

export default uniq
