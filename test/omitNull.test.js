import tape from "tape"
import omitNull from "../src/omitNull"

tape("\"omitNull\" removes `null` or `undefined` values from an object", t => {
  t.deepEqual(
    omitNull({lorem: "ipsum", dolor: "sit", amet: null, consectetur: undefined }),
    {lorem: "ipsum", dolor: "sit" }
  )
  t.end()
})
