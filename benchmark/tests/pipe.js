import R from 'ramda'
import { pipe } from '../../src'

const data = 1.3
const add4 = a => a + 4
const subtract7 = a => a - 7
const divide3 = a => a / 3
const random = () => Math.random()

const tests = [
  ['Futilities "pipe"', pipe(random, add4, subtract7, divide3)],
  ['Ramda "pipe"', R.pipe(random, add4, subtract7, divide3)]
]

export default { tests, data }
