import _ from "lodash"
import R from "ramda"
import { any } from "../../src"

const arr = ["dustin", "robin", "julia", "bob"]
const predicate = val => /uli/.test(val)

const tests = [
  ["Vanillas \"any\"", () => any(predicate, arr)],
  ["Lodash \"some\"", () => _.some(arr, predicate)],
  ["Ramda \"any\"", () => R.any(predicate, arr)],
  ["(native) \"Array.some()\"", () => arr.some(predicate)]
]

export default { tests }
