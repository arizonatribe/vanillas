import isUndefined from './isUndefined'
import isArrayish from './isArrayish'
import isObject from './isObject'
import isNil from './isNil'

function isEmpty(val) {
  return isNil(val) ||
    (Array.isArray(val) && !val.length) ||
    (!isUndefined(val.size) && val.size === 0) ||
    (!isUndefined(val.length) && val.length === 0) ||
    (isObject(val) && !Object.keys(val).length) ||
    (Array.from && isArrayish(val) && !Array.from(val).length) ||
    /^\s*$/.test(val)
}

export default isEmpty
