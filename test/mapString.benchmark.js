const Benchmark = require('benchmark')
const map = require('../lib/map')

const suite = new Benchmark.Suite

suite
  .add('Futilities "map"', () =>
    map(str => str.toUpperCase(), 'lorem ipsum dolor sit amet. consectetur adipiscing elit.')
  )
  .add('String.split().map().join() (native)', () =>
    'lorem ipsum dolor sit amet. consectetur adipiscing elit.'.split('').map(str => str.toUpperCase()).join('')
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
