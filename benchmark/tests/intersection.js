import _ from 'lodash'
import R from 'ramda'
import { intersection } from '../../src'
import { intersection as curriedIntersection } from '../../src/curried'
import { composers, hook } from '../../test/__mocks__'

const movie = Object.keys(hook)
const music = Object.keys(composers)

const intersectionTests = [
  ['Vanillas "intersection"', () => intersection(movie, music)],
  ['Lodash "intersection"', () => _.intersection(movie, music)],
  ['Ramda "intersection"', () => R.intersection(movie, music)]
]

const curriedIntersectionTests = [
  ['Vanillas "intersection" (curried)', () => curriedIntersection(movie)(music)],
  ['Ramda "intersection" (curried)', () => R.intersection(movie)(music)]
]

export default { intersectionTests, curriedIntersectionTests }
