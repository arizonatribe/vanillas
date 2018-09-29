import Benchmark from 'benchmark'
import { log } from './helpers'

const createSuite = () => new Benchmark.Suite()

function runBenchmarks(tests = [], ...args) {
  return tests
    .reduce(
      (suite, [caption, benchmarkTest]) => suite.add(
        caption,
        () => benchmarkTest(...args)
      ),
      createSuite()
    )
    .on('cycle', event => log(String(event.target)))
    .on('complete', function() {
      log(`Fastest is ${this.filter('fastest').map('name')}\n`)
    })
    .run()
}

export default runBenchmarks
