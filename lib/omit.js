function omit(keys, obj) {
  const newObj = {}
  for (key in obj) {
    if (!keys.includes(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

module.exports = omit
