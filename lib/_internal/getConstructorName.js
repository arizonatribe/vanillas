function getConstructorName(val) {
  try {
    return val.constructor.name
  } catch (err) {
    return ''
  }
}

module.exports = getConstructorName
