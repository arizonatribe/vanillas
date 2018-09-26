import isUndefined from './isUndefined'

function size(val) {
  if (!isUndefined(val.length)) {
    return val.length
  }
  if (!isUndefined(val.size)) {
    return val.size
  }
  if (typeof val === 'object') {
    return Object.keys(val).length
  }
  return undefined
}

export default size
