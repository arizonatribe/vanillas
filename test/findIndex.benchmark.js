const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const findIndex = require('../lib/findIndex')

const suite = new Benchmark.Suite()

const arr = ['dustin', 'robin', 'julia', 'bob']
const predicate = val => /uli/.test(val)

suite
  .add('Futilities "findIndex"', () =>
    findIndex(predicate, arr)
  )
  .add('Lodash "findIndex"', () =>
    _.findIndex(arr, predicate)
  )
  .add('Ramda "findIndex"', () =>
    R.findIndex(predicate, arr)
  )
  .add('Array.findIndex (native)', () =>
    arr.findIndex(predicate)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
