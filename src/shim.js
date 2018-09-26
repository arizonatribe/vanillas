import isNil from './isNil'
import isObject from './isObject'

const getter = {
  get(target, key) {
    if (isObject(target[key])) {
      return new Proxy(target[key], getter)
    }
    if (isNil(target[key])) {
      return new Proxy({[Symbol.toPrimitive]: String}, getter)
    }
    return target[key]
  }
}

function shim(obj) {
  return new Proxy(obj, getter)
}

export default shim
