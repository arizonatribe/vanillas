function omit(keys, obj) {
  return Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((newObj, key) => ({ ...newObj, [key]: obj[key] }), {})
}

module.exports = omit
