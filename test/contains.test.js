import tape from "tape"
import contains from "../src/contains"
import { contains as containsCurried } from "../src/curried"

tape("\"contains\" checks if a given value is present in a String OR an Array", t => {
  const hook = [
    "dustin",
    "robin",
    "julia",
    "bob"
  ]
  t.equal(
    contains("samuel", hook),
    false,
    "a string is NOT present in an array"
  )
  t.equal(
    contains("bob", hook),
    true,
    "a string is present in an array"
  )
  t.equal(
    contains("samuel", "my name is samuel l. jackson"),
    true,
    "a string is present in another string"
  )
  t.equal(
    containsCurried("dustin")(hook),
    true,
    "can be curried"
  )
  t.end()
})
