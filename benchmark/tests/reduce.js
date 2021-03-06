import _ from "lodash"
import R from "ramda"
import { reduce } from "../../src"
import { reduce as curriedReduce } from "../../src/curried"
import { hook } from "../../test/__mocks__"

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

const objectReduceTests = [
  ["Vanillas \"reduce (object)\"", () => reduce(objReducer, {}, objVal)],
  ["Lodash \"reduce (object)\"", () => _.reduce(objVal, objReducer, {})]
]
const reduceTests = [
  ["Vanillas \"reduce\"", () => reduce(reducer, {}, val)],
  ["Lodash \"reduce\"", () => _.reduce(val, reducer, {})],
  ["Ramda \"reduce\"", () => R.reduce(reducer, {}, val)],
  ["(native) \"Array.reduce\"", () => val.reduce(reducer, {})]
]
const curriedReduceTests = [
  ["Vanillas (curried) \"reduce\"", () => curriedReduce(reducer)({})(val)],
  ["Ramda (curried) \"reduce\"", () => R.reduce(reducer)({})(val)]
]

export default { reduceTests, objectReduceTests, curriedReduceTests }
