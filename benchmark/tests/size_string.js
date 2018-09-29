import _ from 'lodash'
import R from 'ramda'
import { size } from '../../src'

const data = 'lorem ipsum dolor sit amet'

const tests = [
  ['Futilities "size"', val => size(val)],
  ['Lodash "size"', val => _.size(val)],
  ['Ramda "length"', val => R.length(val)]
]

export default { tests, data }
