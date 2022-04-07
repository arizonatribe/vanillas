import tape from "tape"
import isNumber from "../src/isNumber"

tape("\"isNumber\" can properly identify a numeric value", t => {
  t.equal(isNumber(0), true, "0")
  t.equal(isNumber(1), true, "1")
  t.equal(isNumber(-1), true, "1")
  t.equal(isNumber("1"), false, "one (string)")
  t.equal(
    isNumber(Math.floor(Math.random() * 1000)),
    true,
    "random positive number"
  )
  t.equal(
    isNumber(-Math.random() * 1000),
    true,
    "random negative number"
  )
  t.equal(
    isNumber(Math.floor(Math.random() * 1000)),
    true,
    "random positive integer"
  )
  t.equal(
    isNumber(-Math.floor(Math.random() * 1000)),
    true,
    "random negative integer"
  )
  t.end()
})
