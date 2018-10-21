import _ from 'lodash'
import R from 'ramda'
import { isEqual } from '../../src'

const solarSystem = {
  Saturn: {
    greek: 'Kronos',
    moons: ['Titan', 'Enceladus', 'Mimas']
  },
  Jupiter: {
    greek: 'Zeuss',
    moons: ['Europa', 'Ganymede', 'Lo']
  },
  Sun: 'Apollo',
  Neptune: {
    greek: 'Poseidon',
    moons: ['Triton']
  },
  Venus: 'Aphrodite',
  Mars: {
    greek: 'Aries',
    moons: ['Phobos', 'Deimos']
  },
  Mercury: 'Hermes'
}

const pantheon = {
  Sun: 'Apollo',
  Mercury: 'Hermes',
  Venus: 'Aphrodite',
  Mars: {
    greek: 'Aries',
    moons: ['Phobos', 'Deimos']
  },
  Jupiter: {
    greek: 'Zeuss',
    moons: ['Europa', 'Ganymede', 'Lo']
  },
  Saturn: {
    greek: 'Kronos',
    moons: ['Titan', 'Enceladus', 'Mimas']
  },
  Neptune: {
    greek: 'Poseidon',
    moons: ['Triton']
  }
}

const tests = [
  ['Vanillas "isEqual"', () => isEqual(solarSystem, pantheon)],
  ['Lodash "isEqual"', () => _.isEqual(solarSystem, pantheon)],
  ['Ramda "equals"', () => R.equals(solarSystem, pantheon)]
]

export default { tests }
