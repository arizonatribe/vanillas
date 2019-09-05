/**
 * A faster forEach that provides the same API as native.
 *
 * @function
 * @sig ((*, Number, [*,..]) -> undefined) -> [*,..] -> undefined
 * @param {Function} fn A Function to execute for each iteration. It will
 * receive the value, index and full array (respectively) as args
 * @param {Array} arr An Array to iterate over (any value will be passed into
 * the iterate Function)
 */
function each(fn, arr) {
  const count = arr.length
  for (let i = 0; i < count; i++) {
    fn(arr[i], i, arr)
  }
}

export default each
