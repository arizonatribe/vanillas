import _ from "lodash"
import R from "ramda"
import { entries } from "../../src"
import { hook } from "../../test/__mocks__"

const tests = [
  ["Vanillas \"entries\"", () => entries(hook)],
  ["Lodash \"toPairs\"", () => _.toPairs(hook)],
  ["Ramda \"toPairs\"", () => R.toPairs(hook)],
  ["(native) \"Object.entries( )\"", () => Object.entries(hook)]
]

export default { tests }
