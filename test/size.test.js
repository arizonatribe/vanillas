import tape from "tape"
import size from "../src/size"

tape("\"size\" checks the length of strings, objects, and arrays", t => {
  t.equal(size("lorem ipsum dolor sit amet"), 26, "measures the size of strings")
  t.equal(size(["lorem", "ipsum"]), 2, "measures the size of arrays")
  t.equal(size(new Set(["lorem", "lorem", "ipsum", "dolor", "sit", "amet"])), 5, "measures the size of sets")
  const mappy = new Map()
  mappy.set("lorem", "ipsum dolor sit amet")
  mappy.set("consectetur", "adipiscing elit")
  t.equal(size(mappy), 2, "measures the size of maps")
  t.equal(
    size({lorem: "ipsum", dolor: "sit amet", consectetur: "adipiscing elit"}),
    3,
    "measures the number of props on an object"
  )
  t.end()
})
