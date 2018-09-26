const R = require('ramda')
const Benchmark = require('benchmark')
const { compose: reduxCompose } = require('redux')
const compose = require('../src/compose')

const suite = new Benchmark.Suite()

const add4 = a => a + 4
const subtract7 = a => a - 7
const divide3 = a => a / 3
const random = () => Math.random()

suite
  .add('Futilities "compose"', () =>
    compose(divide3, subtract7, add4, random)
  )
  .add('Redux "compose"', () =>
    reduxCompose(divide3, subtract7, add4, random)
  )
  .add('Ramda "compose"', () =>
    R.compose(divide3, subtract7, add4, random)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
