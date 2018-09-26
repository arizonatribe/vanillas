import isArrayish from './isArrayish'
import isObject from './isObject'
import isString from './isString'
import mapString from './mapString'
import mapObject from './mapObject'
import _map from './_internal/_map'

function map(fn, val) {
  if (Array.isArray(val)) return _map(fn, val)
  if (isObject(val)) return mapObject(fn, val)
  if (isString(val)) return mapString(fn, val)
  if (isArrayish(val)) return val.map(fn)
  return val
}

export default map
