const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const concat = require('../lib/concat')

const suite = new Benchmark.Suite()

const hook = [
  'dustin',
  'robin',
  'julia',
  'bob'
]
const sphere = [
  'dustin',
  'samuel',
  'sharon',
  'queen'
]

suite
  .add('Futilities "concat"', () =>
    concat(hook, sphere)
  )
  .add('Lodash "concat"', () =>
    _.concat(hook, sphere)
  )
  .add('Ramda "concat"', () =>
    R.concat(hook, sphere)
  )
  .add('[ ...val1, ...val2 ] (native)', () =>
    [...hook, ...sphere]
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
