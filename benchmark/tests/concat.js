import _ from 'lodash'
import R from 'ramda'
import { concat } from '../../src'

const hook = [
  'dustin',
  'robin',
  'julia',
  'bob'
]
const sphere = [
  'dustin',
  'samuel',
  'sharon',
  'queen'
]

const tests = [
  ['Futilities "concat"', () => concat(hook, sphere)],
  ['Lodash "concat"', () => _.concat(hook, sphere)],
  ['Ramda "concat"', () => R.concat(hook, sphere)],
  ['(native) "Array.concat()"', () => hook.concat(sphere)],
  ['(native) "[ ...val1, ...val2 ]"', () => [...hook, ...sphere]]
]

export default { tests }
