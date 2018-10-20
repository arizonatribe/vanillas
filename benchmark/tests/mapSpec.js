import R from 'ramda'
import { mapSpec, toTitleCase } from '../../src'

const hook = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob',
  year: '1991'
}

const spec = {
  Hoffman: toTitleCase,
  Williams: toTitleCase,
  Roberts: toTitleCase,
  Hoskins: toTitleCase,
  year: Number
}

const tests = [
  ['Futilities "mapSpec"', () => mapSpec(spec, hook)],
  ['Ramda "evolve"', () => R.evolve(spec, hook)]
]

export default { tests }
