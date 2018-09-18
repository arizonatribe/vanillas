const getConstructorName = require('./_internal/getConstructorName');
const isNumber = require('./isNumber')

function isInteger(val) {
  return isNumber(val) && isFinite(val) && Math.floor(val) === val
}

module.exports = isInteger
