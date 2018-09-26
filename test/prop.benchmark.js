const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const propAt = require('../lib/propAt')

const suite = new Benchmark.Suite()

const obj = {
  lorem: {
    ipsum: '',
    dolor: '',
    sit: '',
    amet: '',
    consectetur: {
      adipiscing: 'elit'
    }
  }
}

suite
  .add('Futilities "propAt"', () =>
    propAt(['lorem', 'consectetur', 'adipiscing'], obj)
  )
  .add('Lodash "get"', () =>
    _.get(obj, ['lorem', 'consectetur', 'adipiscing'])
  )
  .add('Ramda "path"', () =>
    R.path(['lorem', 'consectetur', 'adipiscing'], obj)
  )
  .add('&& until you find it (native)', () =>
    obj && obj.lorem && obj.lorem.consectetur && obj.lorem.consectetur.adipiscing
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
