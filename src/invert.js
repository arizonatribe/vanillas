import forIn from './forIn'

function flipKeyValues(obj) {
  const newObj = {}
  forIn((key, ob) => {
    newObj[String(ob[key])] = key
  }, obj)
  return newObj
}

export default flipKeyValues
