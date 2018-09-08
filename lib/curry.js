function curry(fn) {
  const fnlen = fn.length
  return function inner(...args) {
    if (fnlen === args.length) {
      return fn(...args)
    }
    return (...newArgs) => inner(...args, ...newArgs)
  }
}

module.exports = curry
