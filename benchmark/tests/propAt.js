import _ from 'lodash'
import R from 'ramda'
import { propAt } from '../../src'
import { propAt as curriedPropAt } from '../../src/curried'
import val from '../../test/__mocks__'

const propAtTests = [
  ['Vanillas "propAt"', () => propAt(['pantheon', 'Jupiter', 'moons'], val)],
  ['Lodash "get"', () => _.get(val, ['pantheon', 'Jupiter', 'moons'])],
  ['Ramda "path"', () => R.path(['pantheon', 'Jupiter', 'moons'], val)],
  ['(native) "&& until you find it"', () =>
    val && val.pantheon && val.pantheon.Jupiter && val.pantheon.Jupiter.moons]
]
const curriedPropAtTests = [
  ['Vanillas (curried) "propAt"', () => curriedPropAt(['pantheon', 'Jupiter', 'moons'])(val)],
  ['Ramda (curried) "path"', () => R.path(['pantheon', 'Jupiter', 'moons'])(val)]
]

export default { propAtTests, curriedPropAtTests }
