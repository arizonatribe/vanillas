import merge from './merge'

function prepend(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => typeof val === 'string' || typeof val === 'number')) {
    return `${secondVal}${firstVal}`
  }
  return merge(secondVal, firstVal)
}

export default prepend
