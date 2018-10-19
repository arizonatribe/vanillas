import _ from 'lodash'
import { isObject } from '../../src'

const data = {
  lorem: 'ipsum',
  dolor: 'sit'
}

const tests = [
  ['Futilities "isObject"', isObject],
  ['Lodash "isPlainObject"', _.isPlainObject]
]

export default { tests, data }
