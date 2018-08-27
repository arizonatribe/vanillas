const tape = require('tape')
const omit = require('../lib/omit')

tape('"omit" removes specified props from an object', t => {
  t.deepEqual(omit(['lorem'], {lorem: 'ipsum'}), {})
  t.deepEqual(
    omit(['lorem', 'dolor'], {lorem: 'ipsum', dolor: 'sit amet', consectetur: 'adipiscing elit'}),
    {consectetur: 'adipiscing elit'}
  )
  t.deepEqual(omit([], {lorem: 'ipsum'}), {lorem: 'ipsum'}, 'handles no props gracefully')
  t.end()
})
