import _ from 'lodash'
import { size } from '../../src'

const val = {
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
  ['Vanillas "size"', () => size(val)],
  ['Lodash "size"', () => _.size(val)]
]

export default { tests }
