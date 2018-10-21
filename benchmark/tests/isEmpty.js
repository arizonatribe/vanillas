import _ from 'lodash'
import R from 'ramda'
import { isEmpty } from '../../src'

const val = ['dustin', 'robin', 'julia', 'bob']

const tests = [
  ['Vanillas "isEmpty"', () => isEmpty(val)],
  ['Lodash "isEmpty"', () => _.isEmpty(val)],
  ['Ramda "isEmpty"', () => R.isEmpty(val)]
]

export default { tests }
