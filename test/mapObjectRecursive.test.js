import tape from 'tape'
import map from '../src/mapObjectRecursive'
import { mapObjectRecursive as mapCurried } from '../src/curried'

tape('"map" can apply a function to an Object, String, or something that is Array-like', t => {
  t.deepEqual(
    map(str => str.toUpperCase(), {
      Hoffman: 'dustin',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob',
      jurassicPark: {
        Attenborough: 'richard',
        Dern: 'laura',
        Jackson: 'samuel',
        Neill: 'sam'
      }
    }), {
      Hoffman: 'DUSTIN',
      Williams: 'ROBIN',
      Roberts: 'JULIA',
      Hoskins: 'BOB',
      jurassicPark: {
        Attenborough: 'RICHARD',
        Dern: 'LAURA',
        Jackson: 'SAMUEL',
        Neill: 'SAM'
      }
    },
    'map over the values of an object'
  )
  t.deepEqual(
    mapCurried(str => str.toUpperCase())({
      Hoffman: 'dustin',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob',
      jurassicPark: {
        Attenborough: 'richard',
        Dern: 'laura',
        Jackson: 'samuel',
        Neill: 'sam'
      }
    }), {
      Hoffman: 'DUSTIN',
      Williams: 'ROBIN',
      Roberts: 'JULIA',
      Hoskins: 'BOB',
      jurassicPark: {
        Attenborough: 'RICHARD',
        Dern: 'LAURA',
        Jackson: 'SAMUEL',
        Neill: 'SAM'
      }
    },
    'can also be curried'
  )
  t.end()
})
