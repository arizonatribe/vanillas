import tape from "tape"
import isPositiveInteger from "../src/isPositiveInteger"

tape("\"isPositiveInteger\" can properly identify a positive integer value", t => {
  t.equal(isPositiveInteger(0), false, "0")
  t.equal(isPositiveInteger(-1), false, "1")
  t.equal(isPositiveInteger("1"), false, "positive one (string)")
  t.equal(
    isPositiveInteger(-Math.floor(Math.random() * 1000)),
    false,
    "random negative number"
  )
  t.equal(
    isPositiveInteger(Math.random() * 1000 + 0.01),
    false,
    "random positive number"
  )
  t.equal(
    isPositiveInteger(Math.floor(Math.random() * 1000)),
    true,
    "random positive integer"
  )
  t.end()
})
