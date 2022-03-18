const path = require("path")
const chalk = require("chalk")
const readdirRecursive = require("fs-readdir-recursive")

require("@babel/register")

const { default: runBenchmarks } = require("./run")
const { default: isEqual } = require("../src/isEqual")
const { default: promiseChain } = require("../src/promiseChain")

let functionNames = process.argv.slice(2).filter(arg => !/^--/.test(arg))
const baseDir = path.resolve("benchmark", "tests")

if (!functionNames.length) {
  functionNames = readdirRecursive(baseDir).map(fn => fn.split(".")[0])
  console.log(chalk`{white Running all tests}{red.bold :}`)
  console.log(chalk`{cyan You can always specify which test(s) to run using this syntax}:\n`)
  console.log(chalk`{red $} {yellow npm run benchmark }{white -- }{cyan <file1> <file2> <file3>}{white ...}`)
  console.log(chalk`{cyan (You can run one or more or all of the tests in the }{red benchmark/test/} {cyan directory)}\n`)
} else if (functionNames.length !== 1) {
  console.log(chalk`{white Running benchmark tests for: "${functionNames.join(", ")}"}{red.bold  . . . }\n`)
}

/**
 * A function which checks that all functions being benchmarked together do
 * return the same value,
 * otherwise it will return a list of messages explaining which onces differ and how.
 *
 * @function
 * @name allTestsReturnSameValue
 * @param {Array<string|function|Array<*>>} tests A list of benchmark tests, their captions and their args to compare
 * @returns {undefined|Array<string>} A list of messages explaining which tests failed to return the same value (otherwise `undefined` if they're all the same)
 */
function allTestsReturnSameValue(tests = []) {
  let messages
  tests.map(([caption, benchmarkTest, ...args]) => [caption, benchmarkTest(...args)])
    .every(([caption, result], index, arr) => {
      if (!isEqual(result, arr[0][1])) {
        messages = chalk`{red The result for ${
          index > 1 ? caption : "the second test"
        } }{red doesn't match the first test:}`
        messages += chalk`{green \n  ${
          JSON.stringify(arr[0][1])
        }}{yellow \n    vs}{green \n  ${JSON.stringify(result)}\n}`
        return false
      }
      return true
    })
  return messages
}

/**
 * A test runner which executes specified benchmark tests and prints out the results
 *
 * @function
 * @name benchmark
 */
async function benchmark() {
  try {
    const requests = []

    /* Check that we'll be able to run all the tests before we start the long wait */
    const validatedTests = functionNames.map(fnName => {
      const benchmarkScriptPath = path.resolve(baseDir, `${fnName}.js`)
      /* eslint-disable-next-line import/no-dynamic-require, global-require */
      const fnBenchmarks = require(benchmarkScriptPath).default

      const suite = Object.values(fnBenchmarks).filter(v => Array.isArray(v))
      if (!suite.length) {
        throw new Error(`No tests found for "${fnName}"! Are you exporting them from the benchmark file?`)
      }

      return [
        fnName,
        suite.map(tests => {
          const testsReturnDifferentValues = allTestsReturnSameValue(tests)
          if (testsReturnDifferentValues) {
            console.log(testsReturnDifferentValues)
            throw new Error(`Unable to run benchmarks for "${
              fnName
            }" because one (or more) of the tests return different values`
            )
          }
          return tests
        })
      ]
    })

    validatedTests.forEach(([fnName, suite]) => {
      console.log(chalk`{white Benchmarking }{red.bold "}{cyan.bold ${fnName}}{red.bold "}\n`)
      requests.push(...suite.map(tests => runBenchmarks(tests)))
    })

    return promiseChain(requests)
  } catch (err) {
    console.error(chalk`{red ${err.toString()}}`)
    process.exit(1)
  }
}

benchmark()
