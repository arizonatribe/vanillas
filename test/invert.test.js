import tape from 'tape'
import invert from '../src/invert'
import { hook } from './__mocks__'

tape('"invert" removes specified props from an object', t => {
  t.deepEqual(
    invert(hook), {
      dustin: 'Hoffman',
      robin: 'Williams',
      julia: 'Roberts',
      bob: 'Hoskins'
    }
  )
  t.deepEqual(
    invert({
      a: 1,
      b: { lorem: 'ipsum' },
      c: [1, 2, 3, 4],
      d: 'dee'
    }), {
      1: 'a',
      '[object Object]': 'b',
      '1,2,3,4': 'c',
      dee: 'd'
    },
    'converts values to string'
  )
  t.end()
})
