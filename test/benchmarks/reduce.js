import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { reduce } from "../../src"
import { reduce as curriedReduce } from "../../src/curried"
import { hook } from "../__mocks__"

const val = Object.values(hook)
const reducer = (obj, v) => ({ ...obj, [v]: v })

const objReducer = (obj, v, k) => {
  if (!obj[v]) {
    obj[v] = []
  }
  obj[v].push(k)
  return obj
}
const objVal = { a: 1, b: 2, c: 1 }

test("objectReduce", benchmark => {
  benchmark(
    () => reduce(objReducer, {}, objVal),
    "Vanillas \"reduce (object)\""
  )
  benchmark(
    () => _.reduce(objVal, objReducer, {}),
    "Lodash \"reduce (object)\""
  )
})

test("reduce", benchmark => {
  benchmark(
    () => reduce(reducer, {}, val),
    "Vanillas \"reduce\""
  )
  benchmark(
    () => _.reduce(val, reducer, {}),
    "Lodash \"reduce\""
  )
  benchmark(
    () => R.reduce(reducer, {}, val),
    "Ramda \"reduce\""
  )
  benchmark(
    () => Fx.reduce(reducer, {}, val),
    "FxJs \"reduce\""
  )
  benchmark(
    () => val.reduce(reducer, {}),
    "(native) \"Array.reduce\""
  )
})

test("curriedReduce", benchmark => {
  benchmark(
    () => curriedReduce(reducer)({})(val),
    "Vanillas (curried) \"reduce\""
  )
  benchmark(
    () => R.reduce(reducer)({})(val),
    "Ramda (curried) \"reduce\""
  )
})
