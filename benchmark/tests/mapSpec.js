/* eslint-disable jsdoc/require-jsdoc */
import R from "ramda"
import { mapSpec, toTitleCase } from "../../src"
import { mapSpec as curriedMapSpec } from "../../src/curried"
import { hook } from "../../test/__mocks__"

const yearOfHook = { ...hook, year: "1991" }

const spec = {
  Hoffman: toTitleCase,
  Williams: toTitleCase,
  Roberts: toTitleCase,
  Hoskins: toTitleCase,
  year: Number
}

const mapSpecTests = [
  ["Vanillas \"mapSpec\"", () => mapSpec(spec, yearOfHook)],
  ["Ramda \"evolve\"", () => R.evolve(spec, yearOfHook)],
  ["(native) recursive \"Object.keys(spec).forEach()\"", () => {
    function mapDeeply(fns, val) {
      const newObj = {}
      Object.keys(fns).forEach(key => {
        if (typeof fns[key] === "function") {
          newObj[key] = fns[key](val[key])
        } else if (fns[key].constructor && fns[key].constructor.name === "Object") {
          newObj[key] = mapDeeply(fns[key])(val[key])
        } else {
          newObj[key] = val[key]
        }
      })
      return newObj
    }
    return mapDeeply(spec, yearOfHook)
  }]
]
const curriedMapSpecTests = [
  ["Vanillas (curried) \"mapSpec\"", () => curriedMapSpec(spec)(yearOfHook)],
  ["Ramda (curried) \"evolve\"", () => R.evolve(spec)(yearOfHook)]
]

export default { mapSpecTests, curriedMapSpecTests }
