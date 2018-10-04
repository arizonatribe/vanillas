function isBlankString(val) {
  return typeof val === 'string' && (val.length === 0 || /^\s*$/.test(val))
}

export default isBlankString
