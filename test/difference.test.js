import tape from "tape"
import difference from "../src/difference"
import { difference as differenceCurried } from "../src/curried"

tape("\"difference\" gets the values different between two arrays", t => {
  const hook = [
    "dustin",
    "robin",
    "julia",
    "bob"
  ]
  const sphere = [
    "dustin",
    "samuel",
    "sharon",
    "queen"
  ]
  t.deepEqual(
    difference(hook, sphere),
    ["robin", "julia", "bob", "samuel", "sharon", "queen"]
  )
  t.deepEqual(
    difference([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12]),
    [1, 3, 5, 7, 9, 10, 12],
    "numbers"
  )
  t.deepEqual(
    differenceCurried(hook)(sphere),
    ["robin", "julia", "bob", "samuel", "sharon", "queen"],
    "can be curried"
  )
  t.end()
})
