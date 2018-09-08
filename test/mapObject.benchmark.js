const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const mapObject = require('../lib/mapObject')

const suite = new Benchmark.Suite

const obj = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

suite
  .add('Futilities "mapObject"', () =>
    mapObject(str => str.toUpperCase(), obj)
  )
  .add('Lodash "mapValues"', () =>
    _.mapValues(obj, str => str.toUpperCase())
  )
  .add('Ramda "map"', () =>
    R.map(str => str.toUpperCase(), obj)
  )
  .add('Object.keys( ).reduce() (native)', () =>
    Object.keys(obj).reduce((o, key) => ({ ...o, [key]: obj[key].toUpperCase() }), {})
  )
  .add('Object.entries().reduce() (native)', () =>
    Object.entries(obj).reduce((o, [key, val]) => ({ ...o, [key]: val.toUpperCase() }), {})
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
