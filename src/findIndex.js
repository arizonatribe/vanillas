function findIndex(pred, arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (pred(arr[i])) return i
  }
  return -1
}

export default findIndex
