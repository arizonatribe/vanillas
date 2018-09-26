function toTitleCase(str) {
  return str.split(/\s/)
    .map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
    .join(' ')
}

export default toTitleCase
