import _ from 'lodash'
import R from 'ramda'
import { flatten } from '../../src'
import { solarSystem } from '../../test/__mocks__'

const arr = Object.values(solarSystem).map(p => p.moons).filter(Boolean)

const tests = [
  ['Vanillas "flatten"', () => flatten(arr)],
  ['Lodash "flatten"', () => _.flatten(arr)],
  ['Ramda "flatten"', () => R.flatten(arr)]
]

export default { tests }
