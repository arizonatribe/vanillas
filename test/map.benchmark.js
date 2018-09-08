const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const map = require('../lib/map')

const suite = new Benchmark.Suite

const arr = ['dustin', 'robin', 'julia', 'bob']

suite
  .add('Futilities "map"', () =>
    map(str => str.toUpperCase(), arr)
  )
  .add('Lodash "map"', () =>
    _.map(arr, str => str.toUpperCase())
  )
  .add('Ramda "map"', () =>
    R.map(str => str.toUpperCase(), arr)
  )
  .add('Array.map (native)', () =>
    arr.map(str => str.toUpperCase())
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
