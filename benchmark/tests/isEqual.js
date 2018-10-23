import _ from 'lodash'
import R from 'ramda'
import { isEqual } from '../../src'
import { isEqual as curriedIsEqual } from '../../src/curried'
import { pantheon, solarSystem } from '../../test/__mocks__'

const isEqualTests = [
  ['Vanillas "isEqual"', () => isEqual(solarSystem, pantheon)],
  ['Lodash "isEqual"', () => _.isEqual(solarSystem, pantheon)],
  ['Ramda "equals"', () => R.equals(solarSystem, pantheon)]
]
const curriedIsEqualTests = [
  ['Vanillas (curried) "isEqual"', () => curriedIsEqual(solarSystem)(pantheon)],
  ['Ramda (curried) "equals"', () => R.equals(solarSystem)(pantheon)]
]

export default { isEqualTests, curriedIsEqualTests }
