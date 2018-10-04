import forIn from './forIn'
import clone from './clone'
import mapObject from './mapObject'

function mapSpec(spec, obj) {
  if (typeof spec === 'function') {
    return mapObject(spec, obj)
  } else {
    const newObj = clone(obj)
    forIn((key, ob) => {
      if (typeof ob[key] === 'function') {
        newObj[key] = ob[key](newObj[key])
      } else {
        newObj[key] = ob[key]
      }
    }, spec)
    return newObj
  }
}

export default mapSpec
