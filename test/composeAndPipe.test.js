const tape = require('tape')
const compose = require('../lib/compose')
const pipe = require('../lib/pipe')

const uppercase = str => str.toUpperCase()
const addSpaces = str => str.split('').map(s => ` ${s}`).join('')
const add = (a, b) => a + b
const divideByTwo = a => a / 2

tape('"compose" creates a chain of functions to execute on some input', t => {
  t.equal(compose(addSpaces, uppercase)('lorem'), ' L O R E M')
  t.equal(
    compose(divideByTwo, add)(10, 30),
    20,
    'first function in the chain can be of any arity'
  )
  t.equal(
    compose()(7),
    7,
    'if no functions are provided to compose, if behaves as an identity function'
  )
  t.throws(() => compose(null)(7), 'any arg passed to compose has to be a function')
  t.end()
})

tape('"pipe" creates a chain of functions to execute on some input (left to right)', t => {
  t.equal(pipe(uppercase, addSpaces)('lorem'), ' L O R E M')
  t.equal(
    pipe(add, divideByTwo)(10, 30),
    20,
    'first function in the chain can be of any arity'
  )
  t.equal(
    pipe()(7),
    7,
    'if no functions are provided to pipe, if behaves as an identity function'
  )
  t.throws(() => pipe(null)(7), 'any arg passed to pipe has to be a function')
  t.end()
})
