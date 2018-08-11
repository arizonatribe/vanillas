const getConstructorName = require('../_internal/getConstructorName');

function isBoolean(val) {
  return typeof val === 'boolean' || /^boolean/i.test(getConstructorName(val))
}

module.exports = isBoolean
