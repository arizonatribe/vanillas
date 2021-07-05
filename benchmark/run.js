/* eslint-disable func-names */
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
function runBenchmarks(log, tests = []) {
  return tests
    .reduce(
      (suite, [caption, benchmarkTest, ...args]) => suite.add(
        caption,
        () => benchmarkTest(...args)
      ),
      new Benchmark.Suite()
    )
    .on("cycle", event => log(String(event.target)))
    .on("complete", function() {
      log(`Fastest is ${this.filter("fastest").map("name")}\n`)
    })
    .run()
}

export default runBenchmarks
