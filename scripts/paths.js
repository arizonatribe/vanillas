const fs = require("fs")
const path = require("path")

/**
 * The file/folder paths used when creating the build commands.
 *
 * @typedef {object} Paths
 * @property {string} src The path to the vanillas source files
 * @property {string} typeDefinitionFiles The path to the vanillas individual type definition files
 * @property {string} build The path to the vanillas build output
 * @property {string} buildTypes The path to the additional type definitions placed into the vanillas build output
 * @property {string} copy The path to the copyfiles binary
 * @property {string} README The path to the vanillas project README (markdown) file
 * @property {string} faucet The path to the faucet binary
 * @property {string} types The path to the combined type defs
 * @property {string} pkg The path to the package.json for the vanillas repo
 * @property {string} babel The path to the babel binary
 * @property {string} jsdoc The path to the jsdoc binary
 * @property {string} eslint The path to the eslint binary
 * @property {string} rollup The path to the rollup binary
 * @property {string} tape The path to the tape binary
 */

/**
 * Resolves the file/folder paths used when creating the build commands.
 *
 * @function
 * @name getPaths
 * @returns {Paths} An object containing the paths to the files/folders used in the vanillas package build
 */
function getPaths() {
  const resolvePath = rel => path.resolve(__dirname, "..", rel)
  const src = resolvePath("src")
  const typeDefinitionFiles = fs.readdirSync(src).filter(file => /\.d\.ts$/.test(file))

  return {
    src,
    typeDefinitionFiles: typeDefinitionFiles.map(typeDefinitionFile => path.resolve(src, typeDefinitionFile)),
    build: resolvePath("build"),
    buildTypes: resolvePath("build/types"),
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
