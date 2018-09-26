const isNil = require('./isNil')
const isObject = require('./isObject')
const forIn = require('./forIn')

function clone(obj) {
  if (!isNil(obj)) {
    if (Array.isArray(obj)) {
      return obj.map(v => v)
    }
    if (isObject(obj)) {
      const newObj = {}
      forIn((key, ob) => {
        const val = ob[key]
        if (isObject(val) || Array.isArray(val)) {
          newObj[key] = clone(val)
        } else {
          newObj[key] = val
        }
      }, obj)
      return newObj
    }
  }
}

module.exports = clone
