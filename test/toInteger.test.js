import tape from "tape"
import toInteger from "../src/toInteger"

tape("\"toInteger\" will convert the a given value to an integer", t => {
  t.equal(toInteger("lorem"), 0, "values that would be NaN will be returned as 0")
  t.equal(toInteger("17.53"), 18, "rounds up to the next whole number when appropriate")
  t.equal(toInteger("17.33"), 17, "rounds down to the next whole number when appropriate")
  t.equal(toInteger(17.99), 18, "handles values that are already numeric")
  t.equal(toInteger({}), 0, "objects cannot be converted")
  t.equal(toInteger([]), 0, "arrays cannot be converted")
  t.equal(toInteger(new Date()), 0, "dates cannot be converted")
  t.equal(toInteger(new RegExp()), 0, "regexes cannot be converted")
  t.equal(toInteger(true), 1, "A value of \"true\" is one")
  t.equal(toInteger(false), 0, "A value of \"false\" is zero")
  t.end()
})
