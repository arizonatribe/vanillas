import _ from "lodash"
import { each } from "../../src"
import { hook } from "../../test/__mocks__"

const arr = Object.values(hook)

const tests = [
  ["Vanillas \"each\"", () => each(str => str.toUpperCase(), arr)],
  ["Lodash \"each\"", () => { _.each(arr, str => str.toUpperCase()) }],
  ["(native) \"Array.forEach\"", () => arr.forEach(str => str.toUpperCase())]
]

export default { tests }
