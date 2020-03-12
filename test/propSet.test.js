import tape from 'tape'
import propSet from '../src/propSet'
import { propSet as propSetCurried } from '../src/curried'

tape('"propSet" inspects own props on a given object for a specified key', t => {
  t.deepEqual(
    propSet('yellow', 'green', {red: 'blue', orange: 'purple'}),
    {red: 'blue', orange: 'purple', yellow: 'green'},
    'sets a new (root-level) prop easily'
  )
  t.deepEqual(
    propSet('orange', 'green', {red: 'blue', orange: 'purple'}),
    {red: 'blue', orange: 'green'},
    'overwrites an existing (root-level) prop easily'
  )
  t.deepEqual(
    propSet('grey.light', '#E2E2E2', {red: 'blue', orange: 'purple'}),
    {red: 'blue', orange: 'purple', grey: { light: '#E2E2E2' }},
    'wow! it can set a new nested prop'
  )
  t.deepEqual(
    propSet('red.pink', '#da1d58', {red: 'blue', orange: 'purple'}),
    {orange: 'purple', red: { pink: '#da1d58' }},
    'you specify a path that steamrolls over an existing prop: too bad; it\'s gone now!'
  )
  const latin = {lorem: { ipsum: { dolor: { sit: 'amet' } } } }
  const newObject = propSet('lorem.ipsum.dolor.sit', 'down', latin)

  t.deepEqual(
    newObject,
    {lorem: { ipsum: { dolor: { sit: 'down' } } } },
    'can handle deeply nested path prop replacement'
  )
  t.deepEqual(
    latin,
    {lorem: { ipsum: { dolor: { sit: 'amet' } } } },
    'original object is NOT mutated'
  )
  t.deepEqual(
    propSetCurried(['lorem', 'ipsum', 'dolor', 'sit', 'amet'])('consectetuer adipiscing elit')(latin),
    {lorem: { ipsum: { dolor: { sit: { amet: 'consectetuer adipiscing elit' } } } } },
    'can be curried'
  )
  t.end()
})
