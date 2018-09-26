const getConstructorName = require('./_internal/getConstructorName')

function isMap(val) {
  return getConstructorName(val) === 'Map' || getConstructorName(val) === 'WeakMap'
}

module.exports = isMap
