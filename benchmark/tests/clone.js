import _ from 'lodash'
import R from 'ramda'
import { clone } from '../../src'

const val = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}

const tests = [
  ['Vanillas "clone"', () => clone(val)],
  ['Lodash "clone"', () => _.clone(val)],
  ['Ramda "clone"', () => R.clone(val)],
  ['(native) "clone by destructuring"', () => {
    const newObj = { ...val }
    return newObj
  }],
  ['(native) "Object.assign({}, ..)"', () => Object.assign({}, val)]
]

export default { tests }
