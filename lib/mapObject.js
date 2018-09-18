function mapObject(fn, obj) {
  const newObj = {}
  for (let key in obj) {
    newObj[key] = fn(obj[key], key, obj)
  }
  return newObj;
}

module.exports = mapObject
