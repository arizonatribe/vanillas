import _ from 'lodash'
import { size } from '../../src'

const data = {
  lorem: '',
  ipsum: '',
  dolor: '',
  sit: '',
  amet: '',
  consectetur: {
    adipiscing: 'elit'
  }
}

const tests = [
  ['Futilities "size"', val => size(val)],
  ['Lodash "size"', val => _.size(val)]
]

export default { tests, data }
