export function _includes(val, arr) {
  let idx = arr.length
  while (idx--) {
    if (arr[idx] === val) {
      return true
    }
  }
  return false
}
