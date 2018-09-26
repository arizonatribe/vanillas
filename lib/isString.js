const getConstructorName = require('./_internal/getConstructorName')

function isString(val) {
  return typeof val === 'string' || getConstructorName(val) === 'String'
}

module.exports = isString
