const tape = require('tape')
const pick = require('../lib/pick')

tape('"pick" removes specified props from an object', t => {
  t.deepEqual(pick(['lorem'], {lorem: 'ipsum', dolor: 'sit amet'}), {lorem: 'ipsum'})
  t.deepEqual(
    pick(['lorem', 'dolor'], {lorem: 'ipsum', dolor: 'sit amet', consectetur: 'adipiscing elit'}),
    {lorem: 'ipsum', dolor: 'sit amet'}
  )
  t.deepEqual(pick([], {lorem: 'ipsum'}), {}, 'handles no props gracefully')
  t.end()
})
