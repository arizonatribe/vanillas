function entries(obj) {
  const keys = Object.keys(obj)
  let len = keys.length
  const pairs = Array(len)
  while (len--) {
    pairs[len] = [keys[len], obj[keys[len]]]
  }
  return pairs
}

module.exports = entries
