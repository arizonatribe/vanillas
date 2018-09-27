const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const { reduce } = require('../lib')

const suite = new Benchmark.Suite()

const arr = ['dustin', 'robin', 'julia', 'bob']
const reducer = (obj, val) => ({ ...obj, [val]: val })

suite
  .add('Futilities "reduce"', () =>
    reduce(reducer, {}, arr)
  )
  .add('Lodash "reduce"', () =>
    _.reduce(arr, reducer, {})
  )
  .add('Ramda "reduce"', () =>
    R.reduce(reducer, {}, arr)
  )
  .add('Array.reduce (native)', () =>
    arr.reduce(reducer, {})
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
