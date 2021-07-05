/**
 * Same as the regular curry function, but you must also specify the number of arguments that the curried function will take before being fully executed.
 * You would use this in cases where it cannot be inferred from the curried function itself.
 *
 * @function
 * @name curryN
 * @throws {TypeError} if arity is not supplied or is not a positive number
 * @param {number} arity The number of arguments the curried function will received before being executed
 * @param {function} fn A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns {function} A new Function that will wait until all (arity) arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
function curryN(arity, fn) {
  if (typeof arity !== "number" || Number.isNaN(arity) || arity <= 0) {
    return fn
  }

  const fnlen = arity
  return function manyArgCurry(...args) {
    const arglen = args.length
    if (arglen === fnlen) {
      return fn(...args)
    }

    return function inner(...innerArgs) {
      const innerlen = innerArgs.length

      let limit = fnlen
      const allArgs = []

      let argCount = 0
      while (argCount < arglen) {
        allArgs.push(args[argCount])
        argCount++
        limit--
      }

      let innerArgCount = 0
      while (innerArgCount < innerlen) {
        allArgs.push(innerArgs[innerArgCount])
        innerArgCount++
        limit--
      }

      return limit > 0
        ? manyArgCurry(...allArgs)
        : fn(...allArgs)
    }
  }
}

export default curryN
