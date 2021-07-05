import tape from "tape"
import values from "../src/values"
import { hook } from "./__mocks__"

tape("\"values\" retrieves all the values from an Object, returning as a list", t => {
  t.deepEqual(values(undefined), [], "handles undefined")
  t.deepEqual(values({}), [], "empty objects means empty array")
  t.deepEqual(
    values(hook),
    ["dustin", "robin", "julia", "bob"],
    "all the values from the object are placed into an array"
  )
  t.end()
})
