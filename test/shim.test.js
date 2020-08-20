import tape from "tape"
import shim from "../src/shim"

tape("\"shim\" proxies objects several layers deep", t => {
  const shimdow = shim({location: { pathname: "wrong one" }})
  t.equal(shimdow.location.pathname, "wrong one")
  t.doesNotThrow(() => shimdow.location.origin)
  t.end()
})
