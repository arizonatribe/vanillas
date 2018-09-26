const _ = require('lodash')
const Benchmark = require('benchmark')
const size = require('../src/size')

const suite = new Benchmark.Suite()

const val = {
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
  .add('Futilities "size"', () =>
    size(val)
  )
  .add('Lodash "size"', () =>
    _.size(val)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
