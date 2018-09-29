import forIn from './forIn'
import isFunction from './isFunction'

function mapStateToProps(spec, obj) {
  const newObj = {}
  forIn((key, ob) => {
    if (isFunction(ob[key])) {
      newObj[key] = ob[key](obj)
    } else {
      newObj[key] = ob[key]
    }
  }, spec)
  return newObj
}

export default mapStateToProps
