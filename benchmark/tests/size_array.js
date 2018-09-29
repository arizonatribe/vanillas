import _ from 'lodash'
import R from 'ramda'
import { size } from '../../src'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const tests = [
  ['Futilities "size"', val => size(val)],
  ['Lodash "size"', val => _.size(val)],
  ['Ramda "length"', val => R.length(val)]
]

export default { tests, data }
