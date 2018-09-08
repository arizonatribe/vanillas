const _ = require('lodash')
const R = require('ramda')
const Benchmark = require('benchmark')
const size = require('../lib/size')

const suite = new Benchmark.Suite

function sizeBenchmark(val) {
  return new Promise(resolve => suite
    .add('Futilities "size"', () =>
      size(val)
    )
    .add('Lodash "length"', () =>
      _.size(val)
    )
    .add('Ramda "length"', () =>
      R.length(val)
    )
    .on('cycle', event => console.log(String(event.target)))
    .on('complete', function() {
      resolve(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run({ async: true })
  )
}

(async () => {
  let resultText = ''
  resultText = await sizeBenchmark('lorem ipsum dolor sit amet')
  console.log(resultText)
  resultText = await sizeBenchmark([1, 2, 3, 4, 5, 6, 7, 8, 9])
  console.log(resultText)
  resultText = await sizeBenchmark({
     lorem: '',
     ipsum: '',
     dolor: '',
     sit: '',
     amet: '',
     consectetur: {
       adipiscing: 'elit'
     }
  })
  console.log(resultText)
})()
