function mapString(fn, str) {
  const len = str.length
  let newStr = ''
  for (let i = 0; i < len; i++) {
    newStr += fn(str[i], i, str)
  }
  return newStr
}

export default mapString