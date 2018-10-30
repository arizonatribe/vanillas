import _ from 'lodash'
import R from 'ramda'
import { contains } from '../../src'
import { magic } from '../../test/__mocks__'

const { sons } = magic.Weasley['Arthur and Molly']

const containsArrayTests = [
  ['Vanillas "contains"', () => contains('Ronald', sons)],
  ['Lodash "includes"', () => _.includes(sons, 'Ronald')],
  ['Ramda "contains"', () => R.contains('Ronald', sons)],
  ['(native) "Array.includes()"', () => sons.includes('Ronald')]
]

const containsStringTests = [
  ['Vanillas "contains"', () => contains('Ronald', 'Ronald McDonald')],
  ['Lodash "includes"', () => _.includes('Ronald McDonald', 'Ronald')],
  ['Ramda "contains"', () => R.contains('Ronald', 'Ronald McDonald')],
  ['(native) "Array.includes()"', () => 'Ronalid McDonald'.includes('Ronald')]
]

export default { containsArrayTests, containsStringTests }
