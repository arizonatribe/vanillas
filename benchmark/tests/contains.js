import _ from 'lodash'
import R from 'ramda'
import { contains } from '../../src'
import { magic } from '../../test/__mocks__'

const { sons } = magic.Weasley['Arthur and Molly']

const containsArrayTests = [
  ['Vanillas "contains" (array)', () => contains('Ronald', sons)],
  ['Lodash "includes" (array)', () => _.includes(sons, 'Ronald')],
  ['Ramda "contains" (array)', () => R.contains('Ronald', sons)],
  ['(native) "Array.includes()"', () => sons.includes('Ronald')]
]

const containsStringTests = [
  ['Vanillas "contains" (string)', () => contains('Ronald', 'Ronald McDonald')],
  ['Lodash "includes" (string)', () => _.includes('Ronald McDonald', 'Ronald')],
  ['Ramda "contains" (string)', () => R.contains('Ronald', 'Ronald McDonald')],
  ['(native) "String.includes()"', () => 'Ronalid McDonald'.includes('Ronald')]
]

export default { containsArrayTests, containsStringTests }
