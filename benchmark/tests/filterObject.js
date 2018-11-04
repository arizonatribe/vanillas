import R from 'ramda'
import { filterObject } from '../../src'
import { hook } from '../../test/__mocks__'

const pred = str => /n$/.test(str)

const tests = [
  ['Vanillas "filterObject"', () => filterObject(str => pred(str), hook)],
  ['Ramda "filter"', () => R.filter(str => pred(str), hook)],
  ['(native) "Object.entries().filter().reduce()"', () => Object
    .entries(hook)
    .filter(([_, val]) => pred(val))
    .reduce(
      (o, [key, v]) => ({ ...o, [key]: v }), {}
    )
  ]
]

export default { tests }
