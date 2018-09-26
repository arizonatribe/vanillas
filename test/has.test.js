const tape = require('tape')
const has = require('../lib/has')
const { has: hasCurried } = require('../lib/curried')

tape('"has" inspects own props on a given object for a specified key', t => {
  t.equal(has('orange', {red: 'blue', orange: 'purple'}), true)
  t.equal(hasCurried('orange')({red: 'blue', orange: 'purple'}), true, 'can be curried')
  t.equal(has('green', {red: 'blue', orange: 'purple'}), false)
  t.end()
})
