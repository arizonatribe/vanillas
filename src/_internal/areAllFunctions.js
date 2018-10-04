function areAllFunctions(fns) {
  return fns.some((f, idx) => {
    if (typeof f !== 'function') {
      throw new Error(`Argument #${idx + 1} passed to "compose()" is not a function:\n"${JSON.stringify(f)}"`)
    }
    return true
  })
}

export default areAllFunctions
