const getConstructorName = require('../_internal/getConstructorName');

function isMap(val) {
  return /^(map|weakmap)$/i.test(getConstructorName(val))
}

module.exports = isMap
