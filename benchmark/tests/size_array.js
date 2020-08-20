import _ from "lodash"
import R from "ramda"
import { size } from "../../src"

const val = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const tests = [
  ["Vanillas \"size\"", () => size(val)],
  ["Lodash \"size\"", () => _.size(val)],
  ["Ramda \"length\"", () => R.length(val)]
]

export default { tests }
