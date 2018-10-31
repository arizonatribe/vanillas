import _ from 'lodash'
import R from 'ramda'
import { omit } from '../../src'
import { omit as curriedOmit } from '../../src/curried'
import { pantheon } from '../../test/__mocks__'

const omitTests = [
  ['Vanillas "omit"', () => omit(['Jupiter', 'Saturn', 'Neptune'], pantheon)],
  ['Lodash "omit"', () => _.omit(pantheon, ['Jupiter', 'Saturn', 'Neptune'])],
  ['Ramda "omit"', () => R.omit(['Jupiter', 'Saturn', 'Neptune'], pantheon)],
  ['(native) "Object.keys().filter().reduce()"', () =>
    Object.keys(pantheon).reduce((newObj, key) => ({ ...newObj, [key]: pantheon[key] }), {})
  ]
]
const curriedOmitTests = [
  ['Vanillas (curried) "omit"', () => curriedOmit(['Jupiter', 'Saturn', 'Neptune'])(pantheon)],
  ['Ramda (curried) "omit"', () => R.omit(['Jupiter', 'Saturn', 'Neptune'])(pantheon)]
]

export default { omitTests, curriedOmitTests }
