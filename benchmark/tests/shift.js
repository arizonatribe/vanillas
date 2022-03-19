const largeList = Array(10000)
  .fill(0)
  .map((_, i) => Math.floor(Math.random() * (10000 + i)))

const shift = [
  ["reference first item in an array (by index)", () => {
    // Have to copy it to make the .shift() test afterwards fair
    const arrCopy = [...largeList]
    return arrCopy[0]
  }],
  ["shift() the first item out of an array", () => {
    const arrCopy = [...largeList]
    return arrCopy.shift()
  }],
  ["splice() the first item from an array", () => {
    const arrCopy = [...largeList]
    return arrCopy.splice(0, 1)[0]
  }],
  ["slice() the first item from an array", () => {
    const arrCopy = [...largeList]
    return arrCopy.slice(0, 1)[0]
  }]
]

export default { shift }
