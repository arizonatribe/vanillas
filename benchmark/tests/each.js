import _ from 'lodash'
import { each } from '../../src'

const data = ['dustin', 'robin', 'julia', 'bob']

const tests = [
  ['Futilities "each"', arr => each(str => str.toUpperCase(), arr)],
  ['Lodash "each"', arr => _.each(arr, str => str.toUpperCase())],
  ['(native) "Array.forEach"', arr => arr.forEach(str => str.toUpperCase())]
]

export default { data, tests }
