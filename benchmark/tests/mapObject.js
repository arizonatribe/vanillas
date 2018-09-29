import _ from 'lodash'
import R from 'ramda'
import { mapObject } from '../../src'

const data = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

const tests = [
  ['Futilities "mapObject"', val => mapObject(str => str.toUpperCase(), val)],
  ['Lodash "mapValues"', val => _.mapValues(val, str => str.toUpperCase())],
  ['Ramda "map"', val => R.map(str => str.toUpperCase(), val)],
  ['(native) "Object.keys( ).reduce()"',
    val => Object.keys(val).reduce(
      (o, key) => ({ ...o, [key]: val[key].toUpperCase() }), {}
    )
  ],
  ['(native) "Object.entries().reduce()"',
    val => Object.entries(val).reduce(
      (o, [key, v]) => ({ ...o, [key]: v.toUpperCase() }), {}
    )
  ]
]

export default { tests, data }
