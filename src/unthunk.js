function unthunk(thunk) {
  return function inner(...args) {
    return args.reduce((f, a) => f(a), thunk)
  }
}

export default unthunk
