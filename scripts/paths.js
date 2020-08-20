const path = require("path")

function getPaths() {
  const resolvePath = rel => path.resolve(__dirname, "..", rel)
  return {
    build: resolvePath("build"),
    typesJson: resolvePath("jsd-types.json"),
    README: resolvePath("README.md"),
    faucet: resolvePath("node_modules/.bin/faucet"),
    pkg: resolvePath("build/package.json"),
    babel: resolvePath("node_modules/.bin/babel"),
    jsdoc: resolvePath("node_modules/.bin/jsdoc"),
    eslint: resolvePath("node_modules/.bin/eslint"),
    rollup: resolvePath("node_modules/.bin/rollup"),
    tape: resolvePath("node_modules/.bin/tape")
  }
}

module.exports = getPaths
