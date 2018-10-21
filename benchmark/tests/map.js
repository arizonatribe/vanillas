import _ from 'lodash'
import R from 'ramda'
import { map } from '../../src'

const val = ['dustin', 'robin', 'julia', 'bob']

const tests = [
  ['Vanillas "map"', () => map(str => str.toUpperCase(), val)],
  ['Lodash "map"', () => _.map(val, str => str.toUpperCase())],
  ['Ramda "map"', () => R.map(str => str.toUpperCase(), val)],
  ['(native) "Array.map()"', () => val.map(str => str.toUpperCase())]
]

export default { tests }
