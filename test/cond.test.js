import tape from "tape"
import cond from "../src/cond"
import { hook, sphere, counterCultureIcons, composers } from "./__mocks__"

tape("\"cond\" checks a given value against a set of conditions and applies a corresponding transformation when the first matching condition is met", t => {
  const conditionalTransforms = [
    [v => v.Hoffman === "dustin" && v.Williams === "robin", "Hook was released in 1991"],
    [v => v.Hoffman === "albert", "Strange discoveries can happen when researching obstetrics"],
    [v => /^ralph/.test(v.Williams), comp =>
      Object.keys(comp).map(key => `${comp[key]} ${key.toLowerCase()}`).join(", ")
    ]
  ]
  t.equal(
    cond(conditionalTransforms, hook),
    "Hook was released in 1991"
  )
  t.equal(
    cond(conditionalTransforms, counterCultureIcons),
    "Strange discoveries can happen when researching obstetrics"
  )
  t.equal(
    cond(conditionalTransforms, composers),
    "ralph vaughan williams, camille saintsaens, gustav mahler, richard wagner"
  )
  t.equal(cond(conditionalTransforms, sphere), undefined, "all conditions are unmet (fall-through) returns undefined")
  t.end()
})
