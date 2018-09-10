const isNil = require('./isNil')
const toTitleCase = require('./toTitleCase')
const getConstructorName = require('./_internal/getConstructorName')

function getType(val) {
  if (isNil(val)) {
    return `${val}`
  }
  return getConstructorName(val) || toTitleCase(typeof val)
}

module.exports = getType
