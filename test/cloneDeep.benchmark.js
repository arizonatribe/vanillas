const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const clone = require('../src/clone')

const suite = new Benchmark.Suite()

const movies = {
  hook: {
    Hoffman: 'dustin',
    Williams: 'robin',
    Roberts: 'julia',
    Hoskins: 'bob'
  },
  sphere: {
    Hoffman: 'dustin',
    Jackson: 'samuel',
    Stone: 'sharon',
    Latifah: 'queen'
  },
  jurrassicPark: {
    Neill: 'sam',
    Jackson: 'samuel',
    Knight: 'wayne',
    Goldblum: 'jeff'
  }
}

suite
  .add('Futilities "clone"', () =>
    clone(movies)
  )
  .add('Lodash "cloneDeep"', () =>
    _.cloneDeep(movies)
  )
  .add('Ramda "clone"', () =>
    R.clone(movies)
  )
  .add('clone by destructuring (native)', () => {
    const newObj = {
      ...movies,
      hook: { ...movies.hook },
      sphere: { ...movies.sphere },
      jurrassicPark: { ...movies.jurrassicPark }
    }
    return newObj
  })
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
