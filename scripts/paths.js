const fs = require("fs")
const path = require("path")

function getPaths() {
  const resolvePath = rel => path.resolve(__dirname, "..", rel)
  const src = resolvePath("src")
  const typeDefinitionFiles = fs.readdirSync(src).filter(file => /\.d\.ts$/.test(file))

  return {
    src,
    typeDefinitionFiles: typeDefinitionFiles.map(typeDefinitionFile => path.resolve(src, typeDefinitionFile)),
    build: resolvePath("build"),
    copy: resolvePath("node_modules/.bin/copyfiles"),
    README: resolvePath("README.md"),
    faucet: resolvePath("node_modules/.bin/faucet"),
    types: resolvePath("types.d.ts"),
    pkg: resolvePath("build/package.json"),
    babel: resolvePath("node_modules/.bin/babel"),
    jsdoc: resolvePath("node_modules/.bin/jsdoc"),
    eslint: resolvePath("node_modules/.bin/eslint"),
    rollup: resolvePath("node_modules/.bin/rollup"),
    tape: resolvePath("node_modules/.bin/tape")
  }
}

module.exports = getPaths
