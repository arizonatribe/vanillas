function mapString(fn, str) {
  const len = str.length
  let newStr = ''
  for (let i = 0; i < len; i++) {
    newStr = newStr + fn(str[i])
  }
  return newStr
}

module.exports = mapString
