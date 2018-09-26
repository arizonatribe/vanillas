const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const size = require('../lib/size')

const suite = new Benchmark.Suite()

const val = 'lorem ipsum dolor sit amet'

suite
  .add('Futilities "size"', () =>
    size(val)
  )
  .add('Lodash "size"', () =>
    _.size(val)
  )
  .add('Ramda "length"', () =>
    R.length(val)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
