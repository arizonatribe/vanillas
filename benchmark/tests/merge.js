import _ from 'lodash'
import R from 'ramda'
import { merge } from '../../src'

const hook = {
  Hoffman: 'dustin',
  Williams: 'robin',
  Roberts: 'julia',
  Hoskins: 'bob'
}
const sphere = {
  Hoffman: 'dustin',
  Jackson: 'samuel',
  Stone: 'sharon',
  Latifah: 'queen'
}

const tests = [
  ['Futilities "merge"', () => merge(hook, sphere)],
  // Three arguments supplied here is because Lodash cheats: they mutate the first object
  ['Lodash "merge"', () => _.merge({}, hook, sphere)],
  ['Ramda "merge"', () => R.merge(hook, sphere)],
  ['(native) "Object.assign({}, ..)"', () => Object.assign({}, hook, sphere)]
]

export default { tests }
