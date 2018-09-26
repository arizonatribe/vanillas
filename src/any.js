function any(pred, arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (pred(arr[i])) return true
  }
  return false
}

export default any
