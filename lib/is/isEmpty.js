const isUndefined = require('./isUndefined')
const isArrayish = require('./isArrayish')
const isObject = require('./isObject')
const isNil = require('./isNil')

function isEmpty(val) {
  return isNil(val) ||
    (Array.isArray(val) && !val.length) ||
    (!isUndefined(val.size) && val.size === 0) ||
    (!isUndefined(val.length) && val.length === 0) ||
    (isObject(val) && !Object.keys(val).length) ||
    (Array.from && isArrayish(val) && !Array.from(val).length) ||
    /^\s*$/.test(val)
}

module.exports = isEmpty
