const isNil = require('./isNil')
const isUndefined = require('./isUndefined')
const { ERRORS, OTHER_TYPES, PRIMITIVES, ARRAY_LIKE } = require('./_internal/constants')

const WITHOUT_THE_CURLIES = new RegExp(`^(${[ERRORS, PRIMITIVES, ARRAY_LIKE, OTHER_TYPES].join('|')})$`, 'i')

function isObjectish(val) {
  return !isNil(val) &&
    isUndefined(val.length) && (
      (!isUndefined(val.constructor) && !WITHOUT_THE_CURLIES.test(val.constructor.name)) ||
      (isUndefined(val.constructor) && isUndefined(val.prototype))
    )
}

module.exports = isObjectish
