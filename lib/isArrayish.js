const isNil = require('./isNil')
const { ARRAY_LIKE } = require('./_internal/constants')
const getConstructorName = require('./_internal/getConstructorName');

const IS_ARRAY_LIKE = new RegExp(`^(${ARRAY_LIKE})$`, 'i')

function isArrayish(val) {
  return Array.isArray(val) || (!isNil(val) && IS_ARRAY_LIKE.test(getConstructorName(val)))
}

module.exports = isArrayish
