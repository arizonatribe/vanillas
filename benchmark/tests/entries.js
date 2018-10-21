import _ from 'lodash'
import R from 'ramda'
import { entries } from '../../src'

const val = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

const tests = [
  ['Vanillas "entries"', () => entries(val)],
  ['Lodash "toPairs"', () => _.toPairs(val)],
  ['Ramda "toPairs"', () => R.toPairs(val)],
  ['(native) "Object.entries( )"', () => Object.entries(val)]
]

export default { tests }
