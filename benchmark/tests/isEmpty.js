import _ from 'lodash'
import R from 'ramda'
import { isEmpty } from '../../src'

const data = ['dustin', 'robin', 'julia', 'bob']

const tests = [
  ['Futilities "isEmpty"', isEmpty],
  ['Lodash "isEmpty"', _.isEmpty],
  ['Ramda "isEmpty"', R.isEmpty]
]

export default { tests, data }
