const getConstructorName = require('./_internal/getConstructorName');

function isString(val) {
  return typeof val === 'string' || /^string/i.test(getConstructorName(val))
}

module.exports = isString
