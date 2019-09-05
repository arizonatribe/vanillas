import tape from 'tape'
import renameKeys from '../src/renameKeys'

tape('"renameKeys" changes the names of any specified keys to new names', t => {
  t.deepEqual(
    renameKeys({lorem: 'Lorem'}, {lorem: 'ipsum'}),
    { Lorem: 'ipsum'}
  )
  t.deepEqual(
    renameKeys({dolor: 'dollar'}, {lorem: 'ipsum', dolor: 'sit', amet: 'yeah'}),
    { lorem: 'ipsum', dollar: 'sit', amet: 'yeah'}
  )
  t.end()
})
