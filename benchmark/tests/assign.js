/* eslint-disable prefer-object-spread */
import { assign } from "../../src"
import { hook, sphere, jurrassicPark } from "../../test/__mocks__"

const tests = [
  ["Vanillas \"assign\"", () => assign({}, hook, sphere, jurrassicPark)],
  ["(native) \"Object.assign()\"", () => Object.assign({}, hook, sphere, jurrassicPark)]
]

export default { tests }
