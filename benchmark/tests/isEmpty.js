import _ from "lodash"
import R from "ramda"
import { isEmpty } from "../../src"
import { hook } from "../../test/__mocks__"

const val = Object.values(hook)

const tests = [
  ["Vanillas \"isEmpty\"", () => isEmpty(val)],
  ["Lodash \"isEmpty\"", () => _.isEmpty(val)],
  ["Ramda \"isEmpty\"", () => R.isEmpty(val)]
]

export default { tests }
