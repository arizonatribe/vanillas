const isNil = require('./isNil')
const isUndefined = require('./isUndefined')
const getConstructorName = require('../_internal/getConstructorName');
const { OBJECT_LIKE, ERRORS, OTHER_TYPES, PRIMITIVES, ARRAY_LIKE } = require('../_internal/constants')

const ANYTHING_BUT_AN_OBJECT = new RegExp(`^(${[ERRORS, PRIMITIVES, ARRAY_LIKE, OBJECT_LIKE, OTHER_TYPES].join('|')})$`, 'i')

function isObject(val) {
  return !isNil(val) &&
    isUndefined(val.length) && (
      (!isUndefined(val.constructor) && !ANYTHING_BUT_AN_OBJECT.test(val.constructor.name)) ||
      (isUndefined(val.constructor) && isUndefined(val.prototype))
    )
}

module.exports = isObject
