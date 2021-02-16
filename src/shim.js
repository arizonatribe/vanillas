import isNil from "./isNil"
import isObject from "./isObject"

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

/**
 * Recursively shims an Object.
 * Every time the getter is invoked (which happens whenever prop paths are referenced in the consuming code), the path is shimmed with another Proxy.
 * It is not a polyfill but rather a way to keep deep prop paths that may not exist on the source object from throwing an error.
 *
 * @function
 * @name shim
 * @param {object} obj An object that will be the Proxy's source
 * @returns {Proxy} An Object that will return props on the source Object if they exist but safely handle missing prop paths without throwing errors.
 */
function shim(obj) {
  return new Proxy(obj, getter)
}

export default shim
