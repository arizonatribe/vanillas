import tape from "tape"
import isNegativeInteger from "../src/isNegativeInteger"

tape("\"isNegativeInteger\" can properly identify a negative integer value", t => {
  t.equal(isNegativeInteger(0), false, "0")
  t.equal(isNegativeInteger(1), false, "1")
  t.equal(isNegativeInteger("-1"), false, "negative one (string)")
  t.equal(
    isNegativeInteger(Math.floor(Math.random() * 1000)),
    false,
    "random positive number"
  )
  t.equal(
    isNegativeInteger(-Math.random() * 1000 - 0.01),
    false,
    "random negative number"
  )
  t.equal(
    isNegativeInteger(-Math.floor(Math.random() * 1000)),
    true,
    "random negative integer"
  )
  t.end()
})
