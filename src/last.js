function last(val) {
  const arrlen = val.length || 0
  return (val || [])[arrlen - 1]
}

export default last
