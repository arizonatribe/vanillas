const getConstructorName = require('./_internal/getConstructorName')

function isSet(val) {
  return getConstructorName(val) === 'Set' || getConstructorName(val) === 'WeakSet'
}

module.exports = isSet
