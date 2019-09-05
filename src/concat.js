/**
 * Adds the values from one Array onto another Array, returned as a new Array
 * (ie, it does not mutate the first Array). This operation is recursive, so you
 * can supply as many arrays as you wish.
 *
 * @function
 * @sig [*,...] -> [*,...] => [*,...]
 * @param {Array} firstArr An Array of values (of any type)
 * @param {Array} secondArr An Array of values (of any type)
 * @returns {Array} A new Array with the values from the second array
 * concatenated onto those from the first
 */
function concat(firstArr, secondArr, ...restOfArrs) {
  const firstLen = firstArr.length
  const len = secondArr.length + firstLen
  const newArr = new Array(len)
  for (let i = 0; i < firstLen; i++) {
    newArr[i] = firstArr[i]
  }
  for (let i = firstLen; i < len; i++) {
    newArr[i] = secondArr[i - firstLen]
  }
  if (restOfArrs.length) {
    return concat(newArr, restOfArrs[0], ...restOfArrs.slice(1))
  }
  return newArr
}

export default concat
