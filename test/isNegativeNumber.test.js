import tape from "tape"
import isNegativeNumber from "../src/isNegativeNumber"

tape("\"isNegativeNumber\" can properly identify a negative numeric value", t => {
  t.equal(isNegativeNumber(0), false, "0")
  t.equal(isNegativeNumber(1), false, "1")
  t.equal(isNegativeNumber("-1"), false, "negative one (string)")
  t.equal(
    isNegativeNumber(Math.floor(Math.random() * 1000)),
    false,
    "random positive number"
  )
  t.equal(
    isNegativeNumber(-Math.random() * 1000),
    true,
    "random negative number"
  )
  t.equal(
    isNegativeNumber(-Math.floor(Math.random() * 1000)),
    true,
    "random negative integer"
  )
  t.end()
})
