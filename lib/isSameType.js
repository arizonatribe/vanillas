const getType = require('./getType')

function isSameType(val1, val2) {
  return getType(val1) === getType(val2)
}

module.exports = isSameType
