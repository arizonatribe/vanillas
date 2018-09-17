const tape = require('tape')
const map = require('../lib/map')
const { map: mapCurried } = require('../lib/curried')

tape('"map" can apply a function to an Object, String, or something that is Array-like', t => {
  t.deepEqual(
    map(str => str.toUpperCase(), {
      Hoffman: 'dustin',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob'
    }), {
      Hoffman: 'DUSTIN',
      Williams: 'ROBIN',
      Roberts: 'JULIA',
      Hoskins: 'BOB'
    },
    'map over the values of an object'
  )
  let actors = ['dustin', 'robin', 'julia', 'bob']
  const actorsLoudly = map(str => str.toUpperCase(), actors)
  t.deepEqual(
    actorsLoudly,
    ['DUSTIN', 'ROBIN', 'JULIA', 'BOB'],
    'map over the contents of an array'
  )
  t.deepEqual(
    actors,
    ['dustin', 'robin', 'julia', 'bob'],
    'previous array was not mutated'
  )
  t.deepEqual(
    map(
      i => i + 10,
      new Int8Array([18, 19, 20, 21])
    ), [28, 29, 30, 31],
    'map over the contents of an Int8Array'
  )
  t.deepEqual(
    map(
      i => i + 100,
      new Int16Array([1800, 1900, 2000, 2100])
    ), [1900, 2000, 2100, 2200],
    'map over the contents of an Int16Array'
  )
  t.deepEqual(
    map(
      i => i + 1,
      new Int32Array([13384, 13389, 13381, 13385])
    ), [13385, 13390, 13382, 13386],
    'map over the contents of an Int32Array'
  )
  t.deepEqual(
    map(
      Math.ceil,
      new Float32Array([902.1, 89.1, 22.5, 743.7])
    ), [903, 90, 23, 744],
    'map over the contents of a Float32Array'
  )
  t.deepEqual(
    map(
      Math.floor,
      new Float64Array([7333.12038, 8993.19292929])
    ), [7333, 8993],
    'map over the contents of a Float64Array'
  )
  t.deepEqual(
    map(
      v => v * 3,
      new Uint8Array([7, 21, 49])
    ), [21, 63, 147],
    'map over the contents of a Uint8Array'
  )
  t.deepEqual(
    map(
      v => v * 3,
      new Uint16Array([700, 2100, 4900])
    ), [2100, 6300, 14700],
    'map over the contents of a Uint16Array'
  )
  t.equal(
    map(str => str.toUpperCase(), 'william'),
    'WILLIAM',
    'map over the chars in a string'
  )
  t.equal(
    mapCurried(str => str.toLowerCase())('SHOUTING'),
    'shouting',
    'can also be curried'
  )
  t.end()
})
