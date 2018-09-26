import isNil from './isNil'
import isString from './isString'
import isPrimitive from './isPrimitive'
import concat from './concat'
import forIn from './forIn'

function merge(firstVal, secondVal) {
  if (isNil(firstVal) || isNil(secondVal)) {
    return secondVal || firstVal
  }
  if (isPrimitive(secondVal)) {
    return secondVal
  }
  if (
    !isNil(firstVal.length) &&
    !isNil(secondVal.length) &&
    !isString(firstVal) &&
    !isString(secondVal)
  ) {
    return concat(firstVal, secondVal)
  }
  const newObj = { }
  forIn((key, obj) => { newObj[key] = obj[key] }, firstVal)
  forIn((key, obj) => { newObj[key] = merge(newObj[key], obj[key]) }, secondVal)
  return newObj
}

export default merge
