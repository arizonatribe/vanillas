import _ from "lodash"
import R from "ramda"
import { filter } from "../../src"
import { filter as filterCurried } from "../../src/curried"
import { hook } from "../../test/__mocks__"

const pred = str => /n$/.test(str)
const arr = Object.values(hook)

const filterTests = [
  ["Vanillas \"filter\"", () => filter(str => pred(str), arr)],
  ["Lodash \"filter\"", () => _.filter(arr, str => pred(str))],
  ["Ramda \"filter\"", () => R.filter(str => pred(str), arr)],
  ["(native) \"Array.filter()\"", () => arr.filter(str => pred(str))]
]
const curriedFilterTests = [
  ["Vanillas (curried) \"filter\"", () => filterCurried(str => pred(str))(arr)],
  ["Ramda (curried) \"filter\"", () => R.filter(str => pred(str))(arr)]
]

export default { filterTests, curriedFilterTests }
