#!/usr/bin/env node

const chalk = require("chalk")
const fse = require("fs-extra")
const spawn = require("cross-spawn")
const pkg = require("../package.json")
const getPaths = require("./paths")
const getCommands = require("./commands")
const { createRootTypeDefinitions } = require("./commands")

require("@babel/register")

const { clone, each, merge, pick } = require("../src")

function runBuild() {
  let exitStatus = 0
  try {
    console.log(chalk.cyan("Resolving paths to various build tools and source files/folders"))
    const paths = getPaths()
    const env = clone(process.env)

    console.log(chalk.cyan("Clearing out previous build"))
    fse.emptyDirSync(paths.build)

    console.log(chalk.cyan("Creating the root type definition from the individual defs in ./src/*.d.ts"))
    createRootTypeDefinitions(paths)

    console.log(chalk.cyan("Creating a new package.json file for the build"))
    const distPkgJson = merge({
      main: "index.js",
      module: "es/index.js",
      types: "types.d.ts",
      "jsnext:main": "es/index.js",
      browser: "dist/vanillas.js"
    }, pick([
      "name",
      "author",
      "version",
      "license",
      "keywords",
      "repository",
      "description"
    ], pkg))

    fse.writeJsonSync(paths.pkg, distPkgJson, { spaces: 2 })

    console.log(chalk.cyan("Copying the README.md to the build"))
    fse.copySync(paths.README, `${paths.build}/README.md`)

    console.log(chalk.cyan("Creating list of commands to execute with the build tools (tests, linting, etc.)"))
    const commands = getCommands(env, paths)

    each(({ command, args, context, description, name }) => {
      console.log(chalk.cyan(`${name} . . .`))
      const { status, error } = spawn.sync(command, args, context)
      exitStatus = status

      if (error) {
        console.log(`${chalk.yellow("Failed during")} ${chalk.yellow.bold(name)}`)
        throw error
      }

      console.log(chalk.cyan(description))
    }, commands)

    console.log(chalk.green(`Successfully created a new build at: '${paths.build}' 🚀`))
    console.log(`${chalk.yellow("Ready to publish via:")} ${chalk.cyan("npm run dist")}`)

    process.exit(exitStatus)
  } catch (err) {
    console.error(chalk.red(err))
    process.exit(exitStatus || 1)
  }
}

runBuild()
