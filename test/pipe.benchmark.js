const R = require('ramda')
const Benchmark = require('benchmark')
const pipe = require('../lib/pipe')

const suite = new Benchmark.Suite

const add4 = a => a + 4
const subtract7 = a => a - 7
const divide3 = a => a / 3
const random = () => Math.random()

suite
  .add('Futilities "pipe"', () =>
    pipe(random, add4, subtract7, divide3)
  )
  .add('Ramda "pipe"', () =>
    R.pipe(random, add4, subtract7, divide3)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
