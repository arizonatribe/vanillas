import R from 'ramda'
import { mapSpec, toTitleCase } from '../../src'
import { mapSpec as curriedMapSpec } from '../../src/curried'
import { hook } from '../../test/__mocks__'

const yearOfHook = { ...hook, year: '1991' }

const spec = {
  Hoffman: toTitleCase,
  Williams: toTitleCase,
  Roberts: toTitleCase,
  Hoskins: toTitleCase,
  year: Number
}

const mapSpecTests = [
  ['Vanillas "mapSpec"', () => mapSpec(spec, yearOfHook)],
  ['Ramda "evolve"', () => R.evolve(spec, yearOfHook)]
]
const curriedMapSpecTests = [
  ['Vanillas (curried) "mapSpec"', () => curriedMapSpec(spec)(yearOfHook)],
  ['Ramda (curried) "evolve"', () => R.evolve(spec)(yearOfHook)]
]

export default { mapSpecTests, curriedMapSpecTests }
