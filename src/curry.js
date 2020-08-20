/**
 * Takes a Function whose params are meant to be supplied all at once and changes it so they can be supplied one at a time.
 * As each argument is supplied a new Function is returned that is ready to receive the next argument.
 * This continues until all arguments for your origianl function have been supplied and then the actual result is returned.
 *
 * Note: you cannot set default values for curried function params (again, you _cannot_ set default values for curried function params)
 *
 * @function
 * @param {Function} fn A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns {Function} A new Function that will wait until all arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
function curry(fn) {
  const fnlen = fn.length
  switch (fnlen) {
  case 2:
    return function standardCurry(a, b) {
      if (arguments.length === 2) {
        return fn(a, b)
      }
      return _b => fn(a, _b)
    }
  case 3:
    return function threeArgCurry(a, b, c) {
      switch (arguments.length) {
      case 3:
        return fn(a, b, c)
      case 2:
        return _c => fn(a, b, _c)
      default:
        return curry((_b, _c) => fn(a, _b, _c))
      }
    }
  case 4:
    return function fourArgCurry(a, b, c, d) {
      switch (arguments.length) {
      case 4:
        return fn(a, b, c, d)
      case 3:
        return _d => fn(a, b, c, _d)
      case 2:
        return curry((_c, _d) => fn(a, b, _c, _d))
      default:
        return curry((_b, _c, _d) => fn(a, _b, _c, _d))
      }
    }
  default:
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
}

export default curry
