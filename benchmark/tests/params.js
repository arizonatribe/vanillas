const testProps = Array(1000)
    .fill("arg")
    .reduce((obj, key, idx) => ({
        ...obj,
        [`${key}${idx}`]: Math.floor(Math.random() * (1000 + idx))
    }), {})

const testArgs = Object.values(testProps)

function singleArgFn(props) {
    const vals = Object.values(props)
    return `${vals.join(" + ")} = ${
      vals.reduce((acc, val) => acc + val, 0)
    }`
}

function multiArgFn(...args) {
    return `${args.join(" + ")} = ${
      args.reduce((acc, val) => acc + val, 0)
    }`
}

const params = [
    ["single arg fn (destructuring params)", () => {
        return singleArgFn(testProps)
    }],
    ["multi arg (parameterized) fn", () => {
        return multiArgFn(...testArgs)
    }]
]

export default { params }
