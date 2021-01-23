import _ from "lodash"
import { each } from "../../src"
import { hook } from "../../test/__mocks__"

const arr = Object.values(hook)

const tests = [
  ["(native) \"for..of\"", () => {
    const list = []
    for (const str of arr) {
      list.push(str.toUpperCase())
    }
    return list
  }],
  ["(native) \"for\"", () => {
    const list = []
    for (let i = 0, len = arr.length; i < len; i++) {
      list.push(arr[i].toUpperCase())
    }
    return list
  }],
  ["(native) \"while\"", () => {
    const list = []
    const len = arr.length
    let i = 0
    while (i < len) {
      list.push(arr[i].toUpperCase())
      i++
    }
    return list
  }],
  ["Vanillas \"each\"", () => {
    const list = []
    each(str => list.push(str.toUpperCase()), arr)
    return list
  }, arr],
  ["Lodash \"each\"", () => {
    const list = []
    _.each(arr, str => list.push(str.toUpperCase()))
    return list
  }],
  ["(native) \"Array.forEach\"", () => {
    const list = []
    arr.forEach(str => list.push(str.toUpperCase()))
    return list
  }]
]

export default { tests }
