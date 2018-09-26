const _ = require('lodash')
const Benchmark = require('benchmark')
const each = require('../lib/each')

const suite = new Benchmark.Suite()

const arr = ['dustin', 'robin', 'julia', 'bob']

suite
  .add('Futilities "each"', () =>
    each(str => str.toUpperCase(), arr)
  )
  .add('Lodash "each"', () =>
    _.each(arr, str => str.toUpperCase())
  )
  .add('Array.forEach (native)', () =>
    arr.forEach(str => str.toUpperCase())
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
