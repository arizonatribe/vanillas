import _ from 'lodash'
import R from 'ramda'
import { entries } from '../../src'

const data = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

const tests = [
  ['Futilities "entries"', entries],
  ['Lodash "toPairs"', _.toPairs],
  ['Ramda "toPairs"', R.toPairs],
  ['(native) "Object.entries( )"', Object.entries]
]

export default { data, tests }
