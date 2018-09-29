import _ from 'lodash'
import R from 'ramda'
import { reduce } from '../../src'

const data = ['dustin', 'robin', 'julia', 'bob']
const reducer = (obj, val) => ({ ...obj, [val]: val })

const tests = [
  ['Futilities "reduce"', val => reduce(reducer, {}, val)],
  ['Lodash "reduce"', val => _.reduce(val, reducer, {})],
  ['Ramda "reduce"', val => R.reduce(reducer, {}, val)],
  ['(native) "Array.reduce"', val => val.reduce(reducer, {})]
]

export default { tests, data }
