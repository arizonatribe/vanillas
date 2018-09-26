const getConstructorName = require('./_internal/getConstructorName')

function isNumber(val) {
  return typeof val === 'number' || getConstructorName(val) === 'Number'
}

module.exports = isNumber
