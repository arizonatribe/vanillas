import R from 'ramda'
import { propEquals } from '../../src'
import { propEquals as curriedPropEquals } from '../../src/curried'
import val from '../../test/__mocks__'

const propEqualsTests = [
  ['Vanillas "propEquals"', () => propEquals(['pantheon', 'Mercury', 'greek'], 'Hermes', val)],
  ['Ramda "pathEq"', () => R.pathEq(['pantheon', 'Mercury', 'greek'], 'Hermes', val)],
  ['(native) "&& until you find it"', () =>
    val && val.pantheon && val.pantheon.Mercury && val.pantheon.Mercury.greek === 'Hermes']
]
const curriedPropEqualsTests = [
  ['Vanillas (curried) "propEquals"', () => curriedPropEquals(['pantheon', 'Mercury', 'greek'])('Hermes')(val)],
  ['Ramda (curried) "pathEq"', () => R.pathEq(['pantheon', 'Mercury', 'greek'])('Hermes')(val)]
]

export default { propEqualsTests, curriedPropEqualsTests }
