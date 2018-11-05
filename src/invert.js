import forIn from './forIn'

function flipKeyValues(obj) {
  const newObj = {}
  forIn((key, val) => {
    newObj[String(val)] = key
  }, obj)
  return newObj
}

export default flipKeyValues
