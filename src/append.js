import merge from './merge'
import isString from './isString'
import isNumber from './isNumber'

function append(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => isString(val) || isNumber(val))) {
    return `${firstVal}${secondVal}`
  }
  return merge(firstVal, secondVal)
}

export default append
