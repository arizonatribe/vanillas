import tape from "tape"
import omitUndefined from "../src/omitUndefined"

tape("\"omitUndefined\" removes `undefined` values from an object", t => {
  t.deepEqual(
    omitUndefined({lorem: "ipsum", dolor: "sit", amet: null, consectetur: undefined }),
    {lorem: "ipsum", dolor: "sit", amet: null }
  )
  t.end()
})
