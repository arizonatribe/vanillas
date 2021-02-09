const path = require("path")

function getPaths() {
  const resolvePath = rel => path.resolve(__dirname, "..", rel)
  return {
    build: resolvePath("build"),
    copy: resolvePath("node_modules/.bin/cpy"),
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
