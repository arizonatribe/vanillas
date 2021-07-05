/* eslint-disable prefer-object-spread */
import _ from "lodash"
import R from "ramda"
import { clone } from "../../src"
import { hook } from "../../test/__mocks__"

const tests = [
  ["Vanillas \"clone\"", () => clone(hook)],
  ["Lodash \"clone\"", () => _.clone(hook)],
  ["Ramda \"clone\"", () => R.clone(hook)],
  ["(native) \"clone by destructuring\"", () => {
    const newObj = { ...hook }
    return newObj
  }],
  ["(native) \"Object.assign({}, ..)\"", () => Object.assign({}, hook)]
]

export default { tests }
