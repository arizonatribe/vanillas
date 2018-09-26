function concat(firstArr, secondArr) {
  const firstLen = firstArr.length
  const len = secondArr.length + firstLen
  const newArr = new Array(len)
  for (let i = 0; i < firstLen; i++) {
    newArr[i] = firstArr[i]
  }
  for (let i = firstLen; i < len; i++) {
    newArr[i] = secondArr[i - firstLen]
  }
  return newArr
}

export default concat
