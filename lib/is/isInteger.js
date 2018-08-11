const getConstructorName = require('../_internal/getConstructorName');

function isInteger(val) {
  return isNumber(val) && isFinite(val) && Math.floor(val) === val
}

module.exports = isInteger
