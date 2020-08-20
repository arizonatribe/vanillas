import _ from "lodash"
import { isObject } from "../../src"
import { hook } from "../../test/__mocks__"

const tests = [
  ["Vanillas \"isObject\"", () => isObject(hook)],
  ["Lodash \"isPlainObject\"", () => _.isPlainObject(hook)]
]

export default { tests }
