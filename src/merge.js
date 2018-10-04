import isNil from './isNil'
import isPrimitive from './isPrimitive'
import concat from './concat'
import forIn from './forIn'

function merge(firstVal, secondVal) {
  if (isNil(firstVal) || isNil(secondVal)) {
    return secondVal || firstVal
  }
  if (Array.isArray(firstVal) && Array.isArray(secondVal)) {
    return concat(firstVal, secondVal)
  }
  if (isPrimitive(secondVal)) {
    return secondVal
  }
  const newObj = { }
  forIn((key, obj) => { newObj[key] = obj[key] }, firstVal)
  forIn((key, obj) => { newObj[key] = merge(newObj[key], obj[key]) }, secondVal)
  return newObj
}

export default merge
