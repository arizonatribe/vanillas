import _ from 'lodash'
import R from 'ramda'
import { pick } from '../../src'
import { pick as curriedPick } from '../../src/curried'
import { solarSystem } from '../../test/__mocks__'

const pickTests = [
  ['Vanillas "pick"', () => pick(['Mercury', 'Venus', 'Mars'], solarSystem)],
  ['Lodash "pick"', () => _.pick(solarSystem, ['Mercury', 'Venus', 'Mars'])],
  ['Ramda "pick"', () => R.pick(['Mercury', 'Venus', 'Mars'], solarSystem)],
  ['(native) "Array.prototype.reduce"', () =>
    ['Mercury', 'Venus', 'Mars'].reduce((newObj, key) => ({ ...newObj, [key]: solarSystem[key] }), {})
  ]
]
const curriedPickTests = [
  ['Vanillas (curried) "pick"', () => curriedPick(['Mercury', 'Venus', 'Mars'])(solarSystem)],
  ['Ramda (curried) "pick"', () => R.pick(['Mercury', 'Venus', 'Mars'])(solarSystem)]
]

export default { pickTests, curriedPickTests }
