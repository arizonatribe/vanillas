/**
 * Adds the values from one Array onto another Array, returned as a new Array
 * (ie, it does not mutate the first Array).
 *
 * @func
 * @sig [*,...] -> [*,...] => [*,...]
 * @param {Array} firstArr An Array of values (of any type)
 * @param {Array} secondArr An Array of values (of any type)
 * @returns {Array} A new Array with the values from the second array
 * concatenated onto those from the first
 */
function concat(firstArr, secondArr) {
  const firstLen = firstArr.length
  const len = secondArr.length + firstLen
  const newArr = new Array(len)
  for (let i = 0; i < firstLen; i++) {
    newArr[i] = firstArr[i]
  }
  for (let i = firstLen; i < len; i++) {
    newArr[i] = secondArr[i - firstLen]
  }
  return newArr
}

export default concat
