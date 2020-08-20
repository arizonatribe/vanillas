import _ from "lodash"
import R from "ramda"
import { size } from "../../src"

const val = "lorem ipsum dolor sit amet"

const tests = [
  ["Vanillas \"size\"", () => size(val)],
  ["Lodash \"size\"", () => _.size(val)],
  ["Ramda \"length\"", () => R.length(val)]
]

export default { tests }
