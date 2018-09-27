const Benchmark = require('benchmark')
const { assign } = require('../lib')
const { hook, sphere, jurrassicPark } = require('../test/__mocks__')

const suite = new Benchmark.Suite()

suite
  .add('Futilities "assign"', () =>
    assign({}, hook, sphere, jurrassicPark)
  )
  .add('Object.assign (native)', () =>
    Object.assign({}, hook, sphere, jurrassicPark)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
