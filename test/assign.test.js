import tape from "tape"
import assign from "../src/assign"
import { hook, sphere, jurrassicPark } from "./__mocks__"

tape("\"assign\" copies one (or more) objects onto another", t => {
  const movies = {}
  assign(movies, hook, sphere, jurrassicPark)
  t.deepEqual(
    movies, {
      Hoffman: "dustin",
      Williams: "robin",
      Roberts: "julia",
      Hoskins: "bob",
      Jackson: "samuel",
      Stone: "sharon",
      Latifah: "queen",
      Neill: "sam",
      Knight: "wayne",
      Goldblum: "jeff"
    },
    "mutates the first object passed in"
  )
  t.end()
})
