const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const { any } = require('../lib')

const suite = new Benchmark.Suite()

const arr = ['dustin', 'robin', 'julia', 'bob']
const predicate = val => /uli/.test(val)

suite
  .add('Futilities "any"', () =>
    any(predicate, arr)
  )
  .add('Lodash "some"', () =>
    _.some(arr, predicate)
  )
  .add('Ramda "any"', () =>
    R.any(predicate, arr)
  )
  .add('Array.some (native)', () =>
    arr.some(predicate)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
