import _ from 'lodash'
import R from 'ramda'
import { map } from '../../src'

const data = ['dustin', 'robin', 'julia', 'bob']

const tests = [
  ['Futilities "map"', val => map(str => str.toUpperCase(), val)],
  ['Lodash "map"', val => _.map(val, str => str.toUpperCase())],
  ['Ramda "map"', val => R.map(str => str.toUpperCase(), val)],
  ['(native) "Array.map()"', val => val.map(str => str.toUpperCase())]
]

export default { tests, data }
