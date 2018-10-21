import _ from 'lodash'
import { isObject } from '../../src'

const val = {
  lorem: 'ipsum',
  dolor: 'sit'
}

const tests = [
  ['Vanillas "isObject"', () => isObject(val)],
  ['Lodash "isPlainObject"', () => _.isPlainObject(val)]
]

export default { tests }
