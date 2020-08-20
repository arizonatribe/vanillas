import _ from "lodash"
import R from "ramda"
import { invert } from "../../src"
import { hook } from "../../test/__mocks__"

const tests = [
  ["Vanillas \"invert\"", () => invert(hook)],
  ["Lodash \"invert\"", () => _.invert(hook)],
  ["Ramda \"invertObj\"", () => R.invertObj(hook)],
  ["(native) \"Object.keys( ).reduce()\"",
    () => Object.keys(hook).reduce(
      (o, key) => ({ ...o, [String(hook[key])]: key }), {}
    )
  ]
]

export default { tests }
