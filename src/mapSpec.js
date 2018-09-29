import forIn from './forIn'
import clone from './clone'
import mapObject from './mapObject'
import isFunction from './isFunction'

function mapSpec(spec, obj) {
  if (isFunction(spec)) {
    return mapObject(spec, obj)
  } else {
    const newObj = clone(obj)
    forIn((key, ob) => {
      if (isFunction(ob[key])) {
        newObj[key] = ob[key](newObj[key])
      } else {
        newObj[key] = ob[key]
      }
    }, spec)
    return newObj
  }
}

export default mapSpec
