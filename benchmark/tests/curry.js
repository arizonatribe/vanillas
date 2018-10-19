import R from 'ramda'
import _ from 'lodash'
import { curry } from '../../src'

function calculateIncome(hrs, wks, rate) {
  return hrs * wks * rate
}

const tests = [
  // ['Futilities "curry"', () => curry(calculateIncome)],
  // ['Lodash "curry"', () => _.curry(calculateIncome)],
  // ['Ramda "curry"', () => R.curry(calculateIncome)],
  ['Executing Futilities curried function', () => curry(calculateIncome)(40)(52)(1.5)],
  ['Executing Lodash curried function', () => _.curry(calculateIncome)(40)(52)(1.5)],
  ['Executing Ramda curried function', () => R.curry(calculateIncome)(40)(52)(1.5)]
]

export default { tests }
