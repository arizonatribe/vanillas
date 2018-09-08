function curry(fn) {
  const fnlen = fn.length
  return function inner(...args) {
    if (fnlen === args.length) {
      return fn(...args)
    }
    return (...newArgs) => inner(...args, ...newArgs)
  }
}

// function curry(fn) {
//   const fnLen = fn.length
//   return function inner() {
//     const args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
//     if (fnLen === args.length) return fn.apply(null, args)

//     return function innerinner() {
//       const innerArgs = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
//       return inner.apply(null, [].concat.call(args, innerArgs))
//     }
//   }
// }

module.exports = curry
