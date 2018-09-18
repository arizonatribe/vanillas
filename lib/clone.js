const isNil = require('./isNil')
const isObject = require('./isObject')

function clone(obj) {
  if (!isNil(obj)) {
    if (Array.isArray(obj)) {
      return obj.map(v => v)
    }
    if (isObject(obj)) {
      const newObj = {}
      for (key in obj) {
        const val = obj[key]
        if (isObject(val) || Array.isArray(val)) {
          newObj[key] = clone(val)
        } else {
          newObj[key] = val
        }
      }
      return newObj
    }
  }
}

module.exports = clone
