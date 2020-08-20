import _ from "lodash"
import R from "ramda"
import { map } from "../../src"
import { map as mapCurried } from "../../src/curried"
import { hook } from "../../test/__mocks__"

const arr = Object.values(hook)

const mapTests = [
  ["Vanillas \"map\"", () => map(str => str.toUpperCase(), arr)],
  ["Lodash \"map\"", () => _.map(arr, str => str.toUpperCase())],
  ["Ramda \"map\"", () => R.map(str => str.toUpperCase(), arr)],
  ["(native) \"Array.map()\"", () => arr.map(str => str.toUpperCase())]
]
const curriedMapTests = [
  ["Vanillas (curried) \"map\"", () => mapCurried(str => str.toUpperCase())(arr)],
  ["Ramda (curried) \"map\"", () => R.map(str => str.toUpperCase())(arr)]
]

export default { mapTests, curriedMapTests }
