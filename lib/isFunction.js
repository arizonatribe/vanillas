const getConstructorName = require('./_internal/getConstructorName')

function isFunction(val) {
  return typeof val === 'function' || /^function/i.test(getConstructorName(val))
}

module.exports = isFunction
