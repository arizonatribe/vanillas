import tape from 'tape'
import append from '../src/append'
import prepend from '../src/prepend'
import { hook, counterCultureIcons } from './__mocks__'

tape('"prepend" merges one value onto another, placing it before', t => {
  t.equal(
    prepend('ipsum', 'lorem '),
    'lorem ipsum',
    'places the characters from the second string before those from the first'
  )
  t.equal(
    prepend(' is the answer', 42),
    '42 is the answer',
    'places the numberic value before the characters from the first value'
  )
  t.deepEqual(
    prepend(counterCultureIcons, hook), {
      Hoffman: 'albert',
      Leary: 'timothy',
      Ginsberg: 'allen',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob'
    },
    'creates odd mixtures'
  )
  t.deepEqual(
    prepend([1, 2, 3], [4, 5, 6]),
    [4, 5, 6, 1, 2, 3],
    'places the values from the second array before those from the first'
  )
  t.end()
})

tape('"append" merges one value onto another, placing it afterwards', t => {
  t.equal(
    append('lorem ', 'ipsum'),
    'lorem ipsum',
    'places the characters from the second string after those from the first'
  )
  t.equal(
    append(42, ' is the answer'),
    '42 is the answer',
    'places the numberic value after the characters from the first value'
  )
  t.deepEqual(
    append(counterCultureIcons, hook), {
      Hoffman: 'dustin',
      Leary: 'timothy',
      Ginsberg: 'allen',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob'
    },
    'creates odd mixtures'
  )
  t.deepEqual(
    append([1, 2, 3], [4, 5, 6]),
    [1, 2, 3, 4, 5, 6],
    'places the values from the second array after those from the first'
  )
  t.end()
})
