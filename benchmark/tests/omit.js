import _ from "lodash"
import R from "ramda"
import { omit } from "../../src"
import { omit as curriedOmit } from "../../src/curried"
import { pantheon } from "../../test/__mocks__"

const exclude = ["Jupiter", "Saturn", "Neptune"]

const omitTests = [
  ["Vanillas \"omit\"", () => omit(exclude, pantheon)],
  ["Lodash \"omit\"", () => _.omit(pantheon, exclude)],
  ["Ramda \"omit\"", () => R.omit(exclude, pantheon)],
  ["(native) \"Object.keys().filter().reduce()\"", () => Object
    .keys(pantheon)
    .filter(key => !exclude.includes(key))
    .reduce((newObj, key) => ({ ...newObj, [key]: pantheon[key] }), {})
  ]
]
const curriedOmitTests = [
  ["Vanillas (curried) \"omit\"", () => curriedOmit(["Jupiter", "Saturn", "Neptune"])(pantheon)],
  ["Ramda (curried) \"omit\"", () => R.omit(["Jupiter", "Saturn", "Neptune"])(pantheon)]
]

export default { omitTests, curriedOmitTests }
