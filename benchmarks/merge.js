const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const { merge } = require('../lib')

const suite = new Benchmark.Suite()

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

suite
  .add('Futilities "merge"', () =>
    merge(hook, sphere)
  )
  .add('Lodash "merge"', () =>
    _.merge(hook, sphere)
  )
  .add('Ramda "merge"', () =>
    R.merge(hook, sphere)
  )
  .add('Object.assign({}, ..) (native)', () =>
    Object.assign({}, hook, sphere)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
