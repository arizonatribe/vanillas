const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const functionName = process.argv.slice(2)[0]
if (!functionName) {
  console.error(chalk.red('You forgot to include the name of the function to benchmark!'))
  console.log(chalk`$  {yellow npm run benchmark -- } {cyan <name_of_benchmark>}\n`)
  process.exit(1)
}

try {
  fs.realpathSync('lib')
} catch (err) {
  console.error(chalk`{white The} {cyan lib/} {white directory wasn't found}`)
  console.log(chalk`{white Before running the benchmark, first do:} {yellow npm run build}\n`)
  process.exit(1)
}

const benchmarkScriptPath = path.resolve('benchmarks', `${functionName}.js`)
try {
  fs.realpathSync(benchmarkScriptPath)
} catch (err) {
  console.error(chalk.red(String(err)))
  process.exit(1)
}

// eslint-disable-next-line import/no-dynamic-require
require(benchmarkScriptPath)
