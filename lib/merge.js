const isNil = require('./isNil')
const isString = require('./isString')
const isPrimitive = require('./isPrimitive')
const concat = require('./concat')

function merge(firstVal, secondVal) {
  if (isNil(firstVal) || isNil(secondVal)) {
    return secondVal || firstVal
  }
  if (isPrimitive(secondVal)) {
    return secondVal
  }
  if (
    !isNil(firstVal.length) &&
    !isNil(secondVal.length) &&
    !isString(firstVal) &&
    !isString(secondVal)
  ) {
    return concat(firstVal, secondVal)
  }
  const newObj = { }
  for (key in firstVal) {
    newObj[key] = firstVal[key]
  }
  for (key in secondVal) {
    newObj[key] = merge(newObj[key], secondVal[key])
  }
  return newObj
}

module.exports = merge
