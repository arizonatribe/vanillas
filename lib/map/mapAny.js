const curry = require('../curry')
const isArrayish = require('../is/isArrayish')
const isObject = require('../is/isObject')
const isString = require('../is/isString')
const mapString = require('./mapString')
const mapObject = require('./mapObject')

function mapAny(fn, val) {
  if (isArrayish(val)) return val.map(fn)
  if (isString(val)) return mapString(fn, val)
  if (isObject(val)) return mapObject(fn, val)
  return val
}

module.exports = mapAny
