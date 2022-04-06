const path = require("path")
const fs = require("fs")

/**
 * Creates a root types.d.ts from the individual *.d.ts in the src folder
 *
 * @function
 * @name createRootTypeDefinitions
 * @param {Object<string, string|string[]>} paths A set of file and folder paths
 * @param {boolean} [isRoot] Whether this file is to be at the root of the code repo (otherwise will be created in the build folder
 * @returns {boolean} Whether or not the file was created successfully
 */
function createRootTypeDefinitions(paths, isRoot) {
  let additionalTypes = []

  fs.readdirSync(paths.srcTypes)
    .filter(filename => !/^index\./.test(filename))
    .forEach(filename => {
      const content = fs.readFileSync(path.resolve(paths.srcTypes, filename))
      const typesConstsInterfaces = content
        .toString()
        .split(/\n/)
        .filter(line => /^export\s/.test(line))
        .map(line => (
          line.match(/^(export)(\s+)(type|interface|const)(\s+)([^\s<]+)([\s<]+)/) || []
        )[5])

      if (typesConstsInterfaces.length) {
        additionalTypes = [
          ...additionalTypes,
          ...typesConstsInterfaces
        ].filter(Boolean)
      }
    })

  let newTypeDefinitionContent = paths.typeDefinitionFiles
    .map(typeDefinitionFile => {
      const content = fs.readFileSync(typeDefinitionFile)
      return content.toString()
    })
    .join("\n")
    .replace(/export default function/g, "export function")

  const importedTypes = []
  additionalTypes.forEach(aType => {
    if ((new RegExp(`(\\s|{)(${aType})(,|\\s|})`)).test(newTypeDefinitionContent)) {
      importedTypes.push(aType)
    }
  })
  if (importedTypes.length) {
    newTypeDefinitionContent = [
      `import { ${importedTypes.join(", ")} } from "./${isRoot ? "src/types" : "types/index"}"`,
      newTypeDefinitionContent
        .split(/\n/)
        .filter(line => !/^import/.test(line))
        .join("\n")
    ].join("\n")
  }

  const rootTypeDefinitionFilePath = path.resolve(...[
    process.cwd(),
    !isRoot && paths.build,
    "index.d.ts"
  ].filter(Boolean))
  if (fs.existsSync(rootTypeDefinitionFilePath)) fs.unlinkSync(rootTypeDefinitionFilePath)
  fs.writeFileSync(rootTypeDefinitionFilePath, newTypeDefinitionContent)
  return fs.existsSync(rootTypeDefinitionFilePath)
}

/**
 * A command to be run
 *
 * @typedef {object} Command
 * @property {string} name The command name (short description)
 * @property {string} command The shell command to be run
 * @property {Array<string>} [args] The command-line args to be passed into the shell command
 * @property {string} [description] The long description of the command being run
 * @property {object} [context] The NodeJs child_process context. This usually means env vars and configuration values for stdin/stderr/stdout
 */

/**
 * Creates the individual commands to be run during the build, using the env vars and resolved file/folder paths.
 *
 * @function
 * @name getCommands
 * @param {object} env An object representing the environment variables
 * @param {object} paths An object representing the resolved file/folder paths used in the build
 * @returns {Array<Command>} A list of commands to run during the build
 */
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
    args: ["--require=@babel/register", "test/index.js"],
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
    name: "copying type definitions folder",
    command: paths.copy,
    args: ["-f", `${paths.src}${path.sep}types${path.sep}*.ts`, paths.buildTypes],
    context: { stdio: "inherit", env },
    description: "✅ Copied additional TypeScript type definitions"
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
