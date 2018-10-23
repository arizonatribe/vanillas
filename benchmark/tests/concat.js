import _ from 'lodash'
import R from 'ramda'
import { concat } from '../../src'
import { hook, sphere } from '../../test/__mocks__'

const hookFirstNames = Object.values(hook)
const sphereFirstNames = Object.values(sphere)

const tests = [
  ['Vanillas "concat"', () => concat(hookFirstNames, sphereFirstNames)],
  ['Lodash "concat"', () => _.concat(hookFirstNames, sphereFirstNames)],
  ['Ramda "concat"', () => R.concat(hookFirstNames, sphereFirstNames)],
  ['(native) "Array.concat()"', () => hookFirstNames.concat(sphereFirstNames)],
  ['(native) "[ ...val1, ...val2 ]"', () => [...hookFirstNames, ...sphereFirstNames]]
]

export default { tests }
