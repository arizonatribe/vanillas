import R from 'ramda'
import _ from 'lodash'
import { curry } from '../../src'
import { spices } from '../../test/__mocks__'

function fullName(first, last) {
  return `${first} ${last}`
}
function calculateIncome(hrs, wks, rate) {
  return hrs * wks * rate
}
function combinedVolumes(width, height, depth, count) {
  return width * height * depth * count
}
function whoAreThey(g1, g2, g3, g4, g5) {
  return [g1, g2, g3, g4, g5].every(girl => spices[girl])
    ? 'The Spice Girls'
    : 'who knows?'
}


const curryTests = [
  ['Vanillas "curry"', () => typeof curry(calculateIncome)],
  ['Lodash "curry"', () => typeof _.curry(calculateIncome)],
  ['Ramda "curry"', () => typeof R.curry(calculateIncome)]
]
const twoArgCurryTests = [
  ['Executing Vanillas 2-arg curried function', () => curry(fullName)('George')('Washington')],
  ['Executing Lodash 2-arg curried function', () => _.curry(fullName)('George')('Washington')],
  ['Executing Ramda 2-arg curried function', () => R.curry(fullName)('George')('Washington')]
]
const threeArgCurryTests = [
  ['Executing Vanillas 3-arg curried function', () => curry(calculateIncome)(40)(52)(1.5)],
  ['Executing Lodash 3-arg curried function', () => _.curry(calculateIncome)(40)(52)(1.5)],
  ['Executing Ramda 3-arg curried function', () => R.curry(calculateIncome)(40)(52)(1.5)]
]
const fourArgCurryTests = [
  ['Executing Vanillas 4-arg curried function', () => curry(combinedVolumes)(12)(10)(17)(4)],
  ['Executing Lodash 4-arg curried function', () => _.curry(combinedVolumes)(12)(10)(17)(4)],
  ['Executing Ramda 4-arg curried function', () => R.curry(combinedVolumes)(12)(10)(17)(4)]
]
const manyArgCurryTests = [
  ['Executing Vanillas 5+arg curried function', () => curry(whoAreThey)('Brown')('Chisholm')('Bunton')('Halliwell')('Beckham')],
  ['Executing Lodash 5+arg curried function', () => _.curry(whoAreThey)('Brown')('Chisholm')('Bunton')('Halliwell')('Beckham')],
  ['Executing Ramda 5+arg curried function', () => R.curry(whoAreThey)('Brown')('Chisholm')('Bunton')('Halliwell')('Beckham')]
]

export default {
  curryTests,
  twoArgCurryTests,
  threeArgCurryTests,
  fourArgCurryTests,
  manyArgCurryTests
}
