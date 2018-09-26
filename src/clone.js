import isNil from './isNil'
import isObject from './isObject'
import forIn from './forIn'

function clone(obj) {
  if (!isNil(obj)) {
    if (Array.isArray(obj)) {
      return obj.map(v => v)
    }
    if (isObject(obj)) {
      const newObj = {}
      forIn((key, ob) => {
        const val = ob[key]
        if (isObject(val) || Array.isArray(val)) {
          newObj[key] = clone(val)
        } else {
          newObj[key] = val
        }
      }, obj)
      return newObj
    }
  }
}

export default clone
