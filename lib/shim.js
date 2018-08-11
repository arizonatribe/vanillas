function shim(obj) {
  return new Proxy(obj, {
    get(target, key) {
      if (!obj.hasOwnProperty(key)) {
        return () => undefined
      }
      return target[key]
    }
  })
}

module.exports = shim
