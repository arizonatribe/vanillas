const Benchmark = require('benchmark')
const assign = require('../lib/assign')

const suite = new Benchmark.Suite

const hook = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}
const sphere = {
  Hoffman: 'dustin',
  Jackson: 'samuel',
  Stone: 'sharon',
  Latifah: 'queen'
}
const jurrassicPark = {
  Neill: 'sam',
  Jackson: 'samuel',
  Knight: 'wayne',
  Goldblum: 'jeff'
}

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
