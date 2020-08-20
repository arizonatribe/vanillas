import tape from "tape"
import hasNestedProp from "../src/hasNestedProp"
import { hasNestedProp as hasCurried } from "../src/curried"

tape("\"hasNestedProp\" inspects own props on a given object for a specified key", t => {
  t.equal(
    hasNestedProp("orange", {red: "blue", orange: "purple"}),
    true,
    "Handles a single (root-level) key easily"
  )

  const latin = {lorem: { ipsum: { dolor: { sit: "amet" } } } }

  t.equal(
    hasNestedProp("lorem.ipsum.dolor.sit", latin),
    true,
    "nested prop path that is dot-separated"
  )
  t.equal(
    hasNestedProp(["lorem", "ipsum", "dolor", "sit"], latin),
    true,
    "nested prop path that is an array of path \"pieces\""
  )
  t.equal(hasCurried(["lorem", "ipsum", "dolor", "sit"])(latin), true, "can be curried")
  t.end()
})
