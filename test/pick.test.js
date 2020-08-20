import tape from "tape"
import pick from "../src/pick"

tape("\"pick\" removes specified props from an object", t => {
  t.deepEqual(pick(["lorem"], {lorem: "ipsum", dolor: "sit amet"}), {lorem: "ipsum"})
  t.deepEqual(
    pick(["lorem", "dolor"], {lorem: "ipsum", dolor: "sit amet", consectetur: "adipiscing elit"}),
    {lorem: "ipsum", dolor: "sit amet"}
  )
  t.deepEqual(pick([], {lorem: "ipsum"}), {}, "handles no props gracefully")
  t.deepEqual(
    pick(["lorem", "sit"], {lorem: "ipsum", dolor: "sit amet", consectetur: "adipiscing elit"}),
    {lorem: "ipsum"},
    "Won't pick props that aren't on the object already"
  )
  t.end()
})
