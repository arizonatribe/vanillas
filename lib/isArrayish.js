const isNil = require('./isNil')
const getConstructorName = require('./_internal/getConstructorName')

function isArrayLike(name) {
  switch (name) {
  case 'Set':
  case 'WeakSet':
  case 'Array':
  case 'Float64Array':
  case 'Float32Array':
  case 'Int32Array':
  case 'Uint16Array':
  case 'Int16Array':
  case 'Uint8ClampedArray':
  case 'Uint8Array':
  case 'Int8Array':
    return true
  default:
    return false
  }
}

function isArrayish(val) {
  return Array.isArray(val) || (!isNil(val) && isArrayLike(getConstructorName(val)))
}

module.exports = isArrayish
