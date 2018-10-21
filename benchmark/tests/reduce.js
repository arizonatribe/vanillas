import _ from 'lodash'
import R from 'ramda'
import { reduce } from '../../src'

const val = ['dustin', 'robin', 'julia', 'bob']
const reducer = (obj, v) => ({ ...obj, [v]: v })

const tests = [
  ['Vanillas "reduce"', () => reduce(reducer, {}, val)],
  ['Lodash "reduce"', () => _.reduce(val, reducer, {})],
  ['Ramda "reduce"', () => R.reduce(reducer, {}, val)],
  ['(native) "Array.reduce"', () => val.reduce(reducer, {})]
]

export default { tests }
