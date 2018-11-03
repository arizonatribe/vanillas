import R from 'ramda'
import { compose as reduxCompose } from 'redux'
import { compose } from '../../src'

const add4 = a => a + 4
const subtract7 = a => a - 7
const divide3 = a => a / 3
const randomNumber = Math.random()
const random = () => randomNumber

const tests = [
  ['Vanillas "compose"', () => compose(divide3, subtract7, add4, random)()],
  ['Redux "compose"', () => reduxCompose(divide3, subtract7, add4, random)()],
  ['Ramda "compose"', () => R.compose(divide3, subtract7, add4, random)()]
]

export default { tests }
