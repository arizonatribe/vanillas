const isString = require('./isString')
const isSet = require('./isSet')
const isMap = require('./isMap')
const isArrayish = require('./isArrayish')
const isObject = require('./isObject')

function size(val) {
  if (isString(val) || Array.isArray(val) || isArrayish(val)) {
    return val.length
  }
  if (isObject(val)) {
    return Object.keys(val).length
  }
  if (isSet(val) || isMap(val)) {
    return val.size
  }
  return undefined
}

module.exports = size
