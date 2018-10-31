import _ from 'lodash'
import R from 'ramda'
import { uniq } from '../../src'

const val = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

const tests = [
  ['Vanillas "uniq"', () => uniq(val)],
  ['Lodash "uniq"', () => _.uniq(val)],
  ['Ramda "uniq"', () => R.uniq(val)]
]

export default { tests }
