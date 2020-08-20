import _ from "lodash"
import { size } from "../../src"
import { solarSystem } from "../../test/__mocks__"

const tests = [
  ["Vanillas \"size\"", () => size(solarSystem)],
  ["Lodash \"size\"", () => _.size(solarSystem)]
]

export default { tests }
