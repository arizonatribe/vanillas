import tape from 'tape'
import has from '../src/has'
import { has as hasCurried } from '../src/curried'

tape('"has" inspects own props on a given object for a specified key', t => {
  t.equal(has('orange', {red: 'blue', orange: 'purple'}), true)
  t.equal(hasCurried('orange')({red: 'blue', orange: 'purple'}), true, 'can be curried')
  t.equal(has('green', {red: 'blue', orange: 'purple'}), false)
  t.end()
})
