const getConstructorName = require('../_internal/getConstructorName');

function isNumber(val) {
  return typeof val === 'number' || /^number/i.test(getConstructorName(val))
}

module.exports = isNumber
