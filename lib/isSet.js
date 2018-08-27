const getConstructorName = require('./_internal/getConstructorName');

function isSet(val) {
  return /^(set|weakset)$/i.test(getConstructorName(val))
}

module.exports = isSet
