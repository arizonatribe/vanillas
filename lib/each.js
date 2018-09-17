function each(fn, arr) {
  const count = arr.length
  for (let i = 0; i < count; i++) {
    fn(arr[i], i)
  }
}

module.exports = each
