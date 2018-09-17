const isArrayish = require('./isArrayish')
const isObject = require('./isObject')
const isString = require('./isString')
const mapString = require('./mapString')
const mapObject = require('./mapObject')
const _map = require('./_internal/_map')

function map(fn, val) {
  if (Array.isArray(val)) return _map(fn, val)
  if (isObject(val)) return mapObject(fn, val)
  if (isString(val)) return mapString(fn, val)
  if (isArrayish(val)) return val.map(fn)
  return val
}

module.exports = map
