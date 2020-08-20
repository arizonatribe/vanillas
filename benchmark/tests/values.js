import _ from "lodash"
import R from "ramda"
import { values } from "../../src"
import { hook } from "../../test/__mocks__"

const tests = [
  ["Vanillas \"values\"", () => values(hook)],
  ["Lodash \"values\"", () => _.values(hook)],
  ["Ramda \"values\"", () => R.values(hook)],
  ["(native) \"Object.values()\"", () => Object.values(hook)]
]

export default { tests }
