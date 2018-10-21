import _ from 'lodash'
import R from 'ramda'
import { findIndex } from '../../src'

const arr = ['dustin', 'robin', 'julia', 'bob']
const predicate = val => /uli/.test(val)

const tests = [
  ['Vanillas "findIndex"', () => findIndex(predicate, arr)],
  ['Lodash "findIndex"', () => _.findIndex(arr, predicate)],
  ['Ramda "findIndex"', () => R.findIndex(predicate, arr)],
  ['(native) "Array.findIndex()"', () => arr.findIndex(predicate)]
]

export default { tests }
