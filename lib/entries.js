function entries(obj) {
  return Object.keys(obj).map(key => [key, obj[key]])
}

module.exports = entries
