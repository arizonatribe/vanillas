import _ from 'lodash'
import R from 'ramda'
import { uniq } from '../../src'

const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
const strs = ['abc', 'abcdefg', 'abc', 'def', 'defg', 'def', 'ghi', 'klm', 'nop', 'eee', 'eee', 'nop']

const uniqNumbersTests = [
  ['Vanillas "uniq" (list of nums)', () => uniq(nums)],
  ['Lodash "uniq" (list of nums)', () => _.uniq(nums)],
  ['Ramda "uniq" (list of nums)', () => R.uniq(nums)]
]

const uniqStringsTests = [
  ['Vanillas "uniq" (list of strings)', () => uniq(strs)],
  ['Lodash "uniq" (list of strings)', () => _.uniq(strs)],
  ['Ramda "uniq" (list of strings)', () => R.uniq(strs)]
]

export default { uniqNumbersTests, uniqStringsTests }
