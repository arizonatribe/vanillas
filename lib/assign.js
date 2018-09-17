function assign(obj, ...resOfObjects) {
  const numOfObjs = resOfObjects.length
  for (let i = 0; i < numOfObjs; i++) {
    const currentObj = resOfObjects[i] || {}
    for (let key in currentObj) {
      obj[key] = currentObj[key]
    }
  }
  return obj
}

module.exports = assign
