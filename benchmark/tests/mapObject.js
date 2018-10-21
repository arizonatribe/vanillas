import _ from 'lodash'
import R from 'ramda'
import { mapObject } from '../../src'

const val = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

const tests = [
  ['Vanillas "mapObject"', () => mapObject(str => str.toUpperCase(), val)],
  ['Lodash "mapValues"', () => _.mapValues(val, str => str.toUpperCase())],
  ['Ramda "map"', () => R.map(str => str.toUpperCase(), val)],
  ['(native) "Object.keys( ).reduce()"',
    () => Object.keys(val).reduce(
      (o, key) => ({ ...o, [key]: val[key].toUpperCase() }), {}
    )
  ],
  ['(native) "Object.entries().reduce()"',
    () => Object.entries(val).reduce(
      (o, [key, v]) => ({ ...o, [key]: v.toUpperCase() }), {}
    )
  ]
]

export default { tests }
