const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const pick = require('../lib/pick')

const suite = new Benchmark.Suite

const obj = {
  lorem: '',
  ipsum: '',
  dolor: '',
  sit: '',
  amet: '',
  consectetur: {
    adipiscing: 'elit'
  }
}

suite
  .add('Futilities "pick"', () =>
    pick(['lorem', 'consectetur', 'ipsum'], obj)
  )
  .add('Lodash "pick"', () =>
    _.pick(obj, ['lorem', 'consectetur', 'ipsum'])
  )
  .add('Ramda "pick"', () =>
    R.pick(['lorem', 'consectetur', 'ipsum'], obj)
  )
  .add('Array.prototype.reduce (native)', () =>
    ['lorem', 'consectetur', 'ipsum'].reduce((newObj, key) => ({ ...newObj, [key]: obj[key] }), {})
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
