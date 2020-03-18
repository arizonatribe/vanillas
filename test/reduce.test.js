import tape from 'tape'
import reduce from '../src/reduce'
import { reduce as reduceCurried } from '../src/curried'

tape('"reduce" can apply a function to an Object, String, or something that is Array-like', t => {
  t.deepEqual(
    reduce((sum, num) => sum + num, 0, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]),
    88,
    'reduce an array of numbers'
  )
  t.deepEqual(
    reduce((sum, letter) => sum + letter, '', ['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']),
    'lorem ipsum',
    'reduce an array of letters'
  )
  t.deepEqual(
    reduce((obj, val, key) => {
      if (!obj[val]) {
        obj[val] = []
      }
      obj[val].push(key)
      return obj
    }, {}, { a: 1, b: 2, c: 1 }),
    { 1: ['a', 'c'], 2: ['b'] },
    'reduce an object'
  )
  t.deepEqual(
    reduce((cast, val, key) => [cast, `${val} ${key}`].filter(Boolean).join(', '), '', {
      Hoffman: 'Dustin',
      Williams: 'Robin',
      Roberts: 'Julia',
      Hoskins: 'Bob'
    }),
    'Dustin Hoffman, Robin Williams, Julia Roberts, Bob Hoskins',
    'reduce an object to a string'
  )
  t.end()
})
