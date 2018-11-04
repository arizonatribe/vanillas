import _ from 'lodash'
import R from 'ramda'
import { difference } from '../../src'
import { difference as curriedDifference } from '../../src/curried'
import { composers, hook } from '../../test/__mocks__'

const movie = Object.keys(hook)
const music = Object.keys(composers)

const differenceTests = [
  ['Vanillas "difference"', () => difference(movie, music)],
  ['Lodash "difference"', () => _.difference(movie, music)],
  ['Ramda "difference"', () => R.difference(movie, music)]
]

const curriedDifferenceTests = [
  ['Vanillas "difference" (curried)', () => curriedDifference(movie)(music)],
  ['Ramda "difference" (curried)', () => R.difference(movie)(music)]
]

export default { differenceTests, curriedDifferenceTests }
