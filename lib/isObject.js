const isNil = require('./isNil')
const isUndefined = require('./isUndefined')
const getConstructorName = require('./_internal/getConstructorName');

function isAnythingButAnObject(name) {
  switch (name) {
    case 'Function':
    case 'RegExp':
    case 'Date':
    case 'WeakMap':
    case 'Map':
    case 'WeakSet':
    case 'Set':
    case 'Float64Array':
    case 'Float32Array':
    case 'Int32Array':
    case 'Uint16Array':
    case 'Int16Array':
    case 'Uint8ClampedArray':
    case 'Uint8Array':
    case 'Int8Array':
    case 'Array':
    case 'Symbol':
    case 'Number':
    case 'String':
    case 'Boolean':
    case 'UriError':
    case 'TypeError':
    case 'SyntaxError':
    case 'ReferenceError':
    case 'RangeError':
    case 'InternalError':
    case 'EvalError':
    case 'Error':
      return true
    default:
      return false
  }
}

function isObject(val) {
  return !isNil(val) &&
    isUndefined(val.length) && (
      (!isUndefined(val.constructor) && !isAnythingButAnObject(val.constructor.name)) ||
      (isUndefined(val.constructor) && isUndefined(val.prototype))
    )
}

module.exports = isObject
