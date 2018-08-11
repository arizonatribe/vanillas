function curry(fn) {
  return function inner(...args) {
    if (fn.length === args.length) {
      return fn(...args)
    }
    return (...newArgs) => inner(...args, ...newArgs)
  }
}

module.exports = curry
