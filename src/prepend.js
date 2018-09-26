import merge from './merge'
import isString from './isString'
import isNumber from './isNumber'

function prepend(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => isString(val) || isNumber(val))) {
    return `${secondVal}${firstVal}`
  }
  return merge(secondVal, firstVal)
}

export default prepend
