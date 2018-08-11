const isNil = require('./is/isNil')
const capitalize = require('./capitalize')
const getConstructorName = require('./_internal/getConstructorName')

function getType(val) {
  if (isNil(val)) {
    return `${val}`
  }
  return getConstructorName(val) || capitalize(typeof val)
}

module.exports = getType
