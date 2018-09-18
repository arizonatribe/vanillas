const isSameType = require('./isSameType')
const isNil = require('./isNil')
const isObject = require('./isObject')
const isSet = require('./isSet')
const isMap = require('./isMap')
const isArrayish = require('./isArrayish')

function merge(firstVal, secondVal) {
  if (!isSameType(firstVal, secondVal) || isNil(firstVal) || isNil(secondVal)) {
    return secondVal || firstVal
  }
  if (Array.isArray(firstVal)) {
    return [ ...firstVal, ...secondVal ]
  }
  if (isObject(firstVal)) {
    const newObj = { }
    for (key in firstVal) {
      newObj[key] = firstVal[key]
    }
    for (key in secondVal) {
      newObj[key] = merge(newObj[key], secondVal[key])
    }
    return newObj
  }
  if (isSet(firstVal)) {
    return new Set([ ...firstVal, ...secondVal ])
  }
  if (isMap(firstVal)) {
    const newMap = new Map()
    firstVal.forEach((val, key) => newMap.set(key, val))
    secondVal.forEach((val, key) => newMap.set(key, val))
    return newMap
  }
  if (isArrayish(firstVal)) {
    return [ ...firstVal, ...secondVal ]
  }
  return secondVal
}

module.exports = merge
