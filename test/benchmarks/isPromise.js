import { test } from "reality-check"
import ispromise from "is-promise"
import { isPromise } from "../../src"

const val = {
  catch() { },
  then() { },
  finally() { }
}

test("isPromise", benchmark => {
  benchmark(
    () => isPromise(val),
    "Vanillas \"isPromise\""
  )
  benchmark(
    () => ispromise(val),
    "is-promise \"isPromise\""
  )
})
