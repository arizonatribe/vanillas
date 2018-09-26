function omit(keys, obj) {
  const newObj = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (!keys.includes(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

export default omit
