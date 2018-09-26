function toCamelCase(str) {
  return str.replace(/[_-][a-z]/g, w => (w || '').toUpperCase())
}

module.exports = toCamelCase
