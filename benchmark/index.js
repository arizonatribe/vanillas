const path = require('path')
const chalk = require('chalk')
const readdirRecursive = require('fs-readdir-recursive')

require('@babel/register')

const { errorLog, log } = require('./helpers')
const { default: runBenchmarks } = require('./run')
const { default: chainRequests } = require('../src/chainRequests')

let functionNames = process.argv.slice(2)
const baseDir = path.resolve('benchmark', 'tests')

if (!functionNames.length) {
  functionNames = readdirRecursive(baseDir).map(fn => fn.split('.')[0])
  log(chalk`🚀 {white Running all tests}{red.bold :}`)
  log(chalk`{cyan You can always specify which test(s) to run using this syntax}:\n`)
  log(chalk`{red $} {yellow npm run benchmark }{white -- }{cyan <file1> <file2> <file3>}{white ...}`)
  log(chalk`{cyan (You can run one or more or all of the tests in the }{red benchmark/test/} {cyan directory)}\n`)
} else {
  log(chalk`🚀 {white Running benchmark tests for: "${functionNames.join(', ')}"}{red.bold  . . . }\n`)
}

async function benchmark() {
  try {
    chainRequests(
      functionNames.map(fnName => {
        const benchmarkScriptPath = path.resolve(baseDir, `${fnName}.js`)
        // eslint-disable-next-line import/no-dynamic-require
        const fnBenchmarks = require(benchmarkScriptPath).default
        const { tests, data } = fnBenchmarks
        if (!tests || !tests.length) {
          throw new Error(`No tests found for "${fnName}"! Are you exporting them from the benchmark file?`)
        }
        return runBenchmarks(tests, data)
      })
    )
  } catch (err) {
    errorLog(err)
    process.exit(1)
  }
}

benchmark()
