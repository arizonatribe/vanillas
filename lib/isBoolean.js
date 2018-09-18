const getConstructorName = require('./_internal/getConstructorName');

function isBoolean(val) {
  return typeof val === 'boolean' || getConstructorName(val) === 'Boolean'
}

module.exports = isBoolean
