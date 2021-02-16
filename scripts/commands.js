const path = require("path")
const fs = require("fs")

/**
 * Creates a root types.d.ts from the individual *.d.ts in the src folder
 *
 * @function
 * @name createRootTypeDefinitions
 * @param {Object<string, string|string[]>} paths A set of file and folder paths
 * @returns {boolean} Whether or not the file was created successfully
 */
function createRootTypeDefinitions(paths) {
  const newTypeDefinitionContent = paths.typeDefinitionFiles.map(typeDefinitionFile => {
    const content = fs.readFileSync(typeDefinitionFile)
    return content.toString()
  }).join("\n").replace(/export default function/g, "export function")
  const rootTypeDefinitionFilePath = path.resolve(process.cwd(), "types.d.ts")
  if (fs.existsSync(rootTypeDefinitionFilePath)) fs.unlinkSync(rootTypeDefinitionFilePath)
  fs.writeFileSync(rootTypeDefinitionFilePath, newTypeDefinitionContent)
  return fs.existsSync(rootTypeDefinitionFilePath)
}

function getCommands(env, paths) {
  return [{
    name: "linting",
    command: paths.eslint,
    args: ["src"],
    context: { stdio: "inherit", env },
    description: "✅ Linted the source files"
  }, {
    name: "testing",
    command: paths.tape,
    args: ["--require=@babel/register", "test/index.js", ` | ${paths.faucet}`],
    context: { stdio: "inherit", env, shell: true },
    description: "✅ Ran the unit tests"
  }, {
    name: "transpiling (cjs)",
    command: paths.babel,
    args: ["src", "--out-dir", "build"],
    context: { stdio: "inherit", env: { ...env, BABEL_ENV: "cjs" } },
    description: "✅ Transpiled to CommonJs files"
  }, {
    name: "copying individual type definitions",
    command: paths.copy,
    args: ["-f", `${paths.src}${path.sep}*.d.ts`, paths.build],
    context: { stdio: "inherit", env },
    description: "✅ Copied individual TypeScript type definitions"
  }, {
    name: "copying root type definition",
    command: paths.copy,
    args: ["-f", paths.types, paths.build],
    context: { stdio: "inherit", env },
    description: "✅ Copied root TypeScript type definitions"
  }, {
    name: "transpiling (esm)",
    command: paths.babel,
    args: ["src", "--out-dir", "build/es"],
    context: { stdio: "inherit", env: { ...env, BABEL_ENV: "es" } },
    description: "✅ Transpiled to ES Modules (ESM) files"
  }, {
    name: "transpiling (umd)",
    command: paths.rollup,
    args: ["-c"],
    context: { stdio: "inherit", env: { ...env, NODE_ENV: "development" } },
    description: "✅ Transpiled to Universal Module Definition (UMD) files (minified)"
  }, {
    name: "transpiling (umd minified)",
    command: paths.rollup,
    args: ["-c"],
    context: { stdio: "inherit", env: { ...env, NODE_ENV: "production" } },
    description: "✅ Transpiled to Universal Module Definition (UMD) files (minified)"
  }]
}

module.exports = getCommands
module.exports.createRootTypeDefinitions = createRootTypeDefinitions
