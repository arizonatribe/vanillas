const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const clone = require('../lib/clone')

const suite = new Benchmark.Suite

const hook = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

suite
  .add('Futilities "clone"', () =>
    clone(hook)
  )
  .add('Lodash "clone"', () =>
    _.clone(hook)
  )
  .add('Ramda "clone"', () =>
    R.clone(hook)
  )
  .add('clone by destructuring (native)', () => {
    const newObj = { ...hook }
    return newObj
  })
  .add('Object.assign({}, ..) (native)', () =>
    Object.assign({}, hook)
  )
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
