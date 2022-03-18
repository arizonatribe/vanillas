/* eslint-disable func-names */
import chalk from "chalk"
import Benchmark from "benchmark"

/**
 * Executes a series of benchmark tests and prints their results to the shell
 *
 * @function
 * @name runBenchmarks
 * @param {function} log A function which logs/prints the results of the benchmarks
 * @param {Array<string|function|Array<*>>} tests A list of benchmark tests. This incudes a caption for the test, the function which executes the test, and the args to pass into that function
 * @returns {*} The result of [benchmark](https://www.npmjs.com/package/benchmark) test `run()`
 */
function runBenchmarks(tests = []) {
  const suite = new Benchmark.Suite()

  let maxNameWidth = 0

  for (let i = 0, len = tests.length; i < len; i++) {
    const [caption, benchmarkTest, ...args] = tests[i]
    maxNameWidth = Math.max(caption.length, maxNameWidth)
    suite.add(caption, () => benchmarkTest(...args))
  }

  const stats = {}

  suite.on("cycle", function cycleCallback(event) {
    const { name, hz: ops, count, stats: { rme, sample } } = event.target
    const samples = sample.length

    stats[name] = { ops, count, rme, samples }

    console.log(chalk`{red.bold [}{cyan.bold ${
      name
    }}{red.bold ]\n}{red.bold   - }{yellow ${
      Number(Math.round(ops)).toLocaleString()
    } }{white ops/sec\n}{bold.red   - }{yellow ${
      Number(count).toLocaleString()
    } }{white times executed\n}{bold.red   - }{yellow ${
      Number(samples).toLocaleString()
    } }{white runs sampled}`)
  })

  suite.on("complete", function completionCallback() {
    const [fastest] = this.filter("fastest").map("name")
    const { ops: mostOpsPerSecond } = stats[fastest]

    console.log(chalk`\n⏱ {green Fastest is }{white ${fastest} 🚀}`)

    Object.keys(stats).filter(key => key !== fastest).forEach(key => {
      const { ops } = stats[key]

      console.log(chalk`{bold.white    - }{cyan ${
        key
      }}{white  ....${
          Array(maxNameWidth - key.length).fill(".").join("")
      } }{red ${
        Number(
            (((mostOpsPerSecond - ops) / ops) * 100).toFixed(2)
        ).toLocaleString()
      }% }{white slower}{red.bold !}`)
    })
  })

  return suite.run()
}

export default runBenchmarks
