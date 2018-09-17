function _map(fn, arr) {
  const len = arr.length
  const newArr = Array(len)
  for (let i = 0; i < len; i++) {
    newArr[i] = fn(arr[i])
  }
  return newArr
}

module.exports = _map
