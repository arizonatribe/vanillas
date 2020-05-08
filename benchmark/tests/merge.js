import _ from 'lodash'
import R from 'ramda'
import { merge } from '../../src'
import { merge as curriedMerge } from '../../src/curried'
import { hook, sphere } from '../../test/__mocks__'

const mergeTests = [
  ['Vanillas "merge"', () => merge(hook, sphere)],
  // Three arguments supplied here is because Lodash cheats: they mutate the first object
  ['Lodash "merge"', () => _.merge({}, hook, sphere)],
  ['Ramda "merge"', () => R.mergeDeepLeft(hook, sphere)],
  ['(native) "Object.assign({}, ..)"', () => Object.assign({}, hook, sphere)]
]
const curriedMergeTests = [
  ['Vanillas (curried) "merge"', () => curriedMerge(hook)(sphere)],
  ['Ramda (curried) "merge"', () => R.merge(hook)(sphere)]
]

export default { mergeTests, curriedMergeTests }
