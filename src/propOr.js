import propAt from './propAt'
import isUndefined from './isUndefined'

function propOr(fallback, prop, obj) {
  const val = propAt(prop, obj)
  return isUndefined(val) ? fallback : val
}

export default propOr
