import { test } from "reality-check"
import _ from "lodash"
import * as Fx from "fxjs"
import { each } from "../../src"
import { hook } from "../__mocks__"

const arr = Object.values(hook)

test("each", benchmark => {
  benchmark(
    () => {
      const list = []
      for (const str of arr) {
        list.push(str.toUpperCase())
      }
      return list
    },
    "(native) \"for..of\""
  )
  benchmark(
    () => {
      const list = []
      for (let i = 0, len = arr.length; i < len; i++) {
        list.push(arr[i].toUpperCase())
      }
      return list
    },
    "(native) \"for\""
  )
  benchmark(
    () => {
      const list = []
      const len = arr.length
      let i = 0
      while (i < len) {
        list.push(arr[i].toUpperCase())
        i++
      }
      return list
    },
    "(native) \"while\""
  )
  benchmark(
    () => {
      const list = []
      each(str => list.push(str.toUpperCase()), arr)
      return list
    },
    "Vanillas \"each\""
  )
  benchmark(
    () => {
      const list = []
      Fx.each(str => list.push(str.toUpperCase()), arr)
      return list
    },
    "FxJs \"each\""
  )
  benchmark(
    () => {
      const list = []
      _.each(arr, str => list.push(str.toUpperCase()))
      return list
    },
    "Lodash \"each\""
  )
  benchmark(
    () => {
      const list = []
      arr.forEach(str => list.push(str.toUpperCase()))
      return list
    },
    "(native) \"Array.forEach\""
  )
})
