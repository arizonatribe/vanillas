/* eslint-disable jsdoc/require-jsdoc */
import { test } from "reality-check"
import R from "ramda"
import _ from "lodash"
import * as Fx from "fxjs"
import { curry } from "../../src"
import { spices } from "../__mocks__"

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
    ? "The Spice Girls"
    : "who knows?"
}

test("curry", benchmark => {
  benchmark(
    () => {
      const fn = curry(calculateIncome)
      return fn(40, 52, 15)
    },
    "Vanillas \"curry\""
  )
  benchmark(
    () => {
      const fn = _.curry(calculateIncome)
      return fn(40, 52, 15)
    },
    "Lodash \"curry\""
  )
  benchmark(
    () => {
      const fn = R.curry(calculateIncome)
      return fn(40, 52, 15)
    },
    "Ramda \"curry\""
  )
  benchmark(
    () => {
      const fn = Fx.curry(calculateIncome)
      return fn(40, 52, 15)
    },
    "FxJs \"curry\""
  )
})

test("twoArgCurryTests", benchmark => {
  benchmark(
    () => curry(fullName)("George")("Washington"),
    "Executing Vanillas 2-arg curried function"
  )
  benchmark(
    () => _.curry(fullName)("George")("Washington"),
    "Executing Lodash 2-arg curried function"
  )
  benchmark(
    () => R.curry(fullName)("George")("Washington"),
    "Executing Ramda 2-arg curried function"
  )
  benchmark(
    () => Fx.curry(fullName)("George")("Washington"),
    "Executing FxJs 2-arg curried function"
  )
})

test("threeArgCurryTests", benchmark => {
  benchmark(
    () => curry(calculateIncome)(40)(52)(1.5),
    "Executing Vanillas 3-arg curried function"
  )
  benchmark(
    () => _.curry(calculateIncome)(40)(52)(1.5),
    "Executing Lodash 3-arg curried function"
  )
  benchmark(
    () => R.curry(calculateIncome)(40)(52)(1.5),
    "Executing Ramda 3-arg curried function"
  )
})

test("fourArgCurryTests", benchmark => {
  benchmark(
    () => curry(combinedVolumes)(12)(10)(17)(4),
    "Executing Vanillas 4-arg curried function"
  )
  benchmark(
    () => _.curry(combinedVolumes)(12)(10)(17)(4),
    "Executing Lodash 4-arg curried function"
  )
  benchmark(
    () => R.curry(combinedVolumes)(12)(10)(17)(4),
    "Executing Ramda 4-arg curried function"
  )
})

test("manyArgCurryTests", benchmark => {
  benchmark(
    () => curry(whoAreThey)("Brown")("Chisholm")("Bunton")("Halliwell")("Beckham"),
    "Executing Vanillas 5+arg curried function"
  )
  benchmark(
    () => _.curry(whoAreThey)("Brown")("Chisholm")("Bunton")("Halliwell")("Beckham"),
    "Executing Lodash 5+arg curried function"
  )
  benchmark(
    () => R.curry(whoAreThey)("Brown")("Chisholm")("Bunton")("Halliwell")("Beckham"),
    "Executing Ramda 5+arg curried function"
  )
})
