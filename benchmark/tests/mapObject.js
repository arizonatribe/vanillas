import _ from 'lodash'
import R from 'ramda'
import { mapObject } from '../../src'
import { hook } from '../../test/__mocks__'

const tests = [
  ['Vanillas "mapObject"', () => mapObject(str => str.toUpperCase(), hook)],
  ['Lodash "mapValues"', () => _.mapValues(hook, str => str.toUpperCase())],
  ['Ramda "map"', () => R.map(str => str.toUpperCase(), hook)],
  ['(native) "Object.keys( ).reduce()"',
    () => Object.keys(hook).reduce(
      (o, key) => ({ ...o, [key]: hook[key].toUpperCase() }), {}
    )
  ],
  ['(native) "Object.entries().reduce()"',
    () => Object.entries(hook).reduce(
      (o, [key, v]) => ({ ...o, [key]: v.toUpperCase() }), {}
    )
  ]
]

export default { tests }
