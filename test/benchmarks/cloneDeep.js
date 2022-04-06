import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { clone } from "../../src"
import { hook, sphere, jurrassicPark } from "../__mocks__"

const val = { hook, sphere, jurrassicPark }

test("cloneDeep", benchmark => {
  benchmark(
    () => clone(val),
    "Vanillas \"clone\""
  )
  benchmark(
    () => _.cloneDeep(val),
    "Lodash \"cloneDeep\""
  )
  benchmark(
    () => R.clone(val),
    "Ramda \"clone\""
  )
  benchmark(
    () => Fx.clone(val),
    "FxJs \"clone\""
  )
  benchmark(
    () => {
      const newObj = {
        ...val,
        hook: { ...val.hook },
        sphere: { ...val.sphere },
        jurrassicPark: { ...val.jurrassicPark }
      }
      return newObj
    },
    "(native) \"clone by destructuring\""
  )
})
