import _ from 'lodash'
import R from 'ramda'
import { clone } from '../../src'

const data = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

const tests = [
  ['Futilities "clone"', val => clone(val)],
  ['Lodash "clone"', val => _.clone(val)],
  ['Ramda "clone"', val => R.clone(val)],
  ['(native) "clone by destructuring"', val => {
    const newObj = { ...val }
    return newObj
  }],
  ['(native) "Object.assign({}, ..)"', val => Object.assign({}, val)]
]

export default { tests, data }
