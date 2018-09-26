const isNumber = require('./isNumber')

function isInteger(val) {
  // eslint-disable-next-line no-restricted-globals
  return isNumber(val) && isFinite(val) && Math.floor(val) === val
}

module.exports = isInteger
