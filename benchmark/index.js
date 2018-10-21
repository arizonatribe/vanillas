const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const readdirRecursive = require('fs-readdir-recursive')

require('@babel/register')

const { errorLog, log } = require('./helpers')
const { default: runBenchmarks } = require('./run')
const { default: chainRequests } = require('../src/chainRequests')

const docs = []
const logToDocs = (...l) => docs.push(...l)

let functionNames = process.argv.slice(2).filter(arg => !/^--/.test(arg))
const updateDocs = process.argv.some(arg => arg === '--update-docs')
const baseDir = path.resolve('benchmark', 'tests')

if (!functionNames.length) {
  functionNames = readdirRecursive(baseDir).map(fn => fn.split('.')[0])
  log(chalk`{white Running all tests}{red.bold :}`)
  log(chalk`{cyan You can always specify which test(s) to run using this syntax}:\n`)
  log(chalk`{red $} {yellow npm run benchmark }{white -- }{cyan <file1> <file2> <file3>}{white ...}`)
  log(chalk`{cyan (You can run one or more or all of the tests in the }{red benchmark/test/} {cyan directory)}\n`)
} else if (functionNames.length !== 1) {
  log(chalk`{white Running benchmark tests for: "${functionNames.join(', ')}"}{red.bold  . . . }\n`)
}

async function benchmark() {
  try {
    const requests = []
    const logger = updateDocs ? logToDocs : log

    functionNames.forEach(fnName => {
      log(chalk`{white Benchmarking "${fnName}"}\n`)

      const benchmarkScriptPath = path.resolve(baseDir, `${fnName}.js`)
      // eslint-disable-next-line import/no-dynamic-require
      const fnBenchmarks = require(benchmarkScriptPath).default

      const suite = Object.values(fnBenchmarks).filter(v => Array.isArray(v))
      if (!suite.length) {
        throw new Error(`No tests found for "${fnName}"! Are you exporting them from the benchmark file?`)
      }

      suite.forEach(tests => {
        requests.push(runBenchmarks(logger, tests))
      })
    })

    await chainRequests(requests)

    if (docs.length) {
      fs.writeFileSync(
        'BENCHMARKS.md',
        ['```', ...docs, '```'].join('\n'),
        'utf-8'
      )
    }
  } catch (err) {
    errorLog(err)
    process.exit(1)
  }
}

benchmark()
