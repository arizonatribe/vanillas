function toKebabCase(str) {
  return str
    .replace(/_/g, '-')
    .replace(/([a-z0-9])(?=[A-Z])/g, '$1-')
    .toLowerCase()
}

export default toKebabCase
