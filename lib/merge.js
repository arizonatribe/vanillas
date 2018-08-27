const curry = require('./curry')
const isSameType = require('./isSameType')

function merge(firstVal, secondVal) {
  if (!isSameType(firstVal, secondVal) || isNil(firstVal) || isNil(secondVal)) {
    return secondVal || firstVal
  }
  if (isObject(firstVal)) {
    return {
      ...firstVal,
      ..(Object.keys(secondVal).reduce((newObj, key) => ({
          ...newObj,
          [key]: merge(firstVal[key], secondVal[key])
        }), {})
      )
    }
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

module.exports = curry(merge)
