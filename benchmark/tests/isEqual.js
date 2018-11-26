import _ from 'lodash'
import R from 'ramda'
import { isEqual } from '../../src'
import { isEqual as curriedIsEqual } from '../../src/curried'
import { pantheon, solarSystem } from '../../test/__mocks__'

const areObjectsEqualTests = [
  ['Vanillas "isEqual" (object equality)', () => isEqual(solarSystem, pantheon)],
  ['Lodash "isEqual" (object equality)', () => _.isEqual(solarSystem, pantheon)],
  ['Ramda "equals" (object equality)', () => R.equals(solarSystem, pantheon)]
]
const areArraysEqualTests = [
  ['Vanillas "isEqual" (array equality)', () => isEqual(solarSystem.Jupiter.moons, pantheon.Jupiter.moons)],
  ['Lodash "isEqual" (array equality)', () => _.isEqual(solarSystem.Jupiter.moons, pantheon.Jupiter.moons)],
  ['Ramda "equals" (array equality)', () => R.equals(solarSystem.Jupiter.moons, pantheon.Jupiter.moons)]
]
const curriedIsEqualTests = [
  ['Vanillas (curried) "isEqual"', () => curriedIsEqual(solarSystem)(pantheon)],
  ['Ramda (curried) "equals"', () => R.equals(solarSystem)(pantheon)]
]

export default { areArraysEqualTests, areObjectsEqualTests, curriedIsEqualTests }
