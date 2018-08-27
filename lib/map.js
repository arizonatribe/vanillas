const curry = require('./curry')
const isArrayish = require('./isArrayish')
const isObject = require('./isObject')
const isString = require('./isString')
const mapString = require('./mapString')
const mapObject = require('./mapObject')

function map(fn, val) {
  if (isArrayish(val)) return val.map(fn)
  if (isString(val)) return mapString(fn, val)
  if (isObject(val)) return mapObject(fn, val)
  return val
}

module.exports = curry(map)
