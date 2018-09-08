const isSameType = require('./isSameType')

function merge(firstVal, secondVal) {
  if (!isSameType(firstVal, secondVal) || isNil(firstVal) || isNil(secondVal)) {
    return secondVal || firstVal
  }
  if (Array.isArray(firstVal)) {
    return [ ...firstVal, ...secondVal ]
  }
  if (isObject(firstVal)) {
    const newObj = { ...firstVal }
    for (key in secondVal) {
      newObj[key] = merge(firstVal[key], secondVal[key])
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
