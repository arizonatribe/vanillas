const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const omit = require('../lib/omit')

const suite = new Benchmark.Suite()

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
  .add('Futilities "omit"', () =>
    omit(['lorem', 'consectetur', 'ipsum'], obj)
  )
  .add('Lodash "omit"', () =>
    _.omit(obj, ['lorem', 'consectetur', 'ipsum'])
  )
  .add('Ramda "omit"', () =>
    R.omit(['lorem', 'consectetur', 'ipsum'], obj)
  )
  .add('Object.keys().filter().reduce() (native)', () =>
    Object.keys(obj)
      .filter(key => !['lorem', 'consectetur', 'ipsum'].includes(key))
      .reduce((newObj, key) => ({ ...newObj, [key]: obj[key] }), {})
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
