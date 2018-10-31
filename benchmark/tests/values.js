import _ from 'lodash'
import R from 'ramda'
import { values } from '../../src'
import { hook } from '../../test/__mocks__'

const tests = [
  ['Vanillas "omit"', () => values(hook)],
  ['Lodash "omit"', () => _.values(hook)],
  ['Ramda "omit"', () => R.values(hook)],
  ['(native) "Object.keys().filter().reduce() (native)', () => Object.values(hook)]
]

export default { tests }
