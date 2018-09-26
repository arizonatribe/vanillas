import forIn from './forIn'

function assign(obj, ...resOfObjects) {
  const numOfObjs = resOfObjects.length
  for (let i = 0; i < numOfObjs; i++) {
    const currentObj = resOfObjects[i] || {}
    forIn((key, ob) => {
      obj[key] = ob[key]
    }, currentObj)
  }
  return obj
}

export default assign
