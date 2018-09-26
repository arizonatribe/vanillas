import makePropPath from './_internal/makePropPath'

function propAt(prop, obj) {
  try {
    const paths = makePropPath(prop)
    const len = paths.length
    if (len === 0) return undefined
    let idx = len
    let val = obj[paths[0]]
    while (--idx) {
      val = val[paths[len - idx]]
    }
    return val
  } catch (err) {
    // Prop wasn't found; returning undefined
  }
}

export default propAt
