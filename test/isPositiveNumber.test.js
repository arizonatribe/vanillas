import tape from "tape"
import isPositiveNumber from "../src/isPositiveNumber"

tape("\"isPositiveNumber\" can properly identify a positive numeric value", t => {
  t.equal(isPositiveNumber(0), false, "0")
  t.equal(isPositiveNumber(-1), false, "1")
  t.equal(isPositiveNumber("1"), false, "positive one (string)")
  t.equal(
    isPositiveNumber(-Math.floor(Math.random() * 1000)),
    false,
    "random negative number"
  )
  t.equal(
    isPositiveNumber(Math.random() * 1000),
    true,
    "random positive number"
  )
  t.equal(
    isPositiveNumber(Math.floor(Math.random() * 1000)),
    true,
    "random positive integer"
  )
  t.end()
})
