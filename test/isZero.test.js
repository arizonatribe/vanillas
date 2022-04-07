import tape from "tape"
import isZero from "../src/isZero"

tape("\"isZero\" can properly identify numeric zero or a numeric string which is zero", t => {
  t.equal(isZero(0), true, "0 (of type 'number')")
  t.equal(isZero("0"), true, "'0' (of type 'string')")
  t.equal(isZero("0.0"), true, "'0.0' (of type 'string')")
  t.equal(isZero("00.00"), true, "'00.00' (of type 'string')")
  t.equal(isZero("0.0.0"), false, "'0.0.0' (semver like)")
  t.equal(isZero(""), false, "'' (blank string)")
  t.equal(isZero(" "), false, "' ' (blank string)")
  t.equal(isZero(null), false, "null")
  t.equal(isZero(undefined), false, "undefined")
  t.end()
})
