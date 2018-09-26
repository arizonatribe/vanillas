function convergeZip(fn, ...restOfArgs) {
  const isArrayUsage = Array.isArray(restOfArgs[0])
  function inner(...args) {
    const ars = Array.isArray(args[0]) && isArrayUsage ? args[0] : args
    const fns = (isArrayUsage ? restOfArgs[0] : restOfArgs).slice(0, ars.length)
    return fn(...ars.map((a, i) => fns[i](a)))
  }
  return inner
}

export default convergeZip
