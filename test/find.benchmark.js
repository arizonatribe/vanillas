const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const find = require('../src/find')

const suite = new Benchmark.Suite()

const arr = ['dustin', 'robin', 'julia', 'bob']
const predicate = val => /uli/.test(val)

suite
  .add('Futilities "find"', () =>
    find(predicate, arr)
  )
  .add('Lodash "find"', () =>
    _.find(arr, predicate)
  )
  .add('Ramda "find"', () =>
    R.find(predicate, arr)
  )
  .add('Array.find (native)', () =>
    arr.find(predicate)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
