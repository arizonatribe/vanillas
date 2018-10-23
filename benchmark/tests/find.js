import _ from 'lodash'
import R from 'ramda'
import { find } from '../../src'
import { hook } from '../../test/__mocks__'

const arr = Object.values(hook)
const predicate = val => /uli/.test(val)

const tests = [
  ['Vanillas "find"', () => find(predicate, arr)],
  ['Lodash "find"', () => _.find(arr, predicate)],
  ['Ramda "find"', () => R.find(predicate, arr)],
  ['(native) "Array.find()"', () => arr.find(predicate)]
]

export default { tests }
