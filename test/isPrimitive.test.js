import tape from "tape"
import isPrimitive from "../src/isPrimitive"

tape("\"isPrimitive\" checks for JavaScript primitives", t => {
  t.equal(isPrimitive(true), true, "Booleans are primitive")
  t.equal(isPrimitive("no YOU'RE primitive!"), true, "Strings are primitive")
  t.equal(isPrimitive(99), true, "Numbers are primitive")
  t.equal(isPrimitive(Symbol("a")), true, "Symbols are primitive")
  t.equal(isPrimitive({}), false, "Objects are NOT primitive")
  t.equal(isPrimitive([]), false, "Arrays are NOT primitive")
  t.equal(isPrimitive(new Date()), false, "Date are NOT considered primitive in the case we might usually mean")
  t.equal(isPrimitive(new RegExp()), false, "RegExes are NOT considered primitive in the case we might usually mean")
  t.equal(isPrimitive(() => 42), false, "Functions are NOT primitive")
  t.end()
})
