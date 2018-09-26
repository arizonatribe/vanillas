function entries(obj) {
  const keys = Object.keys(obj)
  const len = keys.length
  for (let i = 0; i < len; i++) {
    keys[i] = [keys[i], obj[keys[i]]]
  }
  return keys
}

export default entries
