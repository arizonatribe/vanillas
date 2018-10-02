function _map(fn, arr) {
  const len = arr.length
  const newArr = new Array(len)
  for (let i = 0; i < len; i++) {
    newArr[i] = fn(arr[i])
  }
  return newArr
}

export default _map
