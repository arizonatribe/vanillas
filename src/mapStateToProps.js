import forIn from './forIn'

function mapStateToProps(spec, obj) {
  const newObj = {}
  forIn((key, ob) => {
    if (typeof ob[key] === 'function') {
      newObj[key] = ob[key](obj)
    } else {
      newObj[key] = ob[key]
    }
  }, spec)
  return newObj
}

export default mapStateToProps
