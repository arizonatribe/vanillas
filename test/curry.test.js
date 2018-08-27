const tape = require('tape')
const curry = require('../lib/curry')

tape('"curry" can transform a function of any arity into a function that can be partially applied until all arguments have been provided', t => {
  function one(a, b, c) {
    return a + b + c
  }
  const add = curry(one)
  const addB = add(2)
  const addC = addB(3)
  t.equal(addC(3), 8)
  t.end()
})
