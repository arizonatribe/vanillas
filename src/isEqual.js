import isObject from './isObject'
import isArrayish from './isArrayish'
import isStrictEqual from './isStrictEqual'
import isSameType from './isSameType'

function isEqual(firstVal, secondVal) {
  if (isStrictEqual(firstVal, secondVal)) return true
  if (!isSameType(firstVal, secondVal)) return false
  if (isArrayish(firstVal)) return firstVal.every((v, i) => isEqual(v, secondVal[i]))
  if (isObject(firstVal)) {
    const firstKeys = Array.from(new Set(Object.keys(firstVal)))
    const secondKeys = Array.from(new Set(Object.keys(secondVal)))

    if (firstKeys.length !== secondKeys.length) return false
    if ((new Set([...firstKeys, ...secondKeys])).size !== firstKeys.length) return false

    return firstKeys.every(key => isEqual(firstVal[key], secondVal[key]))
  }

  return false
}

export default isEqual
