function converge(fn, ...restOfArgs) {
  function inner(...args) {
    return fn(
      ...(Array.isArray(restOfArgs[0]) ? restOfArgs[0] : restOfArgs).map(f => f(...args))
    )
  }
  return inner
}

module.exports = converge
