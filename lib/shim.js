const isNil = require('./isNil')
const isObject = require('./isObject')

const getter = Object.freeze({
  get(target, key) {
    if (isObject(target[key])) {
      return new Proxy(target[key], getter)
    }
    if (isNil(target[key])) {
      return new Proxy({[Symbol.toPrimitive]: String}, getter)
    }
    return target[key]
  }
})

function shim(obj) {
  return new Proxy(obj, getter)
}

module.exports = shim
