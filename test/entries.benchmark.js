const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const entries = require('../lib/entries')

const suite = new Benchmark.Suite

const obj = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

suite
  .add('Futilities "entries"', () =>
    entries(obj)
  )
  .add('Lodash "toPairs"', () =>
    _.toPairs(obj)
  )
  .add('Ramda "toPairs"', () =>
    R.toPairs(obj)
  )
  .add('Object.entries( ) (native)', () =>
    Object.entries(obj)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
